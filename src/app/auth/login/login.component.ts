import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = this.formBuilder.group({
    email: [''],
    password: ['']
  });

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  login() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    this.authService
      .authenticate(email, password)
      .subscribe(() => this.router.navigate(['']),
          error => {
            console.log(error)
            this.loginForm.reset()
          }
      )
  }

}
