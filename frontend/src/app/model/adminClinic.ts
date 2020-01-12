import {AdminClinicStatus} from './adminClinicStatus';

export class AdminClinic {

  email: string;
  password: string;
  name: string;
  surname: string;
  number: string;
  status: AdminClinicStatus;

  constructor(email: string, password: string, name: string, surname: string, number1: string, status?: AdminClinicStatus) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.surname = surname;
    this.number = number1;
    this.status = status;
  }
}

