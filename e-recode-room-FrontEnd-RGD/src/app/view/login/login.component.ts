import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrlRRoom: string;
  returnUrlDashboard: string;
  uName: string;
  uPwd: string;
  quote1: string = 'an act of the law';
  quote2: string = 'does_no_one_wrong';

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loginForm.reset();

    setTimeout(() => { this.quote1 = '"If there were no bad people,'; this.quote2 = 'there_would_be_no_good_lawyers."'; }, 4000);
    setTimeout(() => { this.quote1 = '"an act of the law'; this.quote2 = 'does_no_one_wrong."'; }, 8000);

    this.returnUrlRRoom = this.route.snapshot.queryParams.returnUrlRRoom || 'main/dashboard';
    this.returnUrlDashboard = this.route.snapshot.queryParams.returnUrlDashboard || 'userDashboard';
  }

  login() {
    if (this.loginForm.value.username.toString() === 'thilini@gmail.com') {
      this.router.navigate([this.returnUrlRRoom]);
    } else if (this.loginForm.value.username.toString() === 'user@gmail.com') {
      this.router.navigate([this.returnUrlDashboard]);
    } else {
      console.log('Error User');
      alert('Not Authorised Person');
    }
  }

}
