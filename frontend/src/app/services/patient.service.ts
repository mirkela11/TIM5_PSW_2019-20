import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

export const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  urlPatient = environment.baseUrl + environment.patient;

  constructor(
    private http: HttpClient
  ) { }

  public newPatient(patient) {
    return this.http.post(this.urlPatient + '/register', patient);
  }

  public loginPatient(patient) {
    return this.http.post(this.urlPatient + '/login', patient);
  }

}
