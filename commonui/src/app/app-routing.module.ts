import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TemplateComponent } from './template/template.component';
import { SignupComponent } from './signup/signup.component';
import { OtpVarificationComponent } from './otp-varification/otp-varification.component';
import { SetPasswordComponent } from './set-password/set-password.component';

const routes: Routes = [
  {
    path:'',
    component:TemplateComponent,
    children:[
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'signup',
        component:SignupComponent
      },
      {
        path:'otpvarification',
        component:OtpVarificationComponent
      },
      {
        path:'setpassword',
        component:SetPasswordComponent
      }

    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  constructor(){

  }

 
}
