import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {ClinicalCentreAdministrator} from '../model/ClinicalCentreAdministrator';
import {HttpClient} from '@angular/common/http';
import {UserServiceService} from './user-service.service';
import {Doctor} from '../model/doctor';
import {Patient} from '../model/patient';
import {PatientStatus} from '../model/patientStatus';
import {PatientService} from './patient.service';

@Injectable({
  providedIn: 'root'
})
export class ClinicalCentreAdministratorService {

  urlAdmin = environment.baseUrl + environment.ClinicalCentreAdministrator;
  listAdmins: Array<ClinicalCentreAdministrator> = new Array<ClinicalCentreAdministrator>();
  clinicalCentreAdministrator: ClinicalCentreAdministrator;
  editD: ClinicalCentreAdministrator;
  tmp: Array<Patient>;
  patient: Patient;
  constructor(
          private http: HttpClient,
          private userService: UserServiceService,
          private patientService: PatientService) {
    this.clinicalCentreAdministrator = new ClinicalCentreAdministrator('zejak@email.com', 'Zejake123', 'Nikola', 'Zejak', '789456321');
    this.listAdmins.push(this.clinicalCentreAdministrator);
  }

  public loginAdmin(clinicalCentreAdministrator) {
    this.userService.setToken(clinicalCentreAdministrator);
    return this.http.post(environment.baseUrl + '/login', clinicalCentreAdministrator, {responseType: 'text'});
  }
  public editAdmin(clinicalCentreAdministrator) {
    return this.http.post(this.urlAdmin + '/edit', clinicalCentreAdministrator , {responseType: 'text'});
  }

  public getAdmin(email: string) {
    if ( this.listAdmins.length === 0) {
      return null;
    }
    for (const u of this.listAdmins) {
      if ( u.email === email) {
        return u;
      }
    }

    return null;
  }

  public setAdmin(d: ClinicalCentreAdministrator) {
    for (const d1 of this.listAdmins) {
      if (d1.email === d.email) {
        d1.password = d.password;
        d1.name = d.name;
        d1.surname = d.surname;
        d1. number = d.number;
      }
    }
  }

  public getAllRequests(): Array<Patient> {
    this.http.get(this.urlAdmin + '/requests').subscribe((data: Patient[]) => {
        this.tmp = new Array<Patient>();
        for (const c of data) {
          if (this.patientService.whichStatus(c.status.toString()) === PatientStatus.AWAITING_APPROVAL) {
            this.patient = new Patient(c.email, c.password, c.name, c.surname, c.number, c.address, c.city, c.country, c.insuranceID, this.patientService.whichStatus(c.status.toString()));
            this.tmp.push(this.patient);
          }
        }
      },
      error => {
        console.log(error);
      }
    );

    return this.tmp;
  }



  }
