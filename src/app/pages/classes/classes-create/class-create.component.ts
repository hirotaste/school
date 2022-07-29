import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Classes } from '@models/classes';
import { ClassService } from '@services/class.service';

@Component({
  selector: 'app-class-create',
  templateUrl: './class-create.component.html',
  styleUrls: ['./class-create.component.scss']
})
export class ClassCreateComponent implements OnInit {
  form: FormGroup = this.builder.group({
      name: [null, Validators.required],
      active: [true]
    });
  submitting = false;
  classes = new Classes();

  constructor(
    private activatedRoute: ActivatedRoute,
    private _class: ClassService,
    private builder: FormBuilder,
    private router: Router
  ) {}

  async ngOnInit() {
    const classId = this.activatedRoute.snapshot.paramMap.get('classId');

    if (classId) {
      this.classes = await this._class.getById(classId);
    }
    
    this.form.patchValue(this.classes);
  }

  async handleSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.submitting = true;

    try {
      const classes = this.form.value;

      if (this.classes.id) {
        classes.id = this.classes.id;
      }

      classes.active = !classes.active || classes.active == 'false' ? false : true;

      await this._class.save(classes);

      this.router.navigate(['/classes']);
    } catch (e) {
      console.error(e);
    }

    this.submitting = false;
  }
}
