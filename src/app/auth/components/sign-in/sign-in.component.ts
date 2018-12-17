import { HttpErrorResponse } from '@angular/common/http';
import { UserCredentialsModel } from './../../../shared/models/user.models';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _notify: NotifyService) {
      if (_authService.isLoggedIn()) {
        _router.navigate(['dashboard']);
      }
     }

  ngOnInit() {
    this.signinForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    const userData: UserCredentialsModel = {
      username: this.signinForm.get('username').value,
      email: '',
      password: this.signinForm.get('password').value
    };
    return this._authService.signInUser(userData)
      .subscribe(
        (data) => {
          localStorage.setItem('token', data.token);
          return this._router.navigate(['dashboard']);
        },
        (error: HttpErrorResponse) => {
          if (error.status === 400) {
            return this._notify.notifyData.next({
              type: 'danger',
              title: 'Information is not correct.',
              details: 'Username and password is not correct',
              now: true
            });
          }
          if (error.status === 404) {
            return this._notify.notifyData.next({
              type: 'warning',
              title: 'Server error.',
              details: 'We couldn\'t resolve your request.',
              now: true
            });
          }
        }
      );
  }

}
