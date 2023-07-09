import { Component } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PublisherService } from '../publisher/publisher.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator, PasswordValidator } from '../password-validator/password-validator';
import { AES } from 'crypto-js';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent {
  email: string = '';
  password: string = ''
  confirmPassword:string=''
  show1: boolean = false;
  show2: boolean = false;

  isValid: string = '';
  encryptionKey = 'Gaian-PORTAL';
  rememberMe: boolean = false;
  loader: any;
  dynamicTenantId: any;
  myForm: FormGroup | any;
  green_check_image:any='assets/images/Check_Circle_right.svg'
  red_wrong_image:any='assets/images/Check_Circle_wrong.svg';
  blank_image:any='assets/images/Check_Circle_1.svg'

  passwordRules: { rule: string; errorMessage: string; errorImage: string; successImage: string; blankImage: string }[] = [
    { rule: 'invalidLength', errorMessage: 'Password should have a minimum of 8 characters.', errorImage:this.red_wrong_image, successImage: this.green_check_image, blankImage: this.blank_image },
    { rule: 'noLowercase', errorMessage: 'Password should contain at least one lowercase letter.', errorImage:this.red_wrong_image, successImage:this.green_check_image, blankImage: this.blank_image },
    { rule: 'noUppercase', errorMessage: 'Password should contain at least one uppercase letter.', errorImage:this.red_wrong_image, successImage:this.green_check_image, blankImage: this.blank_image },
    { rule: 'noNumber', errorMessage: 'Password should contain at least one number.', errorImage:this.red_wrong_image, successImage:this.green_check_image, blankImage: this.blank_image },
    { rule: 'noSpecialCharacter', errorMessage: 'Password should contain at least one special character.', errorImage:this.red_wrong_image, successImage:this.green_check_image, blankImage: this.blank_image }
  ];


  
  constructor(
    private service: LoginServiceService,
    // private emailControl: FormControl  
    private router: Router,
    private route:ActivatedRoute,
    private publish:PublisherService
  ) {
    // this.form = new FormControl('', [Validators.required, Validators.email]);
    this.loader = { show: false };
    this.myForm = new FormGroup({
      password: new FormControl('', [Validators.required, PasswordValidator]),
      confirmPassword: new FormControl('', [Validators.required])
    }, { validators: ConfirmPasswordValidator });
    this.myForm.setValidators(this.passwordMatchValidator);
  }
 

  
  showPass1(boolean: boolean) {
    this.show1=boolean
  }

  showPass2(boolean: boolean) {
    this.show2=boolean
  }

  getValidationImage(rule: { rule: string; errorMessage: string; errorImage: string; successImage: string; blankImage: string }): string 
  {
    const passwordControl = this.myForm.get('password');

    if (!passwordControl?.value) {
      return rule.blankImage;
    }

    if (passwordControl?.hasError(rule.rule)) {
      return rule.errorImage;
    }

    return rule.successImage;
  }

  get passwordMatchError(): boolean {
    const passwordControl = this.myForm.get('password');
    const confirmPasswordControl = this.myForm.get('confirmPassword');

    return passwordControl.value !== confirmPasswordControl.value && confirmPasswordControl.dirty;
  }

  passwordMatchValidator(control: FormGroup):any {
    const passwordControl = control.get('password');
    const confirmPasswordControl = control.get('confirmPassword');

    if (passwordControl?.value !== confirmPasswordControl?.value) {
      confirmPasswordControl?.setErrors({ passwordMismatch: true });
    } else {
      confirmPasswordControl?.setErrors(null);
    }
  }
  
  encryptPassword(password: string): string {
    const secretKey = 'Gaian-Solutions'; // Replace with your own secret key
    const encryptedPassword = AES.encrypt(password, secretKey).toString();
    return encryptedPassword;
  }
  
  setPassword() {
    if (this.myForm.invalid || this.passwordMatchError) {
      return;
    }
    

    // const password = this.myForm.get('password').value;
    // const encryptedPassword = this.encryptPassword(password);
    
  }
}
