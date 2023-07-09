import { Component,EventEmitter,Input,Output } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PublisherService } from '../publisher/publisher.service';


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
    private route:ActivatedRoute,
    private publish:PublisherService
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


  emailValidation(){
    if(this.isValid!='wrong' && this.email!=''){
      this.publish.setEmail(this.email)
      let payload = {
        "email": this.email}
      this.service.emailValidation(payload).subscribe((data:any)=>{
        console.log(data)
        this.router.navigate(['/otpvarification'])
      })
    }
  }

}
