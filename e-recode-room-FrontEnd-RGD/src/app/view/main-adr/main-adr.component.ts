import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-adr',
  templateUrl: './main-adr.component.html',
  styleUrls: ['./main-adr.component.css']
})
export class MainADRComponent implements OnInit {

  headerText: string;
  state: string;
  job: string;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      this.setHeaderTextAndButtons();
    });
  }

  ngOnInit(): void {
  }

  setHeaderTextAndButtons() {

    if (this.router.url === '/main/dashboard') {
      this.headerText = 'Dashboard';
      this.state = 'Dashboard';
    } else if (this.router.url === '/main-adr/adr-check-recode') {
      this.headerText = 'Check';
      this.state = 'Check';
      this.job = 'Check Recode';
    } else if (this.router.url === '/main-adr/view-adr') {
      this.headerText = 'View';
      this.state = 'View';
      this.job = 'View Checked Recode';
    }
  }

  changeRoute(button) {
    console.log(button);
    if (button === 'Dashboard') {
      this.router.navigate(['/main-adr/dashboard']);
    } else if (button === 'Check-Recode') {
      this.router.navigate(['/main-adr/adr-check-recode']);
    } else if (button === 'View') {
      this.router.navigate(['/main-adr/view-adr']);
    }
  }

}
