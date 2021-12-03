/*
 * Brandon Mack, Qingyang Dai
 * */

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "./student";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiServerUrl = environment.appBaseUrl;

  constructor(private http: HttpClient) { }

  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiServerUrl}/student/all`);
  }

  public addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.apiServerUrl}/student/add`, student);
  }

  public getStudent(studentId: Number): Observable<Student> {
    return this.http.get<Student>(`${this.apiServerUrl}/student/find/${studentId}`);
  }

  setCookie(cookie_name: string, cookie_value: string, expiration_days: number)
  {
    const date = new Date();
    date.setTime(date.getTime() + (expiration_days*24*60*60*1000));
    let expiration_date = "expires = " + date.toUTCString();
    document.cookie = cookie_name + "=" + cookie_value + ";" + expiration_date + ";path=/";
  }

  getCookie(cookie_name: string)
  {
    let username = cookie_name + "=";
    let decoded_cookie = decodeURIComponent(document.cookie);
    let parts = decoded_cookie.split(';');
    for(let i = 0; i < parts.length; i++)
    {
      let x = parts[i];
      while(x.charAt(0) == ' ')
      {
        x = x.substring(1);
      }
      if(x.indexOf(username) == 0)
      {
        return x.substring(username.length, x.length);
      }
    }
    return "";
  }

  checkCookie()
  {
    let username = this.getCookie("username");
    let date = new Date();
    if(username)
    {
      if(date.getHours() >= 5 && date.getHours() < 12)
      {
        alert("Good Morning " + username + ", welcome to SWE642 Survey");
      }
      else if(date.getHours() >= 12 && date.getHours() < 6)
      {
        alert("Good Afternoon " + username + ", welcome to SWE642 Survey");
      }
      else
      {
        alert("Good Evening " + username + ", welcome to SWE642 Survey");
      }
    }
    else
    {
      this.resetName();
    }
  }

  resetName()
  {
    let username = prompt("Please enter your name:", "");
    while(username === "" || username === null)
    {
      username = prompt("Please enter your name:", "");
    }
    this.setCookie("username", username, 7);
    location.reload();
  }
}
