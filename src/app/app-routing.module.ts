import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubjectsListComponent} from "./subjects/subjects-list/subjects-list.component";
import {QuestionsListComponent} from "./questions/questions-list/questions-list.component";
import {QuestionDetailsComponent} from "./questions/question-details/question-details.component";
import {LoginComponent} from "./auth/login/login.component";
import {SignupComponent} from "./auth/signup/signup.component";

const routes: Routes = [
  {path:"", component:SubjectsListComponent},
  {path:"subject/:subject", component:QuestionsListComponent},
  {path:"question/:question", component:QuestionDetailsComponent},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
