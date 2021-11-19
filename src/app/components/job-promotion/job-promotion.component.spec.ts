import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPromotionComponent } from './job-promotion.component';

describe('JobPromotionComponent', () => {
  let component: JobPromotionComponent;
  let fixture: ComponentFixture<JobPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
