import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Recode} from "../model/Recode";

const URL = '/recode';

@Injectable({
  providedIn: 'root'
})
export class RecodeManagementService {
  constructor(private http: HttpClient) {
  }

  getRecode() {
    return this.http.get<Recode>(environment.backend_url + URL + '/get/recode');
  }

  addRecode(recode: Recode) {
    return this.http.post<Recode>(environment.backend_url + URL + '/add/recode', recode);
  }
}
