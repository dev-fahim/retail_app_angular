import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routing: Routes = [
    { path: 'accounts', component: MainComponent, children: [
        { path: 'signin', component: SignInComponent }
    ] },
];

@NgModule({
    imports: [
        RouterModule.forChild(routing)
    ],
    exports: [RouterModule]
})
export class AuthRouterModule {}
