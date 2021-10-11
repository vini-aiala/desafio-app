import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../subject.service";
import {Subject} from "../subject";
import {Router} from "@angular/router"

@Component({
  selector: 'app-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.css']
})
export class SubjectsListComponent implements OnInit {

  subjects: Subject[] = []

  constructor(
    private subjectService: SubjectService,
    private router: Router
  ) {  }

  ngOnInit(): void {
    this.subjectService
      .listSubjects()
      .subscribe( subjects => {
        this.subjects = subjects
      });
  }

  redirect(path:string):void {
    this.router.navigate([path])
  }

  redirectSubj(id: number): void {
    this.router.navigate(["/subject/"+id])
  }
}
