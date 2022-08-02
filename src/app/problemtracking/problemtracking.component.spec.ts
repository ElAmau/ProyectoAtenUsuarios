import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemtrackingComponent } from './problemtracking.component';

describe('ProblemtrackingComponent', () => {
  let component: ProblemtrackingComponent;
  let fixture: ComponentFixture<ProblemtrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemtrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemtrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
