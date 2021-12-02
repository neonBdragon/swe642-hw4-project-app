import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerAcknowledgeComponent } from './winner-acknowledge.component';

describe('WinnerAcknowledgeComponent', () => {
  let component: WinnerAcknowledgeComponent;
  let fixture: ComponentFixture<WinnerAcknowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinnerAcknowledgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerAcknowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
