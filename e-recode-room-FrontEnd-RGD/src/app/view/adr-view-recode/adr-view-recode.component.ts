import { Component, OnInit } from '@angular/core';
import {Record} from "../../model/Record";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecodeManagementService} from "../../service/RecodeManagementService";
import {Search} from "../../model/Search";
import {RecodeLogService} from "../../service/RecodeLogService";
import {RecordLog} from "../../model/RecordLog";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-adrcheck-recode',
  templateUrl: './adr-view-recode.component.html',
  styleUrls: ['./adr-view-recode.component.css']
})
export class AdrViewRecodeComponent implements OnInit {

  search: Search = new Search();
  record: Array<RecordLog> = new Array<RecordLog>();
  filter_record: Array<RecordLog> = new Array<RecordLog>();
  filter_record_available = true;

  searchForm = new FormGroup({
    search_val: new FormControl('', Validators.required),
    start_date: new FormControl('', Validators.required),
    end_date: new FormControl('', Validators.required),
  });

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router,
              private recodeLogService: RecodeLogService,
              private recodeManagementService: RecodeManagementService) { }

  ngOnInit(): void {
    this.viewRecord();
  }

  viewRecord(){
    let user = sessionStorage.getItem('loggedUser_nic');
    this.recodeLogService.getRecodeListByUser(user).subscribe((result) => {
      if (result != null) {
        this.record = result;
        console.log('founded records by user '+result);
      }
    });
  }

  filterByDateRange(){
    let list=[];
    let start_date = this.search.start_date;
    let end_date = this.search.end_date;
    let res: boolean;
    this.record.forEach(function (value) {
      let db_date = formatDate(value.datetime, 'yyyy-MM-dd', 'en-US');
      if(db_date >= start_date && db_date <= end_date){
        list.push(value);
        res = true;
      } else {
        res = false;
      }
    });
    this.filter_record_available = res;
    this.record = list;
  }

  filterByCertificateId(){
    let list=[];
    let certificate_id = this.search.certificate_id;
    let res: boolean;
    this.record.forEach(function (value) {
      if(certificate_id == value.certificate_id){
        list.push(value);
        res = true;
      } else {
        res = false;
      }
    });
    this.filter_record_available = res;
    this.record = list;
  }

  filterRest(){
    console.log('reloaded...');
    this.viewRecord();
    this.filter_record_available = true;
  }

}
