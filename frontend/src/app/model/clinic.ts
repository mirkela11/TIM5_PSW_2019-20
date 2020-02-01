import {Doctor} from './doctor';

export class Clinic {
  id: number;
  name: string;
  address: string;
  description: string;
  clinicRating: number;
  doctors: Array<Doctor> = new Array<Doctor>();

  constructor(name: string, address: string, description: string, doctors: Array<Doctor>, clinicRating?: number, id?: number) {
    this.name = name;
    this.address = address;
    this.description = description;
    this.doctors = doctors;
    this.clinicRating = clinicRating;
    this.id = id;
  }
}
