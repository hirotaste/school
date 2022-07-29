import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorTailorModule } from '@ngneat/error-tailor';

import { ComponentsModule } from '@shared/components/components.module';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing';
import { InputPasswordModule } from '@forms/input-password/input-password.module';
import { InputEmailModule } from '@forms/input-email/input-email.module';
import { IsLoadingModule } from '@shared/directives/is-loading.module';
import { InputModule } from '@forms/input/input.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbAlertModule,
    ComponentsModule,
    InputPasswordModule,
    AuthRoutingModule,
    InputEmailModule,
    IsLoadingModule,
    ErrorTailorModule,
    InputModule
  ]
})
export class AuthModule {}
