import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import {TokenService} from "../../auth/token.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  author$ = this.tokenService.getAuthor()

  constructor(
    private router: Router,
    private tokenService: TokenService
  ) { }

  redirect(path:string):void {
    this.router.navigate([path])
  }

  logout() {
    this.tokenService.remove()
    this.router.navigate(['login'])
  }
}
