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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginphoneComponent,
    ForgetpasswordComponent,
    ForgetotpComponent,
    ForgetchangepassComponent,
    SvgsComponent,
    LoginsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
