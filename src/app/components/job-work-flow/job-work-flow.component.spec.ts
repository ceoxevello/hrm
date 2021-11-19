import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobWorkFlowComponent } from './job-work-flow.component';

describe('JobWorkFlowComponent', () => {
  let component: JobWorkFlowComponent;
  let fixture: ComponentFixture<JobWorkFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobWorkFlowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobWorkFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
