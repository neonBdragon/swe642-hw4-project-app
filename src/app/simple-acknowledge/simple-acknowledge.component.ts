/*
 * Brandon Mack, Qingyang Dai
 * */

import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {Student} from "../student/student";
import {HttpErrorResponse} from "@angular/common/http";
import {StudentService} from "../student/student.service";

@Component({
  selector: 'app-simple-acknowledge',
  templateUrl: './simple-acknowledge.component.html',
  styleUrls: ['./simple-acknowledge.component.css']
})
export class SimpleAcknowledgeComponent implements OnInit {
  public mean = 0;
  public stddev = 0;
  public students: Student[] = [];

  constructor(private titleService: Title, private route: ActivatedRoute, private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.setTitle("Simple Acknowledgement");
    this.mean = Number(this.route.snapshot.paramMap.get('mean'));
    this.stddev = Number(this.route.snapshot.paramMap.get('stddev'));
    this.getStudents();
  }

  public searchStudent(key: number): void {
    const results: Student[] = [];
    for (const student of this.students) {
      if (student.studentCode == key) {
        results.push(student);
      }
    }
    if (results.length == 1) {
      this.router.navigate(['/found', {sid: key}]);
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
