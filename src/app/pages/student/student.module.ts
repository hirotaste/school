import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';

import { InputTelephoneModule } from '@shared/components/forms/input-telephone/input-telephone.module';
import { ComponentsModule } from '@shared/components/components.module';
import { IsLoadingModule } from '@shared/directives/is-loading.module';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentRoutingModule } from './student-routing.module';
import { InputModule } from '@forms/input/input.module';
import { ImgFallbackModule } from '@shared/directives/image-fallback.module';

@NgModule({
  declarations: [StudentListComponent, StudentEditComponent],
  imports: [
    InputModule,
    FormsModule,
    CommonModule,
    NgxMaskModule,
    NgSelectModule,
    IsLoadingModule,
    ComponentsModule,
    ImgFallbackModule,
    ErrorTailorModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    InputTelephoneModule,
    StudentRoutingModule
  ]
})
export class StudentModule {}
