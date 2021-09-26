import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContainerComponent } from './container/container.component';
import {AppRoutingModule} from "../app-routing.module";



@NgModule({
  declarations: [
    FooterComponent,
    ToolbarComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    FooterComponent,
    ToolbarComponent,
    ContainerComponent
  ]
})
export class UiModule { }
