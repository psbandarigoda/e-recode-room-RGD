import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-main-adr',
  templateUrl: './main-adr.component.html',
  styleUrls: ['./main-adr.component.css']
})
export class MainADRComponent implements OnInit {

  headerText: string;
  state: string;
  job: string;
  username: string;

  URL_RETURN_ADR_CHECK_RECORD: string;
  URL_RETURN_ADR_EDIT_RECORD: string;
  URL_RETURN_ADR_VIEW_RECORD: string;


  constructor(private router: Router, private route: ActivatedRoute,) {
    router.events.subscribe((val) => {
      this.setHeaderTextAndButtons();
    });
  }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('loggedUser');
    this.URL_RETURN_ADR_CHECK_RECORD = this.route.snapshot.queryParams.URL_RETURN_ADR_CHECK_RECORD || 'main-adr/adr-check-recode';
    this.URL_RETURN_ADR_EDIT_RECORD = this.route.snapshot.queryParams.URL_RETURN_ADR_EDIT_RECORD || 'main-adr/adr-edit-recode';
    this.URL_RETURN_ADR_VIEW_RECORD = this.route.snapshot.queryParams.URL_RETURN_ADR_EDIT_RECORD || 'main-adr/adr-view-recode';
  }

  setHeaderTextAndButtons() {

    if (this.router.url === '/main/dashboard') {
      this.headerText = 'Dashboard';
      this.state = 'Dashboard';
    } else if (this.router.url === '/main-adr/adr-check-recode') {
      this.headerText = 'Check';
      this.state = 'Check';
      this.job = 'Check Record';
    } else if (this.router.url === '/main-adr/adr-edit-recode') {
      this.headerText = 'Edit';
      this.state = 'Edit';
      this.job = 'Edit Record';
    } else if (this.router.url === '/main-adr/adr-view-recode') {
      this.headerText = 'View';
      this.state = 'View';
      this.job = 'View Checked Record';
    }
  }

  changeRoute(button) {
    console.log(button);
    if (button === 'Check-Record') {
      this.router.navigate([this.URL_RETURN_ADR_CHECK_RECORD]);
    } else if (button === 'Edit') {
        this.router.navigate([this.URL_RETURN_ADR_EDIT_RECORD]);
    } else if (button === 'View') {
      this.router.navigate([this.URL_RETURN_ADR_VIEW_RECORD]);
    }
  }

  logout(){
    localStorage.clear();
  }

}
