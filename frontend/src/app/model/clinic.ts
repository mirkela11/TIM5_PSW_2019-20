import {Doctor} from './doctor';
import {ExaminationType} from './examinationType';

export class Clinic {
  id: number;
  name: string;
  address: string;
  description: string;
  clinicRating: number;
  doctors: Array<Doctor> = new Array<Doctor>();
  types: Array<ExaminationType> = new Array<ExaminationType>();

  constructor(name: string, address: string, description: string, doctors: Array<Doctor>, types?: Array<ExaminationType>, clinicRating?: number, id?: number) {
    this.name = name;
    this.address = address;
    this.description = description;
    this.doctors = doctors;
    this.clinicRating = clinicRating;
    this.types = types;
    this.id = id;
  }
}
