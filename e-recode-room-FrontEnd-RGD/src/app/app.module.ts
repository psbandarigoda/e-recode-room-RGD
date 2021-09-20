import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './view/main/main.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { LoginComponent } from './view/login/login.component';
import { UserDashboardComponent } from './view/user-dashboard/user-dashboard.component';
import {AdRecodeComponent} from './view/ad-recode/ad-recode.component';
import { AdrCheckRecodeComponent } from './view/adr-check-recode/adr-check-recode.component';
import { PrintRecodeComponent } from './view/print-recode/print-recode.component';
import { UserManagementComponent } from './view/user-management/user-management.component';
import { MainADComponent } from './view/main-ad/main-ad.component';
import { MainADRComponent } from './view/main-adr/main-adr.component';
import { MainPrintComponent } from './view/main-print/main-print.component';
import {AdrEditRecodeComponent} from "./view/adr-edit-recode/adr-edit-recode.component";
import {AdrViewRecodeComponent} from "./view/adr-view-recode/adr-view-recode.component";
import {AdViewRecodeComponent} from "./view/ad-view-recode/ad-view-recode.component";
import {PrintViewRecodeComponent} from "./view/print-view-recode/print-view-recode.component";
import {UserViewRecordComponent} from "./view/user-view-record/user-view-record.component";



// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    DashboardComponent,
    UserDashboardComponent,
    AdRecodeComponent,
    AdViewRecodeComponent,
    AdrCheckRecodeComponent,
    AdrEditRecodeComponent,
    AdrViewRecodeComponent,
    PrintRecodeComponent,
    PrintViewRecodeComponent,
    UserManagementComponent,
    UserViewRecordComponent,
    MainADComponent,
    MainADRComponent,
    MainPrintComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  providers: [
    HttpClient,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
