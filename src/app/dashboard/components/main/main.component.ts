import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { transition, animate, style, query, group, trigger } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('1 => 2', [
        style({ height: '!', opacity: 1 }),
        query(':enter', [style({ transform: 'translateX(100%)' })]),
        query(':enter, :leave', style({ position: 'absolute', top: '0px', right: '0px', left: '0px', bottom: 0 })),
        group([
          query(':leave', [animate('0.3s ease-out', style({ transform: 'translateX(-100%)', opacity: 1 }))]),
          query(':enter', [animate('0.5s ease-out', style({ transform: 'translateX(0%)', opacity: 1 }))])
        ])
      ]),
      transition('2 => 1', [
        style({ height: '!', opacity: 1 }),
        query(':enter', [style({ transform: 'translateX(-100%)' })]),
        query(':enter, :leave', style({ position: 'absolute', top: '0px', right: '0px', left: '0px', bottom: 0 })),
        group([
          query(':leave', [animate('0.3s ease-in', style({ transform: 'translateX(100%)', opacity: 1 }))]),
          query(':enter', [animate('0.5s ease-in', style({ transform: 'translateX(0%)', opacity: 1 }))])
        ])
      ])
    ])
  ]
})
export class MainComponent implements OnInit {

  links = [
    { lable: 'Home', path: '', icon: 'home' },
    { lable: 'Stores', path: 'store', icon: 'store' },
    { lable: 'Daily Sales', path: 'store/sales/daily_sales_add', icon: 'shopping_cart' }
  ];

  showFiller = false;
  constructor(public authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.signOutUser();
    return this._router.navigate(['accounts', 'signin']);
  }
  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }
}
