import {PatientStatus} from './patientStatus';
import {Examination} from "./examination";

export class Patient {

  email: string;
  password: string;
  name: string;
  surname: string;
  number: string;
  address: string;
  city: string;
  country: string;
  insuranceID: string;
  status: PatientStatus;
  examinations: Array<Examination> = new Array<Examination>();


  constructor(email: string, password: string, name: string, surname: string, number1: string, address: string, city: string,
              country: string, insuranceId: string, status: PatientStatus, examinations?: Array<Examination>) {

      this.email = email;
      this.password = password;
      this.name = name;
      this.surname = surname;
      this.number = number1;
      this.address = address;
      this.country = country;
      this.city = city;
      this.insuranceID = insuranceId;
      this.status = status;
      this.examinations = examinations;
  }
}


