import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Question} from "./question";
import {QuestionPage} from "./question-page";
import {TokenService} from "../auth/token.service";

const API = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    private tokenService: TokenService,
    private http: HttpClient
  ) { }

  private headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.tokenService.getToken() ?? ''
    }
  )

  listQuestionsPage(id:number, page:number, size:number) {
    // return this.http.get(API + `/question`,  {params: {subjectId: 3, page: 0, size: 2}})
    return this.http.get<QuestionPage>(`${API}/question?subjectId=${id}&page=${page}&size=${size}`)
  }

  getQuestionById(id:number) {
    return this.http.get<Question>(`${API}/question/${id}`)
  }

  submitQuestion(title:string, text:string, userId:number, subjectId:number){
    return this.http.post<Question>(API + '/question', {title, text, userId, subjectId}, {observe: "response", headers: this.headers})
  }
}
