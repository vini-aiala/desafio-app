import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../../auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenService} from "../../auth/token.service";
import {filter} from "rxjs/operators";
import {QuestionService} from "../question.service";
import {Question} from "../question";

@Component({
  selector: 'app-questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.css']
})
export class QuestionsFormComponent implements OnInit {
  author$ = this.tokenService.getAuthor()
  userId: number = 0
  subjectId: number = 0

  questionForm = this.formBuilder.group({
    title: [''],
    text: [''],
  });

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private tokenService: TokenService,
              private questionService: QuestionService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
          this.subjectId = parseInt(params.subjectId);
        }
      );

    this.author$.subscribe(
      (author)=> this.userId = author?.id
    )
  }

  submit() {
    const title = this.questionForm.get('title')?.value;
    const text = this.questionForm.get('text')?.value;
    const userId = this.userId;
    const subjectId = this.subjectId;
    this.questionService
      .submitQuestion(title, text, userId, subjectId)
      .subscribe(response => {
        this.router.navigate(['question', response.body?.id])
      }, error => {
        if (error.status === 403) {
          this.tokenService.remove()
          this.router.navigate(['login'])
        } else {
          this.questionForm.reset()
        }
      })
  }

}
