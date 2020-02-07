import {Patient} from './patient';
import {ExaminationReport} from './examinationReport';

export class MedicalRecord {
  id: number;
  height: number;
  weight: number;
  bloodType: string;
  allergies: string;
  patient: Patient;
  examinationReports: Array<ExaminationReport> = new Array<ExaminationReport>();

  constructor(id: number, height: number, weight: number, bloodType: string, allergies: string, patient: Patient, examinationReports?: Array<ExaminationReport>) {
    this.id = id;
    this.height = height;
    this.weight = weight;
    this.bloodType = bloodType;
    this.allergies = allergies;
    this.patient = patient;
    this.examinationReports = examinationReports;
  }

  public set(height: number, weight: number, bloodType: string, allergies: string, reports?: Array<ExaminationReport>) {
    this.height = height;
    this.weight = weight;
    this.bloodType = bloodType;
    this.allergies = allergies;
    this.reports = reports;
  }
}
