import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { NgbModule,NgbToast, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateComponent } from './template/template.component';
import { SignupComponent } from './signup/signup.component';
import { OtpVarificationComponent } from './otp-varification/otp-varification.component';
import { SetPasswordComponent } from './set-password/set-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TemplateComponent,
    SignupComponent,
    OtpVarificationComponent,
    SetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbToast,
    NgbToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
