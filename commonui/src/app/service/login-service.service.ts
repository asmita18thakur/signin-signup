import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environment/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  headersOptions: any;
  IAMHeadersOptions: any;


  constructor(private http: HttpClient) {
    this.headersOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  login(data: any) {
    console.log(data)
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
      })
  };
    const url = `${environment.IAMLogin}`;
    return this.http.post(url, data,httpOptions);
  }

  emailValidation(data:any){
    const url=`${environment.IAMSignUp}`
    return this.http.post(url, data,this.headersOptions);
  }

  otpVarification(data:any){
   const url=`${environment.OTPVarification}`
   return this.http.post(url ,data,this.headersOptions)
  }
  

  setPassword(data:any){
    // const url=`${environment.}`
    // return this.http.post(url ,data,this.headersOptions)
  }

}
