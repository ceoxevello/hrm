import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTeamComponent } from './job-team.component';

describe('JobTeamComponent', () => {
  let component: JobTeamComponent;
  let fixture: ComponentFixture<JobTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
