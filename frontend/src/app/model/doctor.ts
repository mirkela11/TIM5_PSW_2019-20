
export class Doctor {

  email: string;
  password: string;
  name: string;
  surname: string;
  number: string;
  workHoursFrom: string;
  workHoursTo: string;

  constructor(email: string, password: string, name: string, surname: string, number1: string, workHoursFrom: string, workHoursTo: string) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.surname = surname;
    this.number = number1;
    this.workHoursFrom = workHoursFrom;
    this.workHoursTo = workHoursTo;
  }
}
