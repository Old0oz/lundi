import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendrierComponent } from './composants/calendrier/calendrier/calendrier.component';
import { FormulaireComponent } from './composants/formulaire/formulaire.component';
import { Formulaire2Component } from './composants/formulaire2/formulaire2.component';
import { CoursesComponent } from './composants/courses/courses.component';
import { LoginComponent } from './composants/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendrierComponent,
    FormulaireComponent,
    Formulaire2Component,
    CoursesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
