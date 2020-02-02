import {TimeInterval} from 'rxjs';
import {Time} from '@angular/common';

export class Nurse {

  email: string;
  password: string;
  name: string;
  surname: string;
  phone: string;
  workHoursTo: Time;
  workHoursFrom: Time;

  constructor(email: string, password: string, name: string, surname: string, phone: string, worhHoursTo: Time, worhHoursFrom: Time) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
    this.workHoursFrom = worhHoursFrom;
    this.workHoursTo = worhHoursTo;

  }

}
