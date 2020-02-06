import {AdminClinicStatus} from './adminClinicStatus';
import {Clinic} from './clinic';

export class AdminClinic {

  email: string;
  password: string;
  name: string;
  surname: string;
  number: string;
  status: AdminClinicStatus;
  clinic: Clinic;

  constructor(email: string, password: string, name: string, surname: string, number1: string, clinic?: Clinic, status?: AdminClinicStatus) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.surname = surname;
    this.number = number1;
    this.status = status;
    this.clinic = clinic;
  }
}

