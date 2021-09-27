import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubjectsListComponent} from "./subjects/subjects-list/subjects-list.component";
import {QuestionsListComponent} from "./questions/questions-list/questions-list.component";
import {QuestionDetailsComponent} from "./questions/question-details/question-details.component";

const routes: Routes = [
  {path:"", component:SubjectsListComponent},
  {path:"subject/:subject", component:QuestionsListComponent},
  {path:"question/:question", component:QuestionDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
