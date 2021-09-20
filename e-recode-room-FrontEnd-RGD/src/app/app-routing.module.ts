import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './view/login/login.component';
import {MainComponent} from './view/main/main.component';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {UserDashboardComponent} from './view/user-dashboard/user-dashboard.component';
import {AdRecodeComponent} from './view/ad-recode/ad-recode.component';
import {AdrCheckRecodeComponent} from './view/adr-check-recode/adr-check-recode.component';
import {PrintRecodeComponent} from './view/print-recode/print-recode.component';
import {UserManagementComponent} from './view/user-management/user-management.component';
import {MainADComponent} from './view/main-ad/main-ad.component';
import {MainADRComponent} from './view/main-adr/main-adr.component';
import {MainPrintComponent} from './view/main-print/main-print.component';
import {AdrEditRecodeComponent} from "./view/adr-edit-recode/adr-edit-recode.component";
import {AdrViewRecodeComponent} from "./view/adr-view-recode/adr-view-recode.component";
import {AdViewRecodeComponent} from "./view/ad-view-recode/ad-view-recode.component";
import {PrintViewRecodeComponent} from "./view/print-view-recode/print-view-recode.component";
import {UserViewRecordComponent} from "./view/user-view-record/user-view-record.component";


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'user-management',
        component: UserManagementComponent
      }
    ]
  },
  {
    path: 'main-ad',
    component: MainADComponent,
    children: [
      {
        path: 'ad-recode',
        component: AdRecodeComponent
      },
      {
        path: 'ad-view-recode',
        component: AdViewRecodeComponent
      }
    ]
  },
  {
    path: 'main-adr',
    component: MainADRComponent,
    children: [
      {
        path: 'adr-check-recode',
        component: AdrCheckRecodeComponent
      },
      {
        path: 'adr-edit-recode',
        component: AdrEditRecodeComponent
      },
      {
        path: 'adr-view-recode',
        component: AdrViewRecodeComponent
      },
    ]
  },
  {
    path: 'main-print',
    component: MainPrintComponent,
    children: [
      {
        path: 'print-recode',
        component: PrintRecodeComponent
      },
      {
        path: 'print-view-recode',
        component: PrintViewRecodeComponent
      }
    ]
  },
  {
    path: 'userDashboard',
    component: UserDashboardComponent,
  },
  {
    path: 'user-view-record',
    component: UserViewRecordComponent,
  },

  {path: '', pathMatch: 'full', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
