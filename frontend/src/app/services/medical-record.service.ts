import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Examination} from '../model/examination';
import {MedicalRecord} from '../model/medicalRecord';
import {HttpClient} from '@angular/common/http';
import {ExaminationReport} from '../model/examinationReport';

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordService {

  url = environment.baseUrl + environment.medicalRecord;
  listMedicalRecord: Array<MedicalRecord> = new Array<MedicalRecord>();
  medicalRecord: MedicalRecord;
  examiantionReport: ExaminationReport;

  constructor(private http: HttpClient, ) {
    this.getAllMedicalRecords();
  }

  public addMedicalRecord(mr: MedicalRecord) {
    if (this.getMedicalRecord(mr.id) === null) {
      this.listMedicalRecord.push(mr);
    }
  }

  public getAllMedicalRecords(): Array<MedicalRecord> {
    this.http.get(this.url + '/all').subscribe((data: MedicalRecord[]) => {
        this.listMedicalRecord = new Array<MedicalRecord>();
        for (const c of data) {
          // Ostalo je da se doda examinaton_report u konstruktoru
          this.medicalRecord = new MedicalRecord(c.id, c.height, c.weight, c.bloodType, c.allergies, c.patient);
          this.listMedicalRecord.push(this.medicalRecord);
          console.log(this.medicalRecord);
        }
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.listMedicalRecord);
    return this.listMedicalRecord;
  }

  public getMedicalRecord(id: number) {
    if (this.listMedicalRecord.length === 0) {
      return null;
    }
    for (const e of this.listMedicalRecord) {
      if (e.id === id) {
        return e;
      }
    }
  }

}