import { AuthGuardChild } from './../services/auth-gaurd.service';
import { StoreAddComponent } from './components/store/store-add/store-add.component';
import { StoreDetailsComponent } from './components/store/store-details/store-details.component';
import { StoreEditComponent } from './components/store/store-edit/store-edit.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreAllComponent } from './components/store/store-all/store-all.component';
import { DailyAddComponent } from './components/sales/daily-add/daily-add.component';
import { SalesComponent } from './components/sales/sales.component';

const routing: Routes = [
    { path: 'dashboard', component: MainComponent, children: [
        { path: '', component: HomeComponent, data: { depth: 1 } },
        { path: 'store', children: [
            { path: '', component: StoreAllComponent },
            { path: 'edit/:id', component: StoreEditComponent },
            { path: 'details/:id', component: StoreDetailsComponent },
            { path: 'add', component: StoreAddComponent },
            { path: 'sales', children: [
                { path: 'daily_sales_add', component: DailyAddComponent }
            ], component: SalesComponent }
        ], data: { depth: 2 } }
    ], canActivateChild: [AuthGuardChild] },
];

@NgModule({
    imports: [
        RouterModule.forChild(routing)
    ],
    exports: [RouterModule]
})
export class DashboardRouterModule {}
