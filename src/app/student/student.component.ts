/*
 * Brandon Mack, Qingyang Dai
 * */

import { Component, OnInit } from '@angular/core';
import {Student} from "./student";
import {StudentService} from "./student.service";
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public students: Student[] = [];
  public inputData: String[] = [];
  public mean: number = 0;
  public stddev: number = 0;

  constructor(public studentService: StudentService, private titleService: Title, private router: Router) { }

  ngOnInit() {
    this.setTitle("Assignment 4 - Survey");
    this.studentService.checkCookie();
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  public calcMean(): void {
    this.inputData?.forEach((element) => this.mean += parseInt(String(element)));
    this.mean = (this.mean/this.inputData?.length);
  }

  public calcStdDev(): void {
    let sum = 0;
    this.inputData?.forEach((element) => sum += Math.pow(parseInt(String(element)) - this.mean, 2));
    sum = sum / this.inputData.length;
    this.stddev = Math.sqrt(sum);
  }

  public acknewledgementRouter(): void {
    if(this.mean >= 90.0) this.router.navigate(['/winner-acknowledge', {mean: this.mean, stddev: this.stddev}]);
    else this.router.navigate(['/simple-acknowledge', {mean: this.mean, stddev: this.stddev}]);
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

  public onAddStudent(addForm: NgForm, data: any): void {
    console.log("Pre Data Values: " + data.value);
    this.inputData = data.value.split(',');
    console.log("Post Data Values: " + this.inputData);
    this.calcMean();
    this.calcStdDev();
    console.log("Mean: " + this.mean + " | stddev: " + this.stddev);
    this.studentService.addStudent(addForm.value).subscribe(
      (response: Student) => {
        console.log(response);
        this.getStudents();
        this.acknewledgementRouter();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
