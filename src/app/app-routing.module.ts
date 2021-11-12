import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserModule, Title } from '@angular/platform-browser';
import { LoginphoneComponent } from './components/loginphone/loginphone.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { ForgetchangepassComponent } from './components/forgetchangepass/forgetchangepass.component';

const routes: Routes = [
  {path: '', component: LoginComponent, data: { title : "Welcome to Xevello"}},
  {path: 'login', component: LoginComponent, data: { title: "Xevello HRM | Login " }},
  {path: 'login-otp', component: LoginphoneComponent, data: {title : "Xevello HRM | Login with Phone"}},
  {path: 'forget-password', component: ForgetpasswordComponent, data: {title : "Xevello | Forget Password"}},
  {path: 'change-password', component: ForgetchangepassComponent, data: {title: "xevello | Change Password"}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [LoginComponent]
