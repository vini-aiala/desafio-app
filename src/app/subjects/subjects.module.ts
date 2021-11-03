import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsListComponent } from './subjects-list/subjects-list.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatChipsModule} from "@angular/material/chips";
import {HttpClientModule} from "@angular/common/http";
import {CategoriesModule} from "../categories/categories.module";
import {MatTableModule} from "@angular/material/table";
import { SubjectsFormComponent } from './subjects-form/subjects-form.component';

@NgModule({
  declarations: [
    SubjectsListComponent,
    SubjectsFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    CategoriesModule,
    MatTableModule
  ],
  exports: [
    SubjectsListComponent
  ]
})
export class SubjectsModule { }
