import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSuggestedFieldsComponent } from './job-suggested-fields.component';

describe('JobSuggestedFieldsComponent', () => {
  let component: JobSuggestedFieldsComponent;
  let fixture: ComponentFixture<JobSuggestedFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobSuggestedFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSuggestedFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
