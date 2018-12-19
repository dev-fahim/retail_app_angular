import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';

import { HomeComponent } from './components/home/home.component';
import { DashboardRouterModule } from './dashboard-routing.module';
import { MainComponent } from './components/main/main.component';
import { StoreDetailsComponent } from './components/store/store-details/store-details.component';
import { StoreAddComponent } from './components/store/store-add/store-add.component';
import { StoreEditComponent } from './components/store/store-edit/store-edit.component';
import { StoreAllComponent } from './components/store/store-all/store-all.component';
import { SalesComponent } from './components/sales/sales.component';
import { DailyAddComponent } from './components/sales/daily-add/daily-add.component';
import { ProductSearchComponent } from './components/sales/product-search/product-search.component';
import { DailySalesSummaryComponent } from './components/sales/daily-sales-summary/daily-sales-summary.component';
import { DailySalesBasketComponent } from './components/sales/daily-sales-basket/daily-sales-basket.component';
import { DailySalesProductDetailsComponent } from './components/sales/daily-sales-product-details/daily-sales-product-details.component';
import { DailySalesNavMenuComponent } from './components/sales/daily-sales-nav-menu/daily-sales-nav-menu.component';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        DashboardRouterModule,
        MatSidenavModule,
        MatIconModule,
        MatTooltipModule,
        MatMenuModule,
        MatListModule,
        MatDividerModule
    ],
    declarations: [
        HomeComponent,
        MainComponent,
        StoreDetailsComponent,
        StoreAddComponent,
        StoreEditComponent,
        StoreAllComponent,
        SalesComponent,
        DailyAddComponent,
        ProductSearchComponent,
        DailySalesSummaryComponent,
        DailySalesBasketComponent,
        DailySalesProductDetailsComponent,
        DailySalesNavMenuComponent,
    ]
})
export class DashboardModule {}
