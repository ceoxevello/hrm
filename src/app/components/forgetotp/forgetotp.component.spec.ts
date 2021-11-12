import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetotpComponent } from './forgetotp.component';

describe('ForgetotpComponent', () => {
  let component: ForgetotpComponent;
  let fixture: ComponentFixture<ForgetotpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetotpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
