import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Record} from "../model/Record";
import {RecordLog} from "../model/RecordLog";

const URL = '/sms';

@Injectable({
  providedIn: 'root'
})
export class SMSService {
  constructor(private http: HttpClient) {
  }

  sendSMS(phone:string, message:string) {
    return this.http.get<string>(environment.backend_url + URL + '/send/sms/'+phone+'/'+message);
  }

}
