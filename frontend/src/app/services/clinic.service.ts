import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Clinic} from '../model/clinic';
import {HttpClient} from '@angular/common/http';
import {Patient} from '../model/patient';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  urlClinic = environment.baseUrl + environment.clinic;
  listClinics: Array<Clinic> = new Array<Clinic>();
  clinic: Clinic;
  constructor( private http: HttpClient) {
    this.getAllClinics();
  }

  public addClinic(c: Clinic) {
    if (this.getClinic(c.name) === null) {
      this.listClinics.push(c);
    }
  }

  public getClinic(name: string) {
    if ( this.listClinics.length === 0) {
      return null;
    }
    for (const u of this.listClinics) {
      if ( u.name === name) {
        return u;
      }
    }

    return null;
  }

  public getClinicByName(name) {
    return this.http.get(this.urlClinic + '/' + name);
  }

  public getAllClinics(): Array<Clinic> {
    this.http.get(this.urlClinic + '/all').subscribe((data: Clinic[]) => {
      for (const c of data) {
        this.clinic = new Clinic(c.name, c.address, c.description);
        this.addClinic(this.clinic);
      }


      console.log(this.listClinics);
      console.log(data);
    },
      error => {
        console.log(error);
      }
    );

    return this.listClinics;
  }
}

