import {ExaminationKind} from './examinationKind';
import {Clinic} from './clinic';

export class Room {

  name: string;
  number: string;
  kind: ExaminationKind;
  clinic: Clinic;
  constructor(name: string, number1: string, clinic?: Clinic, kind?: ExaminationKind) {
    this.name = name;
    this.number = number1;
    this.kind = kind;
    this.clinic = clinic;
  }
}
