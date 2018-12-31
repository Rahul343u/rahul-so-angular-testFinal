import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MacroPoloComponent } from './macro-polo/macro-polo.component';
import { ParseInvoiceNumbersComponent } from './parse-invoice-numbers/parse-invoice-numbers.component';

const appRoutes: Routes = [
  { path: '', component: MacroPoloComponent },
  { path: 'macro-polo', component: MacroPoloComponent },
  { path: 'parse-invoice', component: ParseInvoiceNumbersComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MacroPoloComponent,
    ParseInvoiceNumbersComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
