import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CalendrierComponent } from './composants/calendrier/calendrier.component';
import { FormulaireComponent } from './composants/formulaire/formulaire.component';
import { Formulaire2Component } from './composants/formulaire2/formulaire2.component';
import { CoursesComponent } from './composants/courses/courses.component';
import { LoginComponent } from './composants/login/login.component';
import { RecettesService } from './shared/services/recettes.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';

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
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  providers: [RecettesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
