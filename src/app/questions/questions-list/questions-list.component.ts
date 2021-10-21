import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionService} from "../question.service";
import {Subject} from "../../subjects/subject";
import {Question} from "../question";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {
  STATUS: {[index: string]: string} = {
    NOT_ANSWERED: 'Não respondida',
    ANSWERED: 'Respondida',
    SOLVED: 'Resolvida',
    CLOSED: 'Encerrada'
  }

  id:number = this.activatedRoute.snapshot.params.subject;

  pageIndex:number = 0
  pageSize:number = 10
  totalElements:number = 0

  questions: Question[] = []

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    this.getPage();
  }

  redirectNew(path:string):void {
    this.router.navigate([path], { queryParams: { subjectId: this.id } })
  }

  getPage() {
    return this.questionService
      .listQuestionsPage(this.id, this.pageIndex, this.pageSize)
      .subscribe(page => {
        this.questions = page.content
        this.totalElements = page.totalElements
      });
  }

  updatePage(pageEvent: PageEvent) {
    this.pageSize = pageEvent.pageSize;
    this.pageIndex = pageEvent.pageIndex;
    this.getPage();
  }

  redirectQuest(id: number): void {
    this.router.navigate(["/question/"+id])
  }
}
