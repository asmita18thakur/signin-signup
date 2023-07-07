import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent {
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







}
