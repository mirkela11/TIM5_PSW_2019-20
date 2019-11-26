import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../model/user';
import {Patient} from '../model/patient';

export const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  urlPatient = environment.baseUrl + environment.patient;
  listPatients: Array<Patient>;

  constructor(
    private http: HttpClient
  ) {
    this.listPatients = new Array<Patient>();
  }

  public newPatient(patient) {
    return this.http.post(this.urlPatient + '/register', patient);
  }

  public loginPatient(patient) {
    return this.http.post(this.urlPatient + '/login', patient, {responseType: 'text'});
  }

  public addPatient(p: Patient) {
    this.listPatients.push(p);
  }

  public getPatient(email: string) {
    if ( this.listPatients.length === 0) {
      return;
    }
    for (const u of this.listPatients) {
      if ( u.email === email) {
        return u;
      }
    }
  }

}
