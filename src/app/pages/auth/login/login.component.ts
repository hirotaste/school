import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthenticationError } from '@exceptions/authentication-error';
import { AuthContext } from '@contexts/AuthContext';
import { AppError } from '@exceptions/app-error';
import { User } from '@models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../authentication.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });;
  submitted = false;
  loading = false;

  constructor(
    private useAuth: AuthContext,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _context: AuthContext
  ) {}

  ngOnInit() {
    this.useAuth.logout();
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    try {
      const { email } = this.loginForm.value;

      const user = new User();
      user.email = email;
      this._context.setLoggedUser(user);

      this.router.navigate(['/students']);
    } catch (error) {
      if (error instanceof AppError) {
        this.toastr.error(error.message, error.title);
      } else if (error instanceof AuthenticationError) {
        this.toastr.error(error.message, 'Erro!');
      } else {
        this.toastr.error('O e-mail ou senha está inválido.', 'Erro!');
      }
    }

    this.loading = false;
  }
}
