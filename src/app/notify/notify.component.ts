import { Component } from '@angular/core';
import { NotifyService, NotifyModel } from '../services/notify.service';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  animations: [
    trigger('notifyAnimation', [
      transition(':enter', [
        style({ opacity: 1, transform: 'translateX(100%)' }),
        animate('300ms ease-out')
      ]),
      transition(':leave', [
        style({ opacity: 0.8 }),
        animate('300ms ease-out', style({ opacity: 0.8, transform: 'translateX(100%)' }))
      ])
    ])
  ],
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent {

  data: NotifyModel = {
    type: '',
    title: '',
    details: '',
    now: false
  };

  constructor(public notify: NotifyService) {
    this.notify.notifyData.subscribe(
      (notifyData) => {
        this.data.type = notifyData.type;
        this.data.details = notifyData.details;
        this.data.now = notifyData.now;
        this.data.title = notifyData.title;
      }
    );
  }

  close() {
    this.data.now = false;
  }
}
