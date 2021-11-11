import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserModule, Title } from '@angular/platform-browser';

const routes: Routes = [
  {path: '', component: LoginComponent, data: { title : "Welcome to Xevello"}},
  {path: 'home', component: LoginComponent, data: { title: "Xevello HRM | Login " }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [LoginComponent]
