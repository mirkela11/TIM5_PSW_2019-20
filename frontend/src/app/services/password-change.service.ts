import { Injectable } from '@angular/core';
import {PasswordChange} from '../model/passwordChange';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import { environment } from '../../environments/environment';
import {retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PasswordChangeService {

  url = environment.baseUrl + environment.user;
  constructor(
    private httpClient: HttpClient, private router: Router
  ) { }

  public changePass(user: PasswordChange) {
    return this.httpClient.put(this.url, user);
  }
}
