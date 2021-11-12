import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginphoneComponent } from './loginphone.component';

describe('LoginphoneComponent', () => {
  let component: LoginphoneComponent;
  let fixture: ComponentFixture<LoginphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginphoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
