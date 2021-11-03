import { Injectable } from '@angular/core';
import {AuthorService} from "../authors/author.service";
import jwtDecode from "jwt-decode";
import {Token} from "./token";
import {BehaviorSubject, Observable} from "rxjs";
import {Author} from "../authors/author";

const KEY = 'jwt-token'

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private authorSubject = new BehaviorSubject<any>(null)

  constructor(
    private authorService: AuthorService
  ) {
    if (this.exists()) {
      this.decode()
    }
  }

  getToken() {
    return localStorage.getItem(KEY);
  }

  getAuthor() {
    return this.authorSubject.asObservable()
  }

  store(token: string) : void {
    localStorage.setItem(KEY, token);
    this.decode()
  }

  remove() : void {
    localStorage.removeItem(KEY);
    this.authorSubject.next(null)
  }

  exists() : boolean {
   return !!this.getToken()
  }

  decode() {
    const token = this.getToken() ?? '';
    const id = parseInt(jwtDecode<Token>(token).sub)
    this.authorService
      .getAuthorById(id)
      .subscribe(
        res => this.authorSubject.next(res)
      )
  }
}
