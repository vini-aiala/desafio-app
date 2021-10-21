import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenService} from "../../auth/token.service";
import {QuestionService} from "../../questions/question.service";
import {AnswerService} from "../answer.service";

@Component({
  selector: 'app-answers-form',
  templateUrl: './answers-form.component.html',
  styleUrls: ['./answers-form.component.css']
})
export class AnswersFormComponent implements OnInit {
  author$ = this.tokenService.getAuthor()
  authorId: number = 0
  questionId: number = parseInt(this.activatedRoute.snapshot.params.question);
  answerForm = this.formBuilder.group({
    text: [''],
  });

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private route: ActivatedRoute,
              private tokenService: TokenService,
              private answerService: AnswerService) { }

  ngOnInit(): void {
    this.author$.subscribe(
      (author)=> this.authorId = author?.id
    )
  }

  submit() {
    const text = this.answerForm.get('text')?.value;
    const authorId = this.authorId;
    const questionId = this.questionId;
    console.log(authorId, questionId, text)
    this.answerService
      .submitAnswer(text, authorId, questionId)
      .subscribe(
        response => {},
        error => {
          if (error.status === 403) {
            this.tokenService.remove()
            this.router.navigate(['login'])
          } else {
            this.answerForm.reset()
          }
      })
  }
}


