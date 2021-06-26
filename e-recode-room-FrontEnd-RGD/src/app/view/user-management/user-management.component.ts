import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserManagementService} from '../../service/UserManagementService';
import {Users} from '../../model/Users';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  userForm: FormGroup;
  userRegisterIf = true;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userManagementSVR: UserManagementService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      nic: ['', Validators.required],
      email: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      tel: ['', Validators.required],
      position: ['', Validators.required],
      password: ['', Validators.required],
      conf_password: ['', Validators.required]
    });
    this.userForm.reset();
  }

  register() {
    const user = new Users();
    user.nic = this.userForm.value.nic.toString();
    user.email = this.userForm.value.email.toString();
    user.first_name = this.userForm.value.first_name.toString();
    user.last_name = this.userForm.value.last_name.toString();
    user.tel = this.userForm.value.tel;
    user.position = this.userForm.value.position.toString();
    if (this.userForm.value.password.toString() === this.userForm.value.conf_password.toString()) {
      user.password = this.userForm.value.password.toString();
    } else {
      alert('password is does not match..!');
    }

    if (user != null){
      this.userManagementSVR.register(user).subscribe((result) => {
        if (result == null) {
          this.userRegisterIf = true;
          console.log('user register error', result);
        } else {
          this.userRegisterIf = false;
          this.userForm.reset();
          console.log('user register success', result);
        }
      });
    }

  }

}
