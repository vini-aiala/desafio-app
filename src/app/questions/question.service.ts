import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Question} from "./question";
import {QuestionPage} from "./question-page";

const API = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    private http: HttpClient
  ) { }

  listQuestionsPage(id:number, page:number, size:number) {
    // return this.http.get(API + `/question`,  {params: {subjectId: 3, page: 0, size: 2}})
    return this.http.get<QuestionPage>(`${API}/question?subjectId=${id}&page=${page}&size=${size}`)
  }

  getQuestionById(id:number) {
    return this.http.get<Question>(`${API}/question/${id}`)
  }
}
