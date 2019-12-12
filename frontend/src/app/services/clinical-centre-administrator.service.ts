import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {ClinicalCentreAdministrator} from '../model/ClinicalCentreAdministrator';
import {HttpClient} from '@angular/common/http';
import {UserServiceService} from './user-service.service';
import {Doctor} from '../model/doctor';

@Injectable({
  providedIn: 'root'
})
export class ClinicalCentreAdministratorService {

  urlAdmin = environment.baseUrl + environment.ClinicalCentreAdministrator;
  listAdmins: Array<ClinicalCentreAdministrator> = new Array<ClinicalCentreAdministrator>();
  clinicalCentreAdministrator: ClinicalCentreAdministrator;
  editD: ClinicalCentreAdministrator;
  constructor(
          private http: HttpClient,
          private userService: UserServiceService) {
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

  public setAdmin(d: ClinicalCentreAdministrator){
    for (const d1 of this.listAdmins) {
      if (d1.email === d.email) {
        d1.password = d.password;
        d1.name = d.name;
        d1.surname = d.surname;
        d1. number = d.number;
      }
    }
  }



  }
