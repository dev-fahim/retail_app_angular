import { MAIN_API_SERVER_URL } from './../shared/utils';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoreModel } from '../shared/models/store.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private _http: HttpClient) { }

  getAllStores(): Observable<StoreModel[]> {
    return this._http.get<StoreModel[]>(MAIN_API_SERVER_URL + '/app/apis/v2/owner/store/');
  }
}
