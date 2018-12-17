import { Component, OnInit } from '@angular/core';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _notifyService: NotifyService) {
  }

  ngOnInit() {
  }

}
