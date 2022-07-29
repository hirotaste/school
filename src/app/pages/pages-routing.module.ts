import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LayoutComponent } from '@layouts/layout.component';
import { NotAuthGuard } from '@guards/not-auth.guard';
import { AuthGuard } from '@guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  {
    path: '',
    canActivateChild: [NotAuthGuard],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

  {
    path: '',
    component: LayoutComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'students',
        loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
      },
      {
        path: 'classes',
        loadChildren: () => import('./classes/classes.module').then(m => m.ClassesModule)
      }
    ]
  },

  {
    path: '**',
    loadChildren: () => import('./errors/404/error-404.module').then(m => m.Error404Module)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      paramsInheritanceStrategy: 'always',
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
