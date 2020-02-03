import { Injectable } from '@angular/core';
import {AdminClinic} from '../model/adminClinic';
import {Zahtev} from '../model/Zahtev';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {UserServiceService} from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class VacationService {

  urlVacation = environment.baseUrl + environment.zahtev;
  listVacation: Array<|Zahtev> = new Array<Zahtev>();
  zahtev: Zahtev;
  constructor(
    private http: HttpClient,
    private userService: UserServiceService
  ) { }

  public newVacation(zahtev) {
    return this.http.post(this.urlVacation + '/nurse/VacationRequest', zahtev);
  }

  public addVacation(v: Zahtev) {
    if (this.getVacations(v.id) === null) {
      this.listVacation.push(v);
    }
  }

  public getVacations(id: string) {
    if ( this.listVacation.length === 0) {
      return null;
    }
    for (const u of this.listVacation) {
      if ( u.id === id) {
        return u;
      }
    }

    return null;
  }
}
