import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {UserServiceService} from './user-service.service';
import {Nurse} from '../model/nurse';
import {Patient} from '../model/patient';

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

    this.getAllNurses();
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

  public addNurse(n: Nurse) {
    if (this.getNurse(n.email) === null) {
      this.listNurses.push(n);
    }
  }

  public getAllNurses(): Array<Nurse> {
    this.http.get(this.urlNurse + '/all').subscribe((data: Nurse[]) => {
        for (const c of data) {
          this.nurse = new Nurse(c.email, c.password, c.name, c.surname, c.phone, c.workHoursTo, c.workHoursFrom);
          this.addNurse(this.nurse);
        }
      },
      error => {
        console.log(error);
      }
    );

    return this.listNurses;
  }

}
