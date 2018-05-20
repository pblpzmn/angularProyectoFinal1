import { AuthenticateService } from './../authenticate.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  hide = true;
  wrongLogin = false;
  constructor(private router:  Router, private authenticationService: AuthenticateService) { 
    console.log('authenticate');
    
    if (this.router.url === '/authentication/logout'){
      // logout button
      console.log('authenticate logout');
      this.authenticationService.logout();
    }
    if (this.authenticationService.isLoggedIn()) {
      //If the user has already logged in and they go to the login page, the session should be invalidated
      console.log('authenticate invalidate session');
      this.authenticationService.logout();
    }
  }

  ngOnInit() {
  }
  authenticate(user, password) {
    console.log("click");
    if (user=='admin' && password=='admin') {
        this.authenticationService.login().subscribe(
        data => {
          this.redirect();
      },  
      );
      this.wrongLogin = false;
    } else {
      this.wrongLogin = true;
    }
  }
  redirect() {
      this.router.navigateByUrl('/home');
  }

}
