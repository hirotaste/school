import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { GenericValidator } from '@validators/generic-validator';
import { ToastrService } from 'ngx-toastr';
import { fadeIn } from 'src/app/animations/fadeIn';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['../authentication.scss'],
  animations: [fadeIn]
})
export class ForgotPasswordComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  submitting = false;

  constructor(private builder: FormBuilder, private _auth: AuthService, private toastr: ToastrService) {}

  ngOnInit() {
    this.form = this.builder.group({
      email: [null, [Validators.required, GenericValidator.EMAIL]]
    });
  }

  async handleSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.submitting = true;

    try {
      const { email } = this.form.value;

      await this._auth.recoverPassword(email);

      this.toastr.success('E-mail de recuperação enviado com sucesso!');

      this.submitted = true;
    } catch (err) {
      this.toastr.error('Não foi possível enviar o e-mail de recuperação. Tente novamente.', 'Erro!');
    }

    this.submitting = false;
  }
}
