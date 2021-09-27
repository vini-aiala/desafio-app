import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import {MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";
import {MyCustomPaginatorIntl} from "./questions-list/paginator/custom-paginator";
import {PaginatorComponent} from "./questions-list/paginator/paginator.component";
import { QuestionDetailsComponent } from './question-details/question-details.component';

@NgModule({
  declarations: [
    QuestionsListComponent,
    PaginatorComponent,
    QuestionDetailsComponent
  ],
    imports: [
        CommonModule,
        MatPaginatorModule,
    ],
  providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}],
})
export class QuestionsModule { }
