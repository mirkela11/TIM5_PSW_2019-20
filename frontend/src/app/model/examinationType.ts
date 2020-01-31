import {Clinic} from './clinic';

export class ExaminationType {

  label: string;
  price: number;
  clinic: Clinic;

  constructor(label: string, price: number, clinic: Clinic) {
    this.label = label;
    this.price = price;
    this.clinic = clinic;
  }
}
