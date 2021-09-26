import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "./subject";

const API = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  listSubjects() {
    return this.http.get<Subject[]>(API + '/subject')
  }
}
