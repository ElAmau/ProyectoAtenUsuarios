import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterprobComponent } from './registerprob.component';

describe('RegisterprobComponent', () => {
  let component: RegisterprobComponent;
  let fixture: ComponentFixture<RegisterprobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterprobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterprobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
