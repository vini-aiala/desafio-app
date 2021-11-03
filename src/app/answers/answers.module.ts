import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AnswersFormComponent} from "./answers-form/answers-form.component";
import {AnswersListComponent} from "./answers-list/answers-list.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    AnswersFormComponent,
    AnswersListComponent
  ],
  exports: [
    AnswersFormComponent,
    AnswersListComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class AnswersModule { }
