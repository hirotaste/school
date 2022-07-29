import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { ToastrModule } from 'ngx-toastr';
import { NgxMaskModule } from 'ngx-mask';

import { PagesRoutingModule } from '@pages/pages-routing.module';
import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { errorTailorConfig } from '@resources/error-tailor-config';
import { LayoutsModule } from '@layouts/layouts.module';

registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    NgSelectModule,
    LayoutsModule,
    FormsModule,
    NgbModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot(),
    ErrorTailorModule.forRoot(errorTailorConfig),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
