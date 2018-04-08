import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

import { CalculatorService } from './calculator.service'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalculatorComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CalculatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
