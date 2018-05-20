import { Injectable } from '@angular/core';
import { tap, delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }
  
  /*dummy service*/
  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => localStorage.setItem('isLoggedIn', 'true') )
    );
    
  }

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
  }
  isLoggedIn(){
    if (localStorage.getItem('isLoggedIn') === 'true') {
      return true;
    } else {
      return false;
    }   
  }
}