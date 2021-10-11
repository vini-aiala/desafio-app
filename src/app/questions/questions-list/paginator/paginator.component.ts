import {EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {Component, Input, OnInit, Output} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
  @Input('tamanho')
  tamanho: number = 0
  @Input('tam_pag')
  tam_pag: number = 0
  @Input('pag')
  pag: number = 0

  @Output() onPageChange = new EventEmitter<PageEvent>();

  constructor() {
  }

  emitPageChange(pageEvent:PageEvent):void {
    this.onPageChange.emit(pageEvent)
  }
}

