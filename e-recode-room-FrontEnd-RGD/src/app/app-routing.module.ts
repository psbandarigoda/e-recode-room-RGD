import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './view/login/login.component';
import {MainComponent} from './view/main/main.component';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {UserDashboardComponent} from './view/user-dashboard/user-dashboard.component';
import {ADRecodeComponent} from './view/adrecode/adrecode.component';
import {ADRCheckRecodeComponent} from './view/adrcheck-recode/adrcheck-recode.component';
import {PrintRecodeComponent} from './view/print-recode/print-recode.component';


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
        path: 'ad-recode',
        component: ADRecodeComponent
      },
      {
        path: 'adr-check-recode',
        component: ADRCheckRecodeComponent
      },
      {
        path: 'print-recode',
        component: PrintRecodeComponent
      },
    //   {
    //     path: 'view-case',
    //     component: ViewCaseComponent
    //   },
    //   {
    //     path: 'appointment',
    //     component: AppointmentComponent
    //   },
    //   {
    //     path: 'View-Case-In-Detail',
    //     component: ViewCaseInDetailComponent
    //   },
    //   {
    //     path: 'templates',
    //     component: TemplatesComponent
    //   },
    //   {
    //     path: 'clientSummary',
    //     component: ClientSummaryComponent
    //   },
    //   {
    //     path: 'caseSummary',
    //     component: CaseSummaryComponent
    //   },
    //   {
    //     path: 'appointmentSummary',
    //     component: AppointmentSummaryComponent
    //   }
    //
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
