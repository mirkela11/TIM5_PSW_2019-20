import { Injectable } from '@angular/core';
import {Patient} from '../model/patient';
import {HttpClient} from '@angular/common/http';

export const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(
    private http: HttpClient
  ) { }

  public newPatient(patient) {
    return this.http.post(`${API_URL}/patient`, patient);
  }

  public deletePatient(id) {
    return this.http.delete(`${API_URL}/patients/${id}`);
  }

  public loginPatient(patient) {
    return this.http.post(`${API_URL}/patient/login`, patient);
  }

  public getPatient(id) {
    return this.http.get<Patient>(`${API_URL}/patients/${id}`);
  }

  public getPatients() {
    return this.http.get<Patient>(`${API_URL}/patients`);
  }

  public updatePatient(id, patient) {
    return this.http.put(`${API_URL}/patients/${id}`, patient);
  }
}
