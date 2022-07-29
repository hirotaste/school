import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { Component, EventEmitter, Injector, NgZone, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';

import { ControlValueAccessorConnectorComponent } from '../control-value-accessor-connector';
import { SearchCompaniesService } from '@services/search-companies.service';
import { CompanyElastic } from '@models/company-elastic';

@Component({
  selector: 'app-fantasy-name-typeahead',
  templateUrl: './fantasy-name-typeahead.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FantasyNameTypeaheadComponent,
      multi: true
    }
  ]
})
export class FantasyNameTypeaheadComponent extends ControlValueAccessorConnectorComponent implements OnInit {
  @Output() changeCompany = new EventEmitter<CompanyElastic>();
  items: CompanyElastic[] = [];
  input$ = new Subject<string>();
  isLoading: boolean;

  constructor(private _searchCompanies: SearchCompaniesService, private _ngZone: NgZone, injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.input$
      .pipe(
        filter(term => !!term),
        debounceTime(450),
        distinctUntilChanged()
      )
      .subscribe(term => {
        this._ngZone.run(async () => {
          this.isLoading = true;

          const { data } = await this._searchCompanies.search(term).catch(() => ({
            data: []
          }));

          this.items = data;

          this.isLoading = false;
        });
      });
  }

  changeFantasyName(e: CompanyElastic) {
    this.changeCompany.emit(e);
  }
}
