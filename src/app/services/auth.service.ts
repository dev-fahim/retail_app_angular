import { UserCredentialsModel, UserLoginResponseModel } from './../shared/models/user.models';
import { MAIN_API_SERVER_URL } from './../shared/utils';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = localStorage.getItem('token');

  constructor(
    private _httpClient: HttpClient,
    private _router: Router) { }

  signInUser(credentials: UserCredentialsModel): Observable<UserLoginResponseModel> {
    return this._httpClient.post<UserLoginResponseModel>(MAIN_API_SERVER_URL + '/api/accounts/login/', credentials);
  }

  getToken() {
    const token = localStorage.getItem('token');
    if (token === null) {
      return null;
    } return token;
  }

  signOutUser() {
    localStorage.removeItem('token');
    return this._router.navigate(['accounts/signin']);
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    if (token === null) {
      return false;
    }
    return !helper.isTokenExpired(token);
  }

  verifyToken() {
    this._httpClient.post<any>(MAIN_API_SERVER_URL + '/api/accounts/login/', localStorage.getItem('token'));
  }
}
