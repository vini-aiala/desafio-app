import { Component, OnInit, Input } from '@angular/core';

const CATEGORIES: {[index: string]: string} = {
  INFRA_DEVOPS: 'Infraestrutura e DevOps',
  BACKEND: 'Back-end',
  FRONTEND: 'Front-end',
  DATA: 'Dados',
  SCRIPTING: 'Scripting',
  PROJECT_MANAGEMENT: 'Gerenciamento de projetos'
}

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent implements OnInit {

  @Input()
  category: string = "";
  categoryName: string = "";

  constructor() {  }

  ngOnInit(): void {
    this.categoryName = CATEGORIES[this.category]
  }

}
