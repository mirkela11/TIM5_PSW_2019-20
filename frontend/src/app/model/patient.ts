import {PatientStatus} from './patientStatus';

export class Patient {

  constructor(

    public email: string,
    public password: string,
    public name: string,
    public surname: string,
    public number: string,
    public address: string,
    public city: string,
    public country: string,
    public insuranceID: string,
    public status: PatientStatus

  ) {}
}
