import {Injectable} from '@angular/core';
import {User} from '../model/user';
import {Role} from '../model/role';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Clinic} from '../model/clinic';

export const TOKEN = 'LoggedInUser';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  list: Array<User> = new Array<User>();
  u: User;
  urlUser = environment.baseUrl + environment.user;
  user: User = new User('', '', Role.NONE);
  constructor(private router: Router, private http: HttpClient) {
    this.getAllUsers();
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

  public whichRole(role: string) {
    if (role === 'PATIENT') {
      return Role.PATIENT;
    } else if (role === 'DOCTOR') {
      return  Role.DOCTOR;
    } else if (role === 'NURSE') {
      return  Role.NURSE;
    } else if (role === 'CLINIC_ADMINISTRATOR') {
      return  Role.CLINIC_ADMINISTRATOR;
    } else if (role === 'CLINICAL_CENTRE_ADMINISTRATOR') {
      return  Role.CLINICAL_CENTRE_ADMINISTRATOR;
    } else {
      return null;
    }

  }

  public getAllUsers(): Array<User> {
    this.http.get(this.urlUser + '/all').subscribe((data: User[]) => {
        for (const c of data) {
            this.u = new User(c.email, c.password, this.whichRole(c.role.toString()));
            this.addUser(this.u);
        }
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.list);
    return this.list;
  }

  public setLoggedUser(user: User) {
    this.user = user;
  }

  public getLoggedUser() {
    return this.user;
  }


}
