import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = this.formBuilder.group({
    email: [''],
    name: [''],
    password: ['']
  });

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  signUp() {
    const name = this.signupForm.get('name')?.value;
    const email = this.signupForm.get('email')?.value;
    const password = this.signupForm.get('password')?.value;
    console.log({name, email, password})
    this.authService
      .signup(name, email, password)
      .subscribe(() => {
          this.authService.authenticate(email, password).subscribe(() => {
            this.router.navigate([''])
          },
            error => {
            this.router.navigate(['login'])
            })
        },
        error => {
          console.log(error)
          this.signupForm.reset()
        }
      )
  }

}
