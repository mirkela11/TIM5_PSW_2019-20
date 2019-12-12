import {Clinic} from './clinic';

export class Doctor {

  email: string;
  password: string;
  name: string;
  surname: string;
  phone: string;
  workHoursFrom: string;
  workHoursTo: string;
  clinic: Clinic;

  constructor(email: string, password: string, name: string, surname: string, number1: string, workHoursFrom: string, workHoursTo: string, clinic?: Clinic) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.surname = surname;
    this.phone = number1;
    this.workHoursFrom = workHoursFrom;
    this.workHoursTo = workHoursTo;
    this.clinic = clinic;
  }
}
