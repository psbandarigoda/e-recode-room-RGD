import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  headerText: string;
  state: string;
  job: string;

  constructor(private router: Router) {

    router.events.subscribe((val) => {
      this.setHeaderTextAndButtons();
    });

  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  setHeaderTextAndButtons() {

    if (this.router.url === '/main/dashboard') {
      this.headerText = 'Dashboard';
      this.state = 'Dashboard';
    } else if (this.router.url === '/main/ad-recode') {
      this.headerText = 'AD';
      this.state = 'AD';
      this.job = 'Add Recode';
    } else if (this.router.url === '/main/adr-check-recode') {
      this.headerText = 'ADR';
      this.state = 'ADR';
      this.job = 'Recode Checking';
    } else if (this.router.url === '/main/print-recode') {
      this.headerText = 'Print';
      this.state = 'Print';
      this.job = 'Process Completing';
    }
  }

  changeRoute(button) {
    console.log(button);
    if (button === 'Dashboard') {
      this.router.navigate(['/main/dashboard']);
    } else if (button === 'AD') {
      this.router.navigate(['/main/ad-recode']);
    } else if (button === 'ADR') {
      this.router.navigate(['/main/adr-check-recode']);
    } else if (button === 'Print') {
      this.router.navigate(['/main/print-recode']);
    }
  }


}

