import { Component } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PublisherService } from '../publisher/publisher.service';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-otp-varification',
  templateUrl: './otp-varification.component.html',
  styleUrls: ['./otp-varification.component.scss']
})
export class OtpVarificationComponent {
 
    loader: any;
    digits:any;
    email:string='';
    digitError:string=''
    otpError:string=''

    constructor(
      private service: LoginServiceService,
      private router: Router,
      private route:ActivatedRoute,
      private getEmail:PublisherService
      
    ) {
      // this.form = new FormControl('', [Validators.required, Validators.email]);
      this.loader = { show: false };
      this.digits = {
        digit1: '',
        digit2: '',
        digit3: '',
        digit4: '',
        digit5: '',
        digit6: '',
      };
    }
  

    ngOnInit() {
      // this.getEmail.getEmailObservable().subscribe((email: string) => {
      //   this.email = email;
      // });
      // console.log(this.getEmail.getEmailObservable());
      this.email=localStorage.getItem('email')||''
    }



    otpVerification(){
      const combinedNumber: number = parseInt(
        Object.values(this.digits).map((value: any) => {
          if (value === '') {
            this.digitError='One or more digit values are empty. Please fill in all the digits.'
            return
          }
          return value;
        }).join(''),
        10
      );
      if(this.digitError===''){
        let payload={
          "email": this.email,
          "otp": combinedNumber}
        this.service.otpVarification(payload).subscribe((response:any) => {
          // Handle the successful response
          this.otpError=''
          localStorage.setItem('tenantId',response?.tenantId)
          this.router.navigate(['/setpassword'])
        },
        (error:any)=>{
          this.otpError=error
        }
        );
      }
        
        console.log(this.email,this.digitError,this.otpError)
        this.digitError=''
      }
     
    

    
   
  
      performOtpVerification() {
        // Call the service method for OTP verification using the combinedNumber and email values
        console.log(this.email);
      }
  
  
  
  
  
  
  
  
  }
