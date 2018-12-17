import { AuthInterceptor } from './handlers/server-errors.interceptor';
import { ErrorsHandler } from './handlers/errors-handler';
import { MatIconModule } from '@angular/material/icon';
import { AuthGuard } from './services/auth-gaurd.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.service';
import { NotifyComponent } from './notify/notify.component';
import { StoreService } from './services/store.service';

@NgModule({
  declarations: [
    AppComponent,
    NotifyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    DashboardModule,
    MatIconModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFToken'
    }),
    LoadingBarHttpClientModule,
    LoadingBarRouterModule
  ],
  exports: [],
  providers: [ AuthService, AuthGuard, StoreService, {
    provide: ErrorHandler,
    useClass: ErrorsHandler
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
