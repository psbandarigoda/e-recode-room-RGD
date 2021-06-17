import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './view/login/login.component';
import {MainComponent} from './view/main/main.component';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {UserDashboardComponent} from './view/user-dashboard/user-dashboard.component';
import {ADRecodeComponent} from './view/adrecode/adrecode.component';
import {ADRCheckRecodeComponent} from './view/adrcheck-recode/adrcheck-recode.component';
import {PrintRecodeComponent} from './view/print-recode/print-recode.component';
import {UserManagementComponent} from './view/user-management/user-management.component';
import {MainADComponent} from './view/main-ad/main-ad.component';
import {MainADRComponent} from './view/main-adr/main-adr.component';
import {MainPrintComponent} from './view/main-print/main-print.component';


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
        component: ADRecodeComponent
      }
    ]
  },
  {
    path: 'main-adr',
    component: MainADRComponent,
    children: [
      {
        path: 'adr-check-recode',
        component: ADRCheckRecodeComponent
      }
    ]
  },
  {
    path: 'main-print',
    component: MainPrintComponent,
    children: [
      {
        path: 'print-recode',
        component: PrintRecodeComponent
      }
    ]
  },
  {
    path: 'userDashboard',
    component: UserDashboardComponent,
  },

  {path: '', pathMatch: 'full', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
