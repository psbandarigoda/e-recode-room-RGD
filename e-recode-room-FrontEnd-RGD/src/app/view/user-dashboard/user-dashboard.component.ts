import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {RecodeLogService} from "../../service/RecodeLogService";
import {RecodeManagementService} from "../../service/RecodeManagementService";
import {RecordLog} from "../../model/RecordLog";
import {Record} from "../../model/Record";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  user: string;
  user_id: string;
  user_confirm = false;
  certificate_id: string;
  level: number;
  record: Array<Record> = new Array<Record>();
  URL_RETURN_VIEW_RECORD: string;
  VIEW_BUTTON = false;

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router,
              private recodeLogService: RecodeLogService,
              private recodeManagementService: RecodeManagementService) { }

  ngOnInit(): void {
    this.user = sessionStorage.getItem('loggedUser');
    this.URL_RETURN_VIEW_RECORD = this.route.snapshot.queryParams.URL_RETURN_VIEW_RECORD || 'user-view-record';
    this.viewRecord();
    this.record.forEach(res => {
      if (res.print_status == 'done') {
        this.VIEW_BUTTON = true;
      }
    })
  }

  logout(){
    localStorage.clear();
  }

  viewRecord(){
    let user = sessionStorage.getItem('loggedUser_nic');
    this.user_id = sessionStorage.getItem('loggedUser_nic');
    console.log('founded records by user '+user);

    this.recodeManagementService.getRecodeByUser(user).subscribe((result) => {
      if (result != null) {
        this.record = result;
        this.record.forEach(res => {
          if (res.client_status == 'confirm') {
            this.level = 100;
            this.user_confirm = true;
          } else if (res.print_status == 'done') {
            this.level = 100;
            this.user_confirm = false;
          } else if (res.print_status == 'processing') {
            this.level = 75;
            this.user_confirm = false;
          } else if (res.print_status == 'pending') {
            this.level = 50;
            this.user_confirm = false;
          } else if (res.adr_status == 'processing') {
            this.level = 25;
            this.user_confirm = false;
          } else if (res.ad_status != 'done') {
            this.level = 0;
            this.user_confirm = false;
          }
        })
        console.log('founded records by user '+result);
      }
    });
  }

  viewRequest(certificate_id){
    this.router.navigate([this.URL_RETURN_VIEW_RECORD, {certificate_id: certificate_id }]);
  }

}
