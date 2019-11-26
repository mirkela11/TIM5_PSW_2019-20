import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';


export const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {

  }


  // public login(username: string, password: string) {
   //   return this.http.post<any>(
    //    `${API_URL}/authenticate`,
      //  {
        //  username,
          // password
        // }
      // ).pipe(
       // map(
        //  data => {
         //   if (user && user.token) {
          //    sessionStorage.setItem('currentUser', JSON.stringify(user));
           //   return data;
            // }
          // }
        // )
      // );
  // }

  public getAuthPatient() {
    return sessionStorage.getItem('currentUser');
  }


  public logout() {
    sessionStorage.removeItem('currentUser');
  }
}
