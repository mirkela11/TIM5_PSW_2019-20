import {Clinic} from './clinic';

export class ExaminationType {

  label: string;
  price: number;

  constructor(label: string, price: number) {
    this.label = label;
    this.price = price;
  }
}
