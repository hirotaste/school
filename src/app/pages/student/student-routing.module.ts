import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

const routes: Routes = [
  {
    path: '',
    component: StudentListComponent,
    data: { topbarTitle: 'Alunos' }
  },
  {
    path: 'create',
    component: StudentEditComponent,
    data: { topbarTitle: 'Cadastrar Aluno' }
  },
  {
    path: ':studentId/edit',
    component: StudentEditComponent,
    data: { topbarTitle: 'Atualizar Aluno' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {}
