import { Injectable } from '@angular/core';
import {User} from '../model/user';
<<<<<<< Updated upstream
=======
import {Role} from '../model/role';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {Patient} from '../model/patient';

export const TOKEN = 'LoggedInUser';
>>>>>>> Stashed changes

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  list: Array<User>;

  constructor() {
    this.list = new Array<User>();
  }

  public addUser(u: User) {
    this.list.push(u);
  }

  public getUser(email: string) {
    if ( this.list.length === 0) {
      return;
    }
    for (const u of this.list) {
      if ( u.email === email) {
        return u;
      }
    }
}

<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes
}
