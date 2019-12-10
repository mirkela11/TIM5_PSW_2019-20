import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {UserServiceService} from './user-service.service';
import {Nurse} from '../model/nurse';

@Injectable({
  providedIn: 'root'
})
export class NurseServiceService {

  urlNurse = environment.baseUrl + environment.nurse;
  listNurses: Array<Nurse> = new Array<Nurse>();

  nurse: Nurse;

  constructor(
    private http: HttpClient,
    private userService: UserServiceService) {

    this.nurse = new Nurse('nurse@email.com', 'Nurse123', 'Nurse', 'Nursic', '153426010', '8:00', '16:00');
    this.listNurses.push(this.nurse);
  }

  public loginNurse(nurse) {
    this.userService.setToken(nurse);
    return this.http.post(environment.baseUrl + '/login', nurse, {responseType: 'text'});
  }

  public editNurse(nurse) {
    return this.http.post(this.urlNurse + '/edit', nurse, {responseType: 'text'});
  }

  public getNurse(email: string) {
    if ( this.listNurses.length === 0) {
      return null;
    }
    for (const u of this.listNurses) {
      if ( u.email === email) {
        return u;
      }
    }

    return null;
  }

  public setNurse(p: Nurse) {

    for (const p1 of this.listNurses) {
      if (p1.email === p.email) {
        p1.name = p.name;
        p1.phone = p.phone;
        p1.surname = p.surname;
        p1.workHoursTo = p.workHoursTo;
        p1.workHoursFrom = p.workHoursFrom;
        p1.password = p.password;
        return;
      }
    }
  }

}
