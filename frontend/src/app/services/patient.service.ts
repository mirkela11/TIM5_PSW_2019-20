import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../model/user';
import {Patient} from '../model/patient';
import {UserServiceService} from './user-service.service';

export const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  urlPatient = environment.baseUrl + environment.patient;
  listPatients: Array<Patient> = new Array<Patient>();

  constructor(
    private http: HttpClient,
    private userService: UserServiceService
  ) {}

  public newPatient(patient) {
    return this.http.post(this.urlPatient + '/register', patient);
  }

  public loginPatient(patient) {
    this.userService.setToken(patient);
    return this.http.post(environment.baseUrl + '/login', patient, {responseType: 'text'});
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
