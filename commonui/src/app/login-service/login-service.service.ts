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
    this.headersOptions = new HttpHeaders();
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
}
