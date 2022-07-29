import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FantasyNameTypeaheadComponent } from './fantasy-name-typeahead.component';

@NgModule({
  declarations: [FantasyNameTypeaheadComponent],
  exports: [FantasyNameTypeaheadComponent],
  imports: [NgSelectModule, FormsModule, CommonModule, ReactiveFormsModule]
})
export class FantasyNameTypeaheadModule {}
