import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  username: string;

  constructor() { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('loggedUser');
  }

  logout(){
    localStorage.clear();
  }

}
