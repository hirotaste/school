import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Classes } from '@models/classes';
import { ClassService } from '@services/class.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
      term: ''
    });;
  loading = false;
  classes: Classes[] = [];

  constructor(private formBuilder: FormBuilder, private _classes: ClassService, private toastr: ToastrService) {}

  ngOnInit(): void {
    const formTerm = this.form.get('term');
    if (formTerm) {
      formTerm.valueChanges.pipe(debounceTime(450), distinctUntilChanged())
      .subscribe(() => {
        this.loadData();
      });
    }

    this.loadData();
  }

  async loadData() {
    this.loading = true;
    
    try {
      this.classes = [];

      const { term } = this.form.value;

      if (term) {
        this.classes = await this._classes.search(term);
      } else {
        this.classes = await this._classes.getAll();
      }
    } catch {
      this.toastr.error('Não foi possível retornar as materias.', 'Ocorreu um erro!');
    }

    this.loading = false;
  }
}
