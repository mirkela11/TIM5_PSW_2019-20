
export class ClinicalCentreAdministrator {

  email: string;
  password: string;
  name: string;
  surname: string;
  number: string;


  constructor(email: string, password: string, name: string, surname: string, number1: string) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.surname = surname;
    this.number = number1;
  }
}
