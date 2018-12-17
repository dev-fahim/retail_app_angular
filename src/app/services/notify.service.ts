import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface NotifyModel {
  type: string;
  title: string;
  details: string;
  now: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  notifyData = new Subject<NotifyModel>();
  constructor() { }
}
