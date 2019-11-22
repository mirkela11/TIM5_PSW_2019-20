import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


export const API_URL = 'http://localhost:8080';
export const TOKEN = 'token';
export const AUTHENTICATED_PATIENT = 'authenticatedPatient';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {

  }

  public auth(email, password) {
    return this.http.post<any>(
      `${API_URL}/authenticate`,
      {
        email,
        password
      }
    ).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_PATIENT, email);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        }
      )
    );
  }

  public getAuthPatient() {
    return sessionStorage.getItem(AUTHENTICATED_PATIENT);
  }

  public getAuthToken() {
    if (this.getAuthPatient()) {
      return sessionStorage.getItem(TOKEN);
    }
  }

  public isLoggedIn() {
    const patient = sessionStorage.getItem(AUTHENTICATED_PATIENT);
    return !(patient === null);
  }

  public logout() {
    sessionStorage.removeItem(AUTHENTICATED_PATIENT);
    sessionStorage.removeItem(TOKEN);
  }
}
