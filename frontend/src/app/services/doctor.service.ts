import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Doctor} from '../model/doctor';
import {HttpClient} from '@angular/common/http';
import {UserServiceService} from './user-service.service';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  urlDoctor = environment.baseUrl + environment.doctor;
  listDoctors: Array<Doctor> = new Array<Doctor>();
  doctor: Doctor;
  editD: Doctor;
  constructor(
    private http: HttpClient,
    private userService: UserServiceService
  ) {
    this.doctor = new Doctor( 'doctor@email.com', 'Doctor123', 'Doctor', 'Docic',
      '123467911', '08', '16');
    this.listDoctors.push(this.doctor);
  }

  public loginDoctor(doctor) {
    this.userService.setToken(doctor);
    return this.http.post(environment.baseUrl + '/login', doctor, {responseType: 'text'});
  }

  public editDoctor(doctor) {
    return this.http.post(this.urlDoctor + '/edit', doctor, {responseType: 'text'});
  }

  public getDoctor(email: string) {
    if ( this.listDoctors.length === 0) {
      return null;
    }
    for (const u of this.listDoctors) {
      if ( u.email === email) {
        return u;
      }
    }

    return null;
  }

  public setDoctor(d: Doctor){
    for(const d1 of this.listDoctors){
      if(d1.email === d.email){
        d1.password = d.password;
        d1.name = d.name;
        d1.surname = d.surname;
        d1. number = d.number;
        d1.workHoursFrom = d.workHoursFrom;
        d1.workHoursTo = d.workHoursTo;
      }
    }
  }
}
