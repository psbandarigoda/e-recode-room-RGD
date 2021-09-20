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

    if (this.router.url === '/main-print/print-recode') {
      this.headerText = 'Print';
      this.state = 'Print';
      this.job = 'Print Certificate';
    } else if (this.router.url === '/main-print/print-view-recode') {
      this.headerText = 'Print';
      this.state = 'Print';
      this.job = 'View Printed Record';
    }
  }

  changeRoute(button) {
    console.log(button);
    if (button === 'Print') {
      this.router.navigate(['/main-print/print-recode']);
    } else if (button === 'View') {
      this.router.navigate(['/main-print/print-view-recode']);
    }
  }

  logout(){
    localStorage.clear();
  }

}
