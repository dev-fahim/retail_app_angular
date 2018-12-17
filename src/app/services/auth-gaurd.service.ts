import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NotifyService } from './notify.service';

const helper = new JwtHelperService();

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private _authService: AuthService, private _router: Router) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        const token = localStorage.getItem('token');
        if (token === null) {
            this._router.navigate(['accounts', 'signin']);
            return false;
        }
        const decodedToken = helper.decodeToken(token);
        if (this._authService.isLoggedIn() && decodedToken !== null) {
            return true;
        } else {
            this._router.navigate(['accounts', 'signin']);
            return false;
        }
    }
}

@Injectable({
    providedIn: 'root',
})

export class AuthGuardChild implements CanActivateChild {
    constructor(private _authService: AuthService, private _router: Router, private _notify: NotifyService) { }
    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        const token = localStorage.getItem('token');
        if (token === null) {
            this._router.navigate(['accounts', 'signin']);
            return false;
        }
        const decodedToken = helper.decodeToken(token);
        if (this._authService.isLoggedIn() && decodedToken !== null) {
            return true;
        } else {
            localStorage.removeItem('token');
            this._router.navigate(['accounts', 'signin']);
            this._notify.notifyData.next({
                type: 'warning',
                title: 'Please sign in.',
                details: 'Your session is timed out at ' + helper.getTokenExpirationDate(token),
                now: true
              });
            return false;
        }
    }
}
