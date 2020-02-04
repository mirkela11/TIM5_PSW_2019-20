import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Doctor} from '../model/doctor';
import {HttpClient, HttpParams} from '@angular/common/http';
import {UserServiceService} from './user-service.service';
import {Clinic} from '../model/clinic';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  urlDoctor = environment.baseUrl + environment.doctor;
  listDoctors: Array<Doctor> = new Array<Doctor>();
  doctor: Doctor;
  editD: Doctor;
  doctorss: Array<Doctor> = new Array<Doctor>();
  termins: Array<string> = new Array<string>();
  termin: string;
  constructor(
    private http: HttpClient,
    private userService: UserServiceService
  ) {
    this.getAllDoctors();
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

  public addDoctor(d: Doctor) {
    if (this.getDoctor(d.email) === null) {
      this.listDoctors.push(d);
    }
  }

  public setDoctor(d: Doctor) {
    for (const d1 of this.listDoctors) {
      if (d1.email === d.email) {
        d1.password = d.password;
        d1.name = d.name;
        d1.surname = d.surname;
        d1.phone = d.phone;
        d1.workHoursFrom = d.workHoursFrom;
        d1.workHoursTo = d.workHoursTo;
      }
    }
  }

  public getAllDoctors(): Array<Doctor> {
    this.http.get(this.urlDoctor + '/all').subscribe((data: Doctor[]) => {
        for (const c of data) {
          this.doctor = new Doctor(c.email, c.password, c.name, c.surname, c.phone, c.workHoursFrom, c.workHoursTo, c.specialized, c.doctorRating, c.clinic);
          this.addDoctor(this.doctor);
        }
      },
      error => {
        console.log(error);
      }
    );
    return this.listDoctors;
  }

  public getDoctorsTermins(date: string, email: string): string {
    let params = new HttpParams();
    params = params.append('date', date);
    params = params.append('email', email);
    console.log(params)
    this.http.get(this.urlDoctor + '/terminString', {params, responseType: 'text'}).subscribe((data: string) => {
        this.termins = new Array<string>();
        console.log('Ispod ovde');
        console.log(data);
        this.termin = data;
        this.termins.push(data);


      },
      error => {
        console.log(error);
      }
    );

    return this.termin;
  }

  public getDoctorss() {
    return this.doctorss;
  }

  public setDoctorss(doctorss: Array<Doctor>) {
    this.doctorss = doctorss;
  }

}
