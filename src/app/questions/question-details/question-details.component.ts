import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionService} from "../question.service";
import {Question} from "../question";
import {AnswersListComponent} from "../../answers/answers-list/answers-list.component";

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private questionService: QuestionService
  ) { }

  @ViewChild(AnswersListComponent)
  private answersList!: AnswersListComponent;

  id:number = this.activatedRoute.snapshot.params.question;
  question: Question | undefined

  ngOnInit(): void {
    this.questionService
      .getQuestionById(this.id)
      .subscribe(question => this.question = question)
  }

  updateAnswers() : void {
    this.answersList.getList();
  }

}
