import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Recode} from "../../model/Recode";
import {ActivatedRoute, Router} from "@angular/router";
import {UserManagementService} from "../../service/UserManagementService";
import {RecodeManagementService} from "../../service/RecodeManagementService";

@Component({
  selector: 'app-adrecode',
  templateUrl: './adrecode.component.html',
  styleUrls: ['./adrecode.component.css']
})
export class ADRecodeComponent implements OnInit {

  recode: Recode = new Recode();

  recodeForm = new FormGroup({
    nic: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl(' ', Validators.required),
    lastName: new FormControl('', Validators.required),
    // position: new FormControl('', Validators.required),
    // address: new FormControl('', Validators.required),
    // tel: new FormControl('', Validators.required),
    // postal: new FormControl('', Validators.required),
    // city: new FormControl('', Validators.required),
  });

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router,
              private recodeManagementService: RecodeManagementService) { }

  ngOnInit(): void {
  }

  addRecode() {
    this.recodeManagementService.addRecode(this.recode).subscribe((result) => {
      if (result != null) {
        alert('Recode Added Successfully');
        this.recode = new Recode();
        this.recodeForm.reset();
      }
    });
  }

}
