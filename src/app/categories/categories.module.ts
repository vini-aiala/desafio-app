import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipComponent } from './chip/chip.component';
import {MatChipsModule} from "@angular/material/chips";



@NgModule({
    declarations: [
        ChipComponent
    ],
    exports: [
        ChipComponent
    ],
  imports: [
    CommonModule,
    MatChipsModule
  ]
})
export class CategoriesModule { }
