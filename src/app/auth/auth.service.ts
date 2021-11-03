import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {TokenService} from "./token.service";

const API = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private tokenService: TokenService) { }

  authenticate(email: string, password: string) : Observable<any> {
    return this.http
      .post(API + '/auth', {email, password}, {observe: "response"})
      .pipe(tap(res => {
        if (res.status == 200) {
          const token = res.body?.toString() ?? ''
          this.tokenService.store(token);
        }
      }))
  }

  signup(name: string, email: string, password: string) : Observable<any> {
    return this.http
      .post(API + '/author', {name, email, password}, {observe: "response"})
  }
}
