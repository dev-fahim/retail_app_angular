import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.signOutUser();
    return this._router.navigate(['accounts', 'signin']);
  }
}
