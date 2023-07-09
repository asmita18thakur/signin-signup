import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';
import { Validators, FormControl } from '@angular/forms';
import { AES } from 'crypto-js';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastService } from '../toast-service/toast.service';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 
  email: string = '';
  password: string = ''
  show: boolean = false;
  isValid: string = '';
  encryptionKey = 'Gaian-PORTAL';
  rememberMe: boolean = false;
  loader: any;
  dynamicTenantId: any;
  
  constructor(
    private service: LoginServiceService,
    // private emailControl: FormControl  
    private router: Router,
    private route:ActivatedRoute
  ) {
    // this.form = new FormControl('', [Validators.required, Validators.email]);
    this.loader = { show: false };

  }

 

  showPass(boolean: boolean) {
    this.show = boolean
  }


  isValidEmail(eamil: string) {
    const containsAtSymbol = this.email.includes('@');
    const containsDotCom = this.email.includes('.com');
    if (containsAtSymbol && containsDotCom) {
      // Email is correct
      this.isValid = 'right';
    } else {
      // Email is incorrect
      this.isValid = 'wrong';
    }
  }





  setRememberMe() {
    const rememberedLogin = localStorage.getItem('rememberedLogin');
    if (rememberedLogin) {
      const loginInfo = JSON.parse(rememberedLogin);
      const currentTimestamp = new Date().getTime();
      if (loginInfo.expirationTime > currentTimestamp) {

        // Decrypt the login information before populating the form fields
        const decryptedemail = (loginInfo.email).toString();
        const decryptedPassword = AES.decrypt(loginInfo.password, this.encryptionKey).toString();
        this.email = decryptedemail;
        this.password = decryptedPassword;

      } else {
        // Clear expired remembered login from local storage
        localStorage.removeItem('rememberedLogin');
        this.router.navigate(['/login']);
      }
    }



  }


  login() {

    if (!this.email) {
      // this.toastService.show('User name is required', { className: 'warning' });
      return;
    }
    if (!this.password) {
      // this.toastService.('', 'Password is required');
      return;
    }

    if (this.rememberMe) {
      // Encrypt the login information before storing it in local storage
      const encryptedemail = (this.email).toString();
      const encryptedPassword = AES.encrypt(this.password, this.encryptionKey).toString();
      const expirationTime = new Date().getTime() + 30 * 60 * 1000; // 30 minutes
      localStorage.setItem('rememberedLogin', JSON.stringify({ email: encryptedemail, password: encryptedPassword, expirationTime }));
    } else {
      // Clear any existing remembered login from local storage
      localStorage.removeItem('rememberedLogin');
    }

    const params = 'username=' + this.email +
      '&password=' + this.password +
      '&grant_type=password&checkB2B=true&clientId=gaian&provider=other&productId=604789eb42b7dc00017a8341';
    this.loader.show = true;
    
    this.service.login(params)
      .subscribe((data: any) => {
        console.log(data)
        // this.toastService.showSuccessToast('Success', 'Login success ');
        // this.router.navigate(['/dashboard']);
        this.dynamicTenantId = data.tenantId ? data.tenantId : environment.tenantId;
        localStorage.setItem('tenantId', this.dynamicTenantId);
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('exp', data.expires_in);
        console.log(localStorage.getItem('tenantId'))
        console.log(localStorage.getItem('token'))
        console.log(localStorage.getItem('exp'))
        
      }, err => {
        // this.toastService.showErrorToast('Error', 'Error while login');
        this.loader.show = false;
      });

  
  }



}
