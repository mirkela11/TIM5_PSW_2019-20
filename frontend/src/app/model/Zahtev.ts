import {Clinic} from './clinic';
import {Doctor} from './doctor';
import {ZahtevStatus} from './ZahtevStatus';

export class Zahtev {

  id: string;
  name: string;
  surname: string;
  startingDate: string;
  finishDate: string;
 // doctor: Doctor;
  status: ZahtevStatus;
  constructor(id: string, name: string, surname: string, startingDate: string, finishDate: string, status: ZahtevStatus) {

    this.id = id;
    this.name = name;
    this.surname = surname;
    this.startingDate = startingDate;
    this.finishDate = finishDate;
   // this.doctor = doctor;
    this.status = status;
  }
}
