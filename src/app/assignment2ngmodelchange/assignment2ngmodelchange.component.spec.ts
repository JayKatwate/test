import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment2ngmodelchangeComponent } from './assignment2ngmodelchange.component';

describe('Assignment2ngmodelchangeComponent', () => {
  let component: Assignment2ngmodelchangeComponent;
  let fixture: ComponentFixture<Assignment2ngmodelchangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Assignment2ngmodelchangeComponent]
    });
    fixture = TestBed.createComponent(Assignment2ngmodelchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
