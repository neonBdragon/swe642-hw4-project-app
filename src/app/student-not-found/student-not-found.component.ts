/*
 * Brandon Mack, Qingyang Dai
 * */

import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

// Handles all the student-not-found page logic

@Component({
  selector: 'app-student-not-found',
  templateUrl: './student-not-found.component.html',
  styleUrls: ['./student-not-found.component.css']
})
export class StudentNotFoundComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle("Student Not Found");
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
