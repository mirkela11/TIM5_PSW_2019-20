import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {AdminClinic} from '../model/adminClinic';
import {UserServiceService} from './user-service.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Patient} from '../model/patient';
import {AdminClinicStatus} from '../model/adminClinicStatus';

@Injectable({
  providedIn: 'root'
})
export class AdminClinicService {

  urlAdminClinic = environment.baseUrl + environment.adminClinic;
  listAdminClinic: Array<AdminClinic> = new Array<AdminClinic>();
  adminClinic: AdminClinic;
  editAC: AdminClinic;
  adminClinicsWithClinicId: Array<AdminClinic> = new Array<AdminClinic>();

  constructor(
    private http: HttpClient,
    private userService: UserServiceService
  ) {
    this.getAllClinicAdmins();
  }

  public loginAdminClinic(adminClinic) {
    this.userService.setToken(adminClinic);
    return this.http.post(environment.baseUrl + '/login', adminClinic, {responseType: 'text'});
  }

  public editAdminClinic(adminClinic) {
    return this.http.post(this.urlAdminClinic + '/edit', adminClinic, {responseType: 'text'});
  }

  public getAdminClinic(email: string) {
    if ( this.listAdminClinic.length === 0) {
      return null;
    }
    for (const u of this.listAdminClinic) {
      if ( u.email === email) {
        return u;
      }
    }

    return null;
  }

  public setAdminClinic(ac: AdminClinic) {
    for (const ac1 of this.listAdminClinic) {
      if (ac1.email === ac.email) {
        ac1.password = ac.password;
        ac1.name = ac.name;
        ac1.surname = ac.surname;
        ac1. number = ac.number;
      }
    }
  }

  public addClinicAdmin(a: AdminClinic) {
    if (this.getAdminClinic(a.email) === null) {
      this.listAdminClinic.push(a);
    }
  }

  public whichStatus(status: string) {
    if (status === 'ACTIVE') {
      return AdminClinicStatus.ACTIVE;
    } else {
      return  AdminClinicStatus.DELETED;
    }
  }

  public getAllClinicAdmins(): Array<AdminClinic> {
    this.http.get(this.urlAdminClinic + '/all').subscribe((data: AdminClinic[]) => {
        for (const c of data) {
          this.adminClinic = new AdminClinic(c.email, c.password, c.name, c.surname, c.number, c.clinic, this.whichStatus(c.status.toString()));
          this.addClinicAdmin(this.adminClinic);
          console.log(c);
          console.log('Ispod admin klinike');
          console.log(this.adminClinic);
        }
      },
      error => {
        console.log(error);
      }
    );

    return this.listAdminClinic;
  }

  public newAdminClinic(adminClinic) {
    return this.http.post(this.urlAdminClinic + '/clinical-centre-admin/addAdmins', adminClinic);
  }

  public addAdminClinic(ac: AdminClinic) {
    if (this.getAdminClinic(ac.email) === null) {
      this.listAdminClinic.push(ac);
    }
  }

  public getAdminClinicsWithClinicId(id: string): AdminClinic[] {
    let params = new HttpParams();
    params = params.append('id', id);
    this.http.get(this.urlAdminClinic + '/adminClinicsWithClinicId', {params}).subscribe((data: AdminClinic[]) => {
          this.adminClinicsWithClinicId = data;
          console.log('Admin clinic get ispod');
          console.log(this.adminClinicsWithClinicId);
      },
      error => {
        console.log(error);
      }
    );

    return this.adminClinicsWithClinicId;
  }
}
