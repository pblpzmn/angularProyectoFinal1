import { AuthenticateService } from './authenticate.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';

@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(private authenticateService: AuthenticateService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authenticateService.isLoggedIn()){
            console.log("redirect true");
            return true;
        } else {
            console.log("redirect false");
            //It shouldn't display any information if the user haven't logged in. In such cases they should be redirected to the login page.
            this.router.navigate(['/authentication']);
            return false;
        }
            
    }
}