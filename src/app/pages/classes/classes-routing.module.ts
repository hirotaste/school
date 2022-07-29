import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClassListComponent } from './classes-list/class-list.component';
import { ClassCreateComponent } from './classes-create/class-create.component';

const routes: Routes = [
  {
    path: '',
    component: ClassListComponent,
    data: { topbarTitle: 'Materias' }
  },
  {
    path: 'create',
    component: ClassCreateComponent,
    data: { topbarTitle: 'Criar Materia' }
  },
  {
    path: ':classId/edit',
    component: ClassCreateComponent,
    data: { topbarTitle: 'Atualizar Materia' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassRoutingModule {}
