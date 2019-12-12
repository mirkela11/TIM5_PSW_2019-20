
export class AdminClinic{

  email: string;
  password: string;
  name: string;
  surname: string;
  number: string;

  constructor(email: string, password: string, name: string, surname: string, number: string){
    this.email = email;
    this.password = password;
    this.name = name;
    this.surname = surname;
    this.number = number;
  }
}

