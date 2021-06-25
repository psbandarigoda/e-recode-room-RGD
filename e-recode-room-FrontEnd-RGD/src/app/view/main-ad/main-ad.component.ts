import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-ad',
  templateUrl: './main-ad.component.html',
  styleUrls: ['./main-ad.component.css']
})
export class MainADComponent implements OnInit {

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

    if (this.router.url === '/main-ad/dashboard') {
      this.headerText = 'Dashboard';
      this.state = 'Dashboard';
    } else if (this.router.url === '/main-ad/ad-recode') {
      this.headerText = 'Add';
      this.state = 'Add';
      this.job = 'Add Recode';
    } else if (this.router.url === '/main-ad/view-ad') {
      this.headerText = 'View';
      this.state = 'View';
      this.job = 'View Recode';
    }
  }

  changeRoute(button) {
    console.log(button);
    if (button === 'Dashboard') {
      this.router.navigate(['/main-ad/dashboard']);
    } else if (button === 'Add') {
      this.router.navigate(['/main-ad/ad-recode']);
    } else if (button === 'View') {
      this.router.navigate(['/main-ad/view-ad']);
    }
  }

  logout(){
    localStorage.clear();
  }

}
