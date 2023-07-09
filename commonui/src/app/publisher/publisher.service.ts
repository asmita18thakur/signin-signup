import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {
  private emailSubject: Subject<string> = new Subject<string>();
  constructor() {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      this.emailSubject.next(storedEmail);
    }
  }

  setEmail(email: string) {
    localStorage.setItem('email',email);
    console.log(email)
    this.emailSubject.next(email);
  }

  getEmailObservable() {
    return this.emailSubject.asObservable();
  }

}
