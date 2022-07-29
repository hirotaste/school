import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbTypeaheadModule } from "@ng-bootstrap/ng-bootstrap";
import { InputEmailComponent } from "./input-email.component";

@NgModule({
  declarations: [InputEmailComponent],
  exports: [InputEmailComponent],
  imports: [CommonModule, ReactiveFormsModule, NgbTypeaheadModule],
})
export class InputEmailModule {}
