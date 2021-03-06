import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import {MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";
import {MyCustomPaginatorIntl} from "./questions-list/paginator/custom-paginator";
import {PaginatorComponent} from "./questions-list/paginator/paginator.component";
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { QuestionsFormComponent } from './questions-form/questions-form.component';
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {AnswersModule} from "../answers/answers.module";

@NgModule({
  declarations: [
    QuestionsListComponent,
    PaginatorComponent,
    QuestionDetailsComponent,
    QuestionsFormComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    AnswersModule,
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}],
})
export class QuestionsModule { }
