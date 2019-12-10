export class Nurse {

  email: string;
  password: string;
  name: string;
  surname: string;
  phone: string;
  workHoursTo: string;
  workHoursFrom: string;

  constructor(email: string, password: string, name: string, surname: string, phone: string, worhHoursTo: string, worhHoursFrom: string){
    this.email = email;
    this.password = password;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
    this.workHoursFrom = worhHoursFrom;
    this.workHoursTo = worhHoursTo;

  }

}
