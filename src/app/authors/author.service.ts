import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Author} from "./author";

const API = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(
    private http: HttpClient
  ) { }

  getAuthorById(id:number) {
    return this.http.get<Author>(`${API}/author/${id}`)
  }
}
