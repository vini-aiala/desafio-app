import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UiModule} from "./ui/ui.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {SubjectsModule} from "./subjects/subjects.module";
import {QuestionsModule} from "./questions/questions.module";
import {AuthModule} from "./auth/auth.module";
import { AnswersFormComponent } from './answers/answers-form/answers-form.component';
import { AnswersListComponent } from './answers/answers-list/answers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AnswersFormComponent,
    AnswersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UiModule,
    MatToolbarModule,
    SubjectsModule,
    QuestionsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
