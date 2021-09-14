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
    child_birthday: new FormControl('', Validators.required),
    child_birth_place: new FormControl(' ', Validators.required),
    child_name_s: new FormControl('', Validators.required),
    child_name_e: new FormControl('', Validators.required),
    child_gender: new FormControl('', Validators.required),
    child_birth_weight: new FormControl('', Validators.required),
    child_count: new FormControl('', Validators.required),

    father_id: new FormControl('', Validators.required),

    ip_email: new FormControl('', [Validators.required, Validators.email]),
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
