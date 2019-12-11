import {Injectable} from '@angular/core';
import {User} from '../model/user';
import {Role} from '../model/role';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

export const TOKEN = 'LoggedInUser';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  list: Array<User> = new Array<User>();
  doctor: User;
  patient: User;
  nurse: User;
  clinicalCentreAdmin: User
  user: User = new User('', '', Role.NONE);
  constructor(private router: Router, private http: HttpClient) {
    this.doctor = new User('doctor@email.com', 'Doctor123', Role.DOCTOR);
    this.patient = new User('patient@email.com', 'Patient123', Role.PATIENT);
    this.nurse = new User('nurse@email.com', 'Nurse123', Role.NURSE);
    this.clinicalCentreAdmin = new User('zejak@email.com', 'Zejake123', Role.CLINICAL_CENTRE_ADMINISTRATOR);
    this.list.push(this.doctor);
    this.list.push(this.patient);
    this.list.push(this.nurse);
    this.list.push(this.clinicalCentreAdmin);
    localStorage.setItem(TOKEN, JSON.stringify(this.user));
  }

  public addUser(u: User) {
    if (this.getUser(u.email) === null) {
      this.list.push(u);
    }
  }

  public getUser(email: string) {
    if ( this.list.length === 0) {
      return null;
    }
    for (const u of this.list) {
      if ( u.email === email) {
        return u;
      }
    }
    return null;
  }

  public setUser(u: User) {

    for (const p1 of this.list) {
      if (p1.email === u.email) {
        p1.password = u.password;
        return;
      }
    }
  }

  public setToken(user) {
    localStorage.setItem(TOKEN, JSON.stringify(user));
    this.user = user;
  }

  public isLoggedIn() {
    if (localStorage.getItem(TOKEN) !== null) {
      return localStorage.getItem(TOKEN);
    } else {
      return null;
    }
  }

  public logOut() {
    this.router.navigate(['']);
    this.user =  new User('', '', Role.NONE);
    localStorage.removeItem(TOKEN);
    localStorage.setItem(TOKEN, JSON.stringify(this.user));
  }

  public isPatient() {
    if (this.isLoggedIn()) {
      return this.user.role === Role.PATIENT;
    }
  }

  public isDoctor() {
    if (this.isLoggedIn()) {
      return this.user.role === Role.DOCTOR;
    }
  }

  public isNurse() {
    if (this.isLoggedIn()) {
      return this.user.role === Role.NURSE;
    }
  }

  public isClinicalAdmin() {
    if (this.isLoggedIn()) {
      return this.user.role === Role.CLINIC_ADMINISTRATOR;
    }
  }

  public isClinicalCentreAdmin() {
    if (this.isLoggedIn()) {
      return this.user.role === Role.CLINICAL_CENTRE_ADMINISTRATOR;
    }
  }

  public isNone() {
    if (this.isLoggedIn()) {
      return this.user.role === Role.NONE;
    }
  }

}
