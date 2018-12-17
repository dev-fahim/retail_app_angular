// server-errors.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        const idToken = localStorage.getItem('token');

        if (idToken) {
            const header = new HttpHeaders({'Authorization': 'JWT ' + idToken, 'Content-Type': 'application/json'});
            const cloned = req.clone({
                headers: header
            });
            return next.handle(cloned);
        } else {
            return next.handle(req);
        }
    }
}
