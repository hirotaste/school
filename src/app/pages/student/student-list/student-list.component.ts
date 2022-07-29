import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { Student } from '@models/student';
import { StudentService } from '@services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
      term: ''
    });;
  students: Student[] = [];
  isLoading = true;

  constructor(private formBuilder: FormBuilder, private _studentService: StudentService, private toastr: ToastrService) {}

  async ngOnInit() {
    const formTerm = this.form.get('term');
    if (formTerm) {
      formTerm.valueChanges.pipe(debounceTime(450), distinctUntilChanged())
      .subscribe(() => {
        this.search();
      });
    }

    await this.search();
  }

  async search() {
    this.isLoading = true;
    this.students = [];

    const { term } = this.form.value;

    try {
      if (term) {
        this.students = await this._studentService.search(term);
      } else {
        this.students = await this._studentService.getAll();
      }
    } catch {
      this.toastr.error('Não foi possível retornar as materias.', 'Ocorreu um erro!');
    }

    this.isLoading = false;
  }
}
