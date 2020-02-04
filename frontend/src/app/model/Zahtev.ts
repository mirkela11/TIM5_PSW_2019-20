import {Clinic} from './clinic';
import {Doctor} from './doctor';
import {ZahtevStatus} from './ZahtevStatus';

export class Zahtev {

  email: string;
  name: string;
  surname: string;
  startingDate: string;
  finishDate: string;
 // doctor: Doctor;
  status: ZahtevStatus;
  constructor(email: string, name: string, surname: string, startingDate: string, finishDate: string, status: ZahtevStatus) {

    this.email = email;
    this.name = name;
    this.surname = surname;
    this.startingDate = startingDate;
    this.finishDate = finishDate;
   // this.doctor = doctor;
    this.status = status;
  }
}
