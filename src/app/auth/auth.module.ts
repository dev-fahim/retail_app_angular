import { ErrorsHandler } from './../handlers/errors-handler';
import { MatIconModule } from '@angular/material/icon';
import { AuthRouterModule } from './auth-routing.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { MainComponent } from './components/main/main.component';

import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    declarations: [SignInComponent, MainComponent],
    imports: [
        CommonModule,
        AuthRouterModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule
    ]
})
export class AuthModule {}
