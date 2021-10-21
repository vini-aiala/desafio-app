import { Injectable } from '@angular/core';
import {TokenService} from "../auth/token.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {QuestionPage} from "../questions/question-page";
import {Question} from "../questions/question";
import {Answer} from "./answer";

const API = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(
    private tokenService: TokenService,
    private http: HttpClient
  ) { }

  private headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.tokenService.getToken() ?? ''
    }
  )

  listAnswersbyQuestion(questionId:number) {
    return this.http.get<Answer[]>(`${API}/answer?questionId=${questionId}`)
  }

  submitAnswer(text:string, authorId:number, questionId:number){
    return this.http.post<Question>(API + '/answer', {text, authorId, questionId}, {observe: "response", headers: this.headers})
  }
}
