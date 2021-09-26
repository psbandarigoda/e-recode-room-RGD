import { Component, OnInit } from '@angular/core';
import {Search} from "../../model/Search";
import {RecordLog} from "../../model/RecordLog";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {RecodeLogService} from "../../service/RecodeLogService";
import {RecodeManagementService} from "../../service/RecodeManagementService";

@Component({
  selector: 'app-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  search: Search = new Search();
  record: Array<RecordLog> = new Array<RecordLog>();
  filter_record_available = true;

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router,
              private recodeLogService: RecodeLogService,
              private recodeManagementService: RecodeManagementService) { }

  ngOnInit(): void {
    this.viewRecord();
  }

  viewRecord(){
    // let user = sessionStorage.getItem('loggedUser_nic');
    this.recodeLogService.getRecodeRejectByUser().subscribe((result) => {
      if (result != null) {
        this.record = result;
        console.log('founded records by user '+result);
      }
    });
  }

}
