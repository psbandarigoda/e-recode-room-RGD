import { Component, OnInit } from '@angular/core';
import {Search} from "../../model/Search";
import {Record} from "../../model/Record";
import {RecordLog} from "../../model/RecordLog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RecodeLogService} from "../../service/RecodeLogService";
import {RecodeManagementService} from "../../service/RecodeManagementService";
import {SMSService} from "../../service/SMSService";

@Component({
  selector: 'app-print-recode',
  templateUrl: './print-recode.component.html',
  styleUrls: ['./print-recode.component.css']
})
export class PrintRecodeComponent implements OnInit {

  search: Search = new Search();
  record: Record = new Record();
  recordLog: RecordLog = new RecordLog();
  date: Date = new Date();

  searchForm = new FormGroup({
    search_val: new FormControl('', Validators.required),
  });

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router,
              private smsService: SMSService,
              private recodeLogService: RecodeLogService,
              private recodeManagementService: RecodeManagementService) { }

  ngOnInit(): void {
  }

  searchRecord(){
    console.log(this.search.certificate_id)
    this.recodeManagementService.getRecode(this.search.certificate_id).subscribe((result) => {
      if (result != null) {
        alert('Record Found');
        this.record = result;
        console.log('certificate_id details available'+result);
      }
    });
  }

  printRecord(){
    this.record.print = sessionStorage.getItem('loggedUser_nic');
    this.record.print_status = 'done';
    console.log('method');
    this.recodeManagementService.printRecode(this.search.certificate_id, this.record).subscribe((result) => {
      if (result != null) {
        alert('Successfully Printed Record');
        this.addRecordLog();
        this.record = new Record();
        this.searchForm.reset();
      }
    });
  }

  addRecordLog() {
    // Update Log Info
    this.recordLog.datetime = this.date;

    // Certificate Info
    this.recordLog.certificate_id = this.record.certificate_id;

    // Process Info
    this.recordLog.ad = this.record.ad;
    this.recordLog.ad_status = this.record.ad_status;
    this.recordLog.adr = this.record.adr;
    this.recordLog.adr_status = this.record.adr_status;
    this.recordLog.client = this.record.client;
    this.recordLog.client_status = this.record.client_status;
    this.recordLog.print = this.record.print;
    this.recordLog.print_status = this.record.print_status;

    // Child's Info
    this.recordLog.child_birthday = this.record.child_birthday;
    this.recordLog.child_birth_place = this.record.child_birth_place;
    this.recordLog.child_name_s = this.record.child_name_s;
    this.recordLog.child_name_e = this.record.child_name_e;
    this.recordLog.child_gender = this.record.child_gender;
    this.recordLog.child_birth_weight = this.record.child_birth_weight;
    this.recordLog.child_count = this.record.child_count;

    // Father's Info
    this.recordLog.father_id = this.record.father_id;
    this.recordLog.father_name_s = this.record.father_name_s;
    this.recordLog.father_name_e = this.record.father_name_e;
    this.recordLog.father_birthday = this.record.father_birthday;
    this.recordLog.father_ethnic_group = this.record.father_ethnic_group;
    this.recordLog.father_birth_place = this.record.father_birth_place;

    // Mother's Info
    this.recordLog.mother_id = this.record.mother_id;
    this.recordLog.mother_name_s = this.record.mother_name_s;
    this.recordLog.mother_name_e = this.record.mother_name_e;
    this.recordLog.mother_birthday = this.record.mother_birthday;
    this.recordLog.mother_age_at_birth_of_a_child = this.record.mother_age_at_birth_of_a_child;
    this.recordLog.mother_ethnic_group = this.record.mother_ethnic_group;
    this.recordLog.mother_birth_place = this.record.mother_birth_place;

    // PR Info
    this.recordLog.permanent_address = this.record.permanent_address;

    // Parents Marriage Info
    this.recordLog.married_place = this.record.married_place;
    this.recordLog.married_date = this.record.married_date;

    // Grandfather's Info
    this.recordLog.gf_id = this.record.gf_id;
    this.recordLog.gf_name = this.record.gf_name;
    this.recordLog.gf_birth_year = this.record.gf_birth_year;
    this.recordLog.gf_birth_place = this.record.gf_birth_place;

    // Information Provider
    this.recordLog.ip_id = this.record.ip_id;
    this.recordLog.ip_name = this.record.ip_name;
    this.recordLog.ip_address = this.record.ip_address;
    this.recordLog.ip_phone = this.record.ip_phone;
    this.recordLog.ip_email = this.record.ip_email;
    this.recordLog.ip_date = this.record.ip_date;

    // Registrar's Info
    this.recordLog.reg_id = this.record.reg_id;
    this.recordLog.reg_name = this.record.reg_name;
    this.recordLog.reg_address = this.record.reg_address;

    let password = this.record.ip_id.substr(0,3)+'@'+this.record.ip_name.substr(0,3);
    let message = "Your+Certificate+"+this.record.certificate_id+"+\n+Process+COMPLETING...+\n+You+check+it+out+and+CONFIRM\n+Monitoring+System+Login+\n+Username:-+"+this.record.ip_id+"+\n+Password:-+"+password+" ";
    this.smsSend(this.record.ip_id,message);

    this.recodeLogService.addRecordLog(this.recordLog).subscribe((result) => {
      if (result != null) {
        alert('Data Logged');
      }
    });
  }

  smsSend(phone_number,message){
    this.smsService.sendSMS(phone_number,message.toString()).subscribe((sms) => {
      if (sms == '0'){
        console.log('SMS send success', sms);
      } else {
        console.log('SMS send error', sms);
      }
    });
  }

}
