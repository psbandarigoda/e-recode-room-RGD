import {Component, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserManagementService} from '../../service/UserManagementService';
import {Users} from '../../model/Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  URL_RETURN_ADMIN: string;
  URL_RETURN_AD: string;
  URL_RETURN_ADR: string;
  URL_RETURN_PRINT: string;
  URL_RETURN_USER: string;
  loginValueIf = true;
  loginForm: FormGroup;
  user: Users = new Users();
  uName: string;
  uPwd: string;
  quote1 = 'an act of the law';
  quote2 = 'does_no_one_wrong';

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router,
              private userManagementSVR: UserManagementService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loginForm.reset();

    setTimeout(() => { this.quote1 = '"If there were no bad people,'; this.quote2 = 'there_would_be_no_good_lawyers."'; }, 4000);
    setTimeout(() => { this.quote1 = '"an act of the law'; this.quote2 = 'does_no_one_wrong."'; }, 8000);

    this.URL_RETURN_ADMIN = this.route.snapshot.queryParams.URL_RETURN_USER || 'main/dashboard';
    this.URL_RETURN_AD = this.route.snapshot.queryParams.URL_RETURN_AD || 'main-ad/ad-recode';
    this.URL_RETURN_ADR = this.route.snapshot.queryParams.URL_RETURN_ADR || 'main-adr/adr-check-recode';
    this.URL_RETURN_PRINT = this.route.snapshot.queryParams.URL_RETURN_PRINT || 'main-print/print-recode';
    this.URL_RETURN_USER = this.route.snapshot.queryParams.URL_RETURN_USER || 'userDashboard';
  }

  login() {
    const USER = this.loginForm.value.username.toString();
    const PASSWORD = this.loginForm.value.password.toString();
    this.userManagementSVR.login(USER, PASSWORD).subscribe((result) => {
      if (result == null) {
        this.loginValueIf = true;
      } else {
        this.loginValueIf = false;
        this.user = result;
        sessionStorage.setItem('loggedUser', this.user.first_name);
        sessionStorage.setItem('loggedUser_nic', this.user.nic);
        console.log(this.user);
        if (this.user.position === 'ADMIN') {
          this.router.navigate([this.URL_RETURN_ADMIN]);
        } else if (this.user.position === 'DA') {
          this.router.navigate([this.URL_RETURN_AD]);
        } else if (this.user.position === 'ADR') {
          this.router.navigate([this.URL_RETURN_ADR]);
        } else if (this.user.position === 'PRINT') {
          this.router.navigate([this.URL_RETURN_PRINT]);
        }  else if (this.user.position === 'USER') {
          this.router.navigate([this.URL_RETURN_USER]);
        } else {
          console.log('Error User');
          alert('Not Authorised Person');
        }
      }
    });
  }

}
