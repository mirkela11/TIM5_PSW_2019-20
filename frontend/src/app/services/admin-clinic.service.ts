import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {AdminClinic} from "../model/adminClinic";
import {UserServiceService} from "./user-service.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminClinicService {

  urlAdminClinic = environment.baseUrl + environment.adminClinic;
  listAdminClinic: Array<AdminClinic> = new Array<AdminClinic>();
  adminClinic: AdminClinic;
  editAC: AdminClinic;

  constructor(
    private http: HttpClient,
    private userService: UserServiceService
  ){
    this.adminClinic = new AdminClinic('nemanja@email.com', 'Mirkela97', 'Nemanja', 'Mirkovic', '123456789');
    this.listAdminClinic.push(this.adminClinic);
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

  public setAdminClinic(ac: AdminClinic){
    for(const ac1 of this.listAdminClinic){
      if(ac1.email === ac.email){
        ac1.password = ac.password;
        ac1.name = ac.name;
        ac1.surname = ac.surname;
        ac1. number = ac.number;
      }
    }
  }
}
