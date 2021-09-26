import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Record} from "../model/Record";
import {RecordLog} from "../model/RecordLog";

const URL = '/log';

@Injectable({
  providedIn: 'root'
})
export class RecodeLogService {
  constructor(private http: HttpClient) {
  }

  getRecordLog(record_id: string) {
    return this.http.get<RecordLog>(environment.backend_url + URL + '/get/log/'+record_id);
  }

  addRecordLog(recodeLog: RecordLog) {
    return this.http.post<RecordLog>(environment.backend_url + URL + '/add/log', recodeLog);
  }

  getRecodeListByUser(user: string) {
    return this.http.get<Array<RecordLog>>(environment.backend_url + URL + '/get/records/'+user);
  }

  getRecodeRejectByUser() {
    return this.http.get<Array<RecordLog>>(environment.backend_url + URL + '/get/reject');
  }

}
