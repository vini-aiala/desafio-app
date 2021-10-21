import { Component, OnInit } from '@angular/core';
import {Question} from "../../questions/question";
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionService} from "../../questions/question.service";
import {Answer} from "../answer";
import {AnswerService} from "../answer.service";

@Component({
  selector: 'app-answers-list',
  templateUrl: './answers-list.component.html',
  styleUrls: ['./answers-list.component.css']
})
export class AnswersListComponent implements OnInit {
  id:number = this.activatedRoute.snapshot.params.question;
  answers: Answer[] = []

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private answerService: AnswerService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    return this.answerService
      .listAnswersbyQuestion(this.id)
      .subscribe(answers => {
        this.answers = answers;
      });
  }

}
