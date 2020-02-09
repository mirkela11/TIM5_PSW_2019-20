import {Examination} from './examination';
import {ExaminationKind} from './examinationKind';
import {Clinic} from './clinic';
import {Interval} from './interval';

export class Rooms {
  id: number;
  label: string
  kind: ExaminationKind;
  clinic: Clinic;
  interval: Interval;

  constructor(id: number, label: string, kind: ExaminationKind, clinic: Clinic, interval: Interval) {
    this.id = id;
    this.label = label;
    this.kind = kind;
    this.clinic = clinic;
    this.interval = interval;
  }
}
