import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Users} from '../model/Users';
import {environment} from '../../environments/environment';

const URL = '/users';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  constructor(private http: HttpClient) {
  }

  login(nic: string, password: string) {
    return this.http.get<Users>(environment.backend_url + URL + '/login' + '/' + nic + '/' + password);
  }

  register(user: Users) {
    return this.http.post<Users>(environment.backend_url + URL + '/register', user);
  }
}
