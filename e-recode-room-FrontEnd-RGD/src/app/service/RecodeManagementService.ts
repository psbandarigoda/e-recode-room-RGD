import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Record} from "../model/Record";

const URL = '/record';

@Injectable({
  providedIn: 'root'
})
export class RecodeManagementService {
  constructor(private http: HttpClient) {
  }

  getRecode(record: string) {
    return this.http.get<Record>(environment.backend_url + URL + '/get/record/'+record);
  }

  getRecodeByUser(user: string) {
    return this.http.get<Array<Record>>(environment.backend_url + URL + '/get/records/'+user);
  }

  addRecode(recode: Record) {
    return this.http.post<Record>(environment.backend_url + URL + '/add/record', recode);
  }

  updateRecode(recode_id: string, recode: Record){
    return this.http.post<Record>(environment.backend_url + URL + '/update/record/'+recode_id, recode);
  }

  confirmRecode(recode_id: string, recode: Record){
    return this.http.post<Record>(environment.backend_url + URL + '/confirm/record/'+recode_id, recode);
  }

  printRecode(recode_id: string, recode: Record){
    console.log('service');
    return this.http.post<Record>(environment.backend_url + URL + '/print/record/'+recode_id, recode);
  }
}
