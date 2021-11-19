import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginphoneComponent } from './components/loginphone/loginphone.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { ForgetotpComponent } from './components/forgetotp/forgetotp.component';
import { ForgetchangepassComponent } from './components/forgetchangepass/forgetchangepass.component';
import { SvgsComponent } from './components/svgs/svgs.component';
import { LoginsideComponent } from './components/loginside/loginside.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { TopsearchComponent } from './components/topsearch/topsearch.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { CreateJobsComponent } from './components/create-jobs/create-jobs.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from "@syncfusion/ej2-angular-richtexteditor";
import { NgxEditorModule } from 'ngx-editor';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobApplicationFormComponent } from './components/job-application-form/job-application-form.component';
import { JobWorkFlowComponent } from './components/job-work-flow/job-work-flow.component';
import { JobTeamComponent } from './components/job-team/job-team.component';
import { JobPromotionComponent } from './components/job-promotion/job-promotion.component';
import { JobSuggestedFieldsComponent } from './components/job-suggested-fields/job-suggested-fields.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginphoneComponent,
    ForgetpasswordComponent,
    ForgetotpComponent,
    ForgetchangepassComponent,
    SvgsComponent,
    LoginsideComponent,
    DashboardComponent,
    SidenavComponent,
    TopnavComponent,
    TopsearchComponent,
    JobsComponent,
    CreateJobsComponent,
    JobDetailsComponent,
    JobApplicationFormComponent,
    JobWorkFlowComponent,
    JobTeamComponent,
    JobPromotionComponent,
    JobSuggestedFieldsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    NgxEditorModule
  ],
  providers: [Title, ToolbarService, LinkService, ImageService, HtmlEditorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
