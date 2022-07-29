import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '@shared/components/components.module';
import { Error404Component } from './error-404.component';

const routes: Routes = [
  {
    path: '',
    component: Error404Component
  }
];

@NgModule({
  declarations: [Error404Component],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)]
})
export class Error404Module {}
