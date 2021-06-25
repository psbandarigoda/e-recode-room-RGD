import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  headerText: string;
  state: string;
  job: string;
  username: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    router.events.subscribe((val) => {
      this.setHeaderTextAndButtons();
    });

  }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('loggedUser');
  }


  setHeaderTextAndButtons() {

    if (this.router.url === '/main/dashboard') {
      this.headerText = 'Dashboard';
      this.state = 'Dashboard';
    } else if (this.router.url === '/main/user-management') {
      this.headerText = 'Users';
      this.state = 'Users';
      this.job = 'User Management';
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
    } else if (button === 'Users') {
      this.router.navigate(['/main/user-management']);
    } else if (button === 'Print') {
      this.router.navigate(['/main/print-recode']);
    }
  }

  logout(){
      localStorage.clear();
  }

}

