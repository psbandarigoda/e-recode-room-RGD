import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-print',
  templateUrl: './main-print.component.html',
  styleUrls: ['./main-print.component.css']
})
export class MainPrintComponent implements OnInit {

  headerText: string;
  state: string;
  job: string;
  username: string;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      this.setHeaderTextAndButtons();
    });
  }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('loggedUser');
  }

  setHeaderTextAndButtons() {

    if (this.router.url === '/main-print/dashboard') {
      this.headerText = 'Dashboard';
      this.state = 'Dashboard';
    } else if (this.router.url === '/main-print/print-recode') {
      this.headerText = 'Users';
      this.state = 'Users';
      this.job = 'User Management';
    } else if (this.router.url === '/main-print/view-print') {
      this.headerText = 'Print';
      this.state = 'Print';
      this.job = 'Process Completing';
    }
  }

  changeRoute(button) {
    console.log(button);
    if (button === 'Dashboard') {
      this.router.navigate(['/main-print/dashboard']);
    } else if (button === 'Users') {
      this.router.navigate(['/main-print/print-recode']);
    } else if (button === 'Print') {
      this.router.navigate(['/main-print/view-print']);
    }
  }

  logout(){
    localStorage.clear();
  }

}
