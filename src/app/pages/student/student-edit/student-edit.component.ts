import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { states } from '@resources/states.data';
import { Student } from '@models/student';
import { StudentService } from '@services/student.service';
import { GenericValidator } from '../../../core/validators/generic-validator';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {
  form: FormGroup = this.builder.group({
    name: [null, Validators.required],
    cpf: [null, [Validators.required, GenericValidator.CPF]],
    email: [null, [Validators.required, GenericValidator.EMAIL]],
    telephone: [null, Validators.required]
  });
  submitting = false;
  admin = false;
  student: Student = new Student();
  states = states;

  constructor(
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private builder: FormBuilder,
    private _studentServ: StudentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.verifyStudent();
  }

  async verifyStudent() {
    const studentId = this.activatedRoute.snapshot.paramMap.get('studentId');
    this.student = await this._studentServ.getById(studentId ?? '0');

    this.form.patchValue(this.student);
  }

  async handleSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.submitting = true;

    try {
      const student: Student = this.form.value;

      await this._studentServ.save({
        ...student,
        id: this.student.id
      });

      this.toastr.success('Seus dados foram salvos com sucesso!');
      this.router.navigate(['/students']);
    } catch (err) {
      this.toastr.error('Verifique seus dados, e tente novamente.', 'Ocorreu um erro!');
    }

    this.submitting = false;
  }
}
