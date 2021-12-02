import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAcknowledgeComponent } from './simple-acknowledge.component';

describe('SimpleAcknowledgeComponent', () => {
  let component: SimpleAcknowledgeComponent;
  let fixture: ComponentFixture<SimpleAcknowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleAcknowledgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAcknowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
