import {Injectable} from '@angular/core';
import {User} from '../model/user';
import {Role} from '../model/role';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {retry} from 'rxjs/operators';

export const TOKEN = 'LoggedInUser';

@Injectable({
  providedIn: 'root'
})


export class UserServiceService {


  list: Array<User> = new Array<User>();
  doctor: User;
  patient: User;
  user: User = new User('', '', Role.NONE);
  constructor(private router: Router, private http: HttpClient) {

    this.doctor = new User('doctor@email.com', 'Doctor123', Role.DOCTOR);
    this.patient = new User('patient@email.com', 'Patient123', Role.PATIENT);
    this.list.push(this.doctor);
    this.list.push(this.patient);
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

  public setToken(user) {
    localStorage.setItem(TOKEN, JSON.stringify(user));
    this.user = user;
  }

  public isLoggedIn() {
    if (localStorage.getItem(TOKEN) !== null) {
      console.log(localStorage.getItem(TOKEN));
      return localStorage.getItem(TOKEN);
    } else {
      return null;
    }
  }

  public logOut() {
    this.router.navigate(['']);
    this.user =  new User('', '', Role.NONE);
    return localStorage.setItem(TOKEN, JSON.stringify(this.user));
    // return this.http.post(environment.baseUrl + '/logout', this.user);
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
