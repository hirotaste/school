import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorTailorModule } from '@ngneat/error-tailor';

import { ComponentsModule } from '@shared/components/components.module';
import { IsLoadingModule } from '@shared/directives/is-loading.module';
import { ClassRoutingModule } from './classes-routing.module';
import { ClassListComponent } from './classes-list/class-list.component';
import { ClassCreateComponent } from './classes-create/class-create.component';
import { InputModule } from '@forms/input/input.module';

@NgModule({
  declarations: [ClassListComponent, ClassCreateComponent],
  imports: [
    FormsModule,
    CommonModule,
    ErrorTailorModule,
    IsLoadingModule,
    ComponentsModule,
    NgbTooltipModule,
    ReactiveFormsModule,
    ClassRoutingModule,
    InputModule
  ]
})
export class ClassesModule {}
