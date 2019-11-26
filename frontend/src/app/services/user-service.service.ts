import { Injectable } from '@angular/core';
import {User} from '../model/user';

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

}
