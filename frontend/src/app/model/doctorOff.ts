import {Doctor} from './doctor';
import {OffType} from './offType';
import {OffStatus} from './offStatus';

export class DoctorOff {
  id: number;
  type: OffType;
  status: OffStatus;
  doctor: Doctor;

  constructor(type: OffType, status: OffStatus, doctor: Doctor, id?: number) {
    this.type = type;
    this.status = status;
    this.doctor = doctor;
    this.id = id;

  }

}
