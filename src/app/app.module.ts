import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { WinnerAcknowledgeComponent } from './winner-acknowledge/winner-acknowledge.component';
import { SimpleAcknowledgeComponent } from './simple-acknowledge/simple-acknowledge.component';
import { StudentNotFoundComponent } from './student-not-found/student-not-found.component';
import { StudentComponent } from './student/student.component';
import { StudentFoundComponent } from './student-found/student-found.component';

@NgModule({
  declarations: [
    AppComponent,
    WinnerAcknowledgeComponent,
    SimpleAcknowledgeComponent,
    StudentNotFoundComponent,
    StudentComponent,
    StudentFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'winner-acknowledge', component: WinnerAcknowledgeComponent},
      {path: 'simple-acknowledge', component: SimpleAcknowledgeComponent},
      {path: 'survey', component: StudentComponent},
      {path: 'found', component: StudentFoundComponent},
      {path: '', component: StudentComponent},
      {path: '**', component: StudentNotFoundComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
