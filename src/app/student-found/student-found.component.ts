import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Student} from "../student/student";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {StudentService} from "../student/student.service";

@Component({
  selector: 'app-student-found',
  templateUrl: './student-found.component.html',
  styleUrls: ['./student-found.component.css']
})
export class StudentFoundComponent implements OnInit {
  public students: Student[] = [];
  public results: Student[] = [];
  public sid = 0;

  constructor(private titleService: Title, private route: ActivatedRoute, private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.getStudents();
    this.setTitle("Student Found");
    this.sid = Number(this.route.snapshot.paramMap.get('sid'));
    setTimeout(() => this.searchStudent(this.sid),1000);
  }

  public searchStudent(key: number): void {
    for (const student of this.students) {
      if (student.studentCode == key) {
        this.results.push(student);
      }
    }
    if (this.results.length == 0) {
      this.router.navigate(['**',]);
    }
  }

  public getStudents(): void {
    this.studentService.getStudents().subscribe(
      (response: Student[]) => {
        this.students = response;
        console.log(this.students);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
