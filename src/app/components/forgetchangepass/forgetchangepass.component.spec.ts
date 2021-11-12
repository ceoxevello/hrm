import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetchangepassComponent } from './forgetchangepass.component';

describe('ForgetchangepassComponent', () => {
  let component: ForgetchangepassComponent;
  let fixture: ComponentFixture<ForgetchangepassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetchangepassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetchangepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
