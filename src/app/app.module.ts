import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

import { loginPageServices } from './loginpage/loginpage.services';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [loginPageServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
