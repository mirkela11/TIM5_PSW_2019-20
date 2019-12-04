import {PatientStatus} from './patientStatus';

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


  constructor(email: string, password: string, name: string, surname: string, number1: string, address: string, city: string,
              country: string, insuranceId: string, status: PatientStatus) {

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
  }
}


