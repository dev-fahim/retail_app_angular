// errors-handler.ts

import { AuthService } from '../services/auth.service';
import { Injector, NgZone } from '@angular/core';
import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotifyService } from '../services/notify.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorsHandler implements ErrorHandler {

  constructor(private injector: Injector, private ngZone: NgZone) { }

  handleError(error) {

    const notify = this.injector.get(NotifyService);
    const auth = this.injector.get(AuthService);
    const router = this.injector.get(Router);

    if (error instanceof HttpErrorResponse) {
      // Server or connection error happened
      if (!navigator.onLine) {
        console.error(error);
      } else {
        if (error.status === 401) {
          console.error(error);
          auth.token = null;
          localStorage.removeItem('token');
          this.ngZone.run(() => router.navigate(['accounts', 'signin']));
          return notify.notifyData.next({
            type: 'dagner',
            title: 'Your are unauthorized.',
            details: 'Please sign in first.',
            now: true
          });
        }
        if (error.status === 400) {
          console.error(error);
          auth.token = null;
          localStorage.removeItem('token');
          this.ngZone.run(() => router.navigate(['accounts', 'signin']));
          return notify.notifyData.next({
            type: 'danger',
            title: 'You are not right!',
            details: 'So please behave yourself.',
            now: true
          });
        }
        if (error.status === 404 || error.status === 0) {
          console.error(error);
          return notify.notifyData.next({
            type: 'warning',
            title: 'Server error',
            details: 'Your request is not accessiable.',
            now: true
          });
        } else {
          console.error(error);
          return notify.notifyData.next({
            type: 'warning',
            title: 'Server error',
            details: 'Your request is not accessiable.',
            now: true
          });
        }
      }
    } else {
      console.error(error);
      // Internal Error
      const token = localStorage.getItem('token');
      if (token === null) {
        return this.ngZone.run(() => router.navigate(['accounts', 'signin']));
      }
      return notify.notifyData.next({
        type: 'danger',
        title: 'An internal error occured',
        details: 'Be patient, our team is working.',
        now: true
      });
    }
    // Log the error anyway
    console.error(error);
    return notify.notifyData.next({
      type: 'danger',
      title: 'Somwthing not right!',
      details: 'Be patient, our team is working on it.',
      now: true
    });
  }
}
