import { Injectable } from '@angular/core';
import {Zahtev} from '../model/Zahtev';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {UserServiceService} from './user-service.service';
import {ZahtevStatus} from '../model/ZahtevStatus';

@Injectable({
  providedIn: 'root'
})
export class VacationService {

  urlVacation = environment.baseUrl + environment.zahtev;
  listVacation: Array<Zahtev> = new Array<Zahtev>();
  zahtev: Zahtev;
  tmp: Array<Zahtev>;
  constructor(
    private http: HttpClient,
    private userService: UserServiceService
  ) {

     this.getAllVacations();
     this.getAllRequests();
  }

  public newVacation(zahtev) {
    return this.http.post(this.urlVacation + '/nurse/VacationRequest', zahtev);
  }

  public newVacation1(zahtev) {
    return this.http.post(this.urlVacation + '/doctor/VacationRequest', zahtev);
  }

  public addVacation(v: Zahtev) {
    if (this.getVacations(v.email) === null) {
      this.listVacation.push(v);
    }
  }

  public addVacation1(v: Zahtev) {
    if (this.getVacations(v.email) === null) {
      this.listVacation.push(v);
    }
  }

  public getVacations(email: string) {
    if ( this.listVacation.length === 0) {
      return null;
    }
    for (const u of this.listVacation) {
      if ( u.email === email) {
        return u;
      }
    }

    return null;
  }
  public getVacations1(email: string) {
    if ( this.listVacation.length === 0) {
      return null;
    }
    for (const u of this.listVacation) {
      if ( u.email === email) {
        return u;
      }
    }

    return null;
  }

  public editVacation(zahtev) {
    return this.http.post(this.urlVacation + '/edit', zahtev, {responseType: 'text'});
  }

  public setVacation(p: Zahtev) {

    for (const p1 of this.listVacation) {
      if (p1.email === p.email) {
        p1.name = p.name;
        p1.surname = p.surname;
        p1.startingDate = p.startingDate;
        p1.finishDate = p.finishDate;
        return;
      }
    }
  }

  public setVacation1(p: Zahtev) {

    for (const p1 of this.listVacation) {
      if (p1.email === p.email) {
        p1.name = p.name;
        p1.surname = p.surname;
        p1.startingDate = p.startingDate;
        p1.finishDate = p.finishDate;
        return;
      }
    }
  }

  public whichStatus(status: string) {
    if (status === 'AWAITING_APPROVAL') {
      return ZahtevStatus.AWAITING_APPROVAL;
    } else {
      return ZahtevStatus.APPROVED;
    }

  }

  public getAllVacations(): Array<Zahtev> {
    this.http.get(this.urlVacation + '/all').subscribe((data: Zahtev[]) => {
        for (const c of data) {
          this.zahtev = new Zahtev(c.email, c.name, c.surname, c.startingDate, c.finishDate, this.whichStatus(c.status.toString()));
          this.addVacation(this.zahtev);
        }
      },
      error => {
        console.log(error);
      }
    );

    return this.listVacation;
  }

  public getAllRequests(): Array<Zahtev> {
    this.http.get(this.urlVacation + '/VacationRequest').subscribe((data: Zahtev[]) => {
        this.tmp = new Array<Zahtev>();
        for (const c of data) {
          this.zahtev = new Zahtev(c.email, c.name, c.surname, c.startingDate, c.finishDate, ZahtevStatus.AWAITING_APPROVAL);
          this.tmp.push(this.zahtev);
          console.log(this.zahtev);
        }
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.tmp);
    return this.tmp;
  }
}
