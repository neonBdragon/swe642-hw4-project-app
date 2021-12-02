import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFoundComponent } from './student-found.component';

describe('StudentFoundComponent', () => {
  let component: StudentFoundComponent;
  let fixture: ComponentFixture<StudentFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
