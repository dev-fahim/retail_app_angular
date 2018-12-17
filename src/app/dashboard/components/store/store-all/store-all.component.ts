import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { StoreModel } from 'src/app/shared/models/store.model';

export interface StoreDataSource {
  store_name: string;
  store_address: string;
  store_lcs_type: string;
  store_type: string;
  total_products: number;
}

@Component({
  selector: 'app-store-all',
  templateUrl: './store-all.component.html',
  styleUrls: ['./store-all.component.scss']
})
export class StoreAllComponent implements OnInit {

  showTable = false;

  table_headings = [
    'No.',
    'Store Name',
    'Store Address',
    'Store License Type',
    'Store Type',
    'Total products'
  ];

  table_data: StoreDataSource[] = [];

  constructor(private _storeService: StoreService) { }

  ngOnInit() {
    this._storeService.getAllStores()
      .subscribe(
        (store: StoreModel[]) => {
          for (const data of store) {
            let store_type: string;
            if (data['owner_store_type'] === 'gn_store') {
              store_type = 'General Store';
            }
            if (data['owner_store_type'] === 'ph_store') {
              store_type = 'Pharmacy';
            }
            if (data['owner_store_type'] === 'ch_store') {
              store_type = 'Chain Shop';
            }
            if (data['owner_store_type'] === 'sp_store') {
              store_type = 'Sports Store';
            }
            this.table_data.push({
              store_name: data['owner_store_name'],
              store_address: data['owner_store_address'],
              store_lcs_type: data['owner_store_lcs_type'],
              store_type: store_type,
              total_products: data['products'].length
            });
            if (this.table_data.length !== 0) {
              this.showTable = true;
            }
          }
        }
      );
  }

}
