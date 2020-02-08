import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Examination} from '../model/examination';
import {ExaminationKind} from '../model/examinationKind';
import {ExaminationStatus} from '../model/examinationStatus';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ExaminationType} from '../model/examinationType';
import {ExaminationReport} from '../model/examinationReport';

@Injectable({
  providedIn: 'root'
})
export class ExaminationService {

  url = environment.baseUrl + environment.examination;
  listExaminations: Array<Examination> = new Array<Examination>();
  examination: Examination;
  examinationDoctor: Examination;
  examinationForDoctor: Array<Examination> = new Array<Examination>();
  examinationReport: ExaminationReport;
  predefExaminations: Array<Examination> = new Array<Examination>();
  etype: ExaminationType;
  MHFP: Array<Examination> = new Array<Examination>();
  tmp: Array<Examination> = new Array<Examination>();
  constructor(
    private http: HttpClient,
  ) {
    this.getAllExaminations();
  }

  public whichKindExamination(kind: string) {
    if (kind === 'EXAMINATION') {
      return ExaminationKind.EXAMINATION;
    } else {
      return ExaminationKind.OPERATION;
    }
  }

  public whichStatusExamination(status: string) {
    if (status === 'APPROVED') {
      return ExaminationStatus.APPROVED;
    } else if (status === 'AWAITING') {
      return ExaminationStatus.AWAITING;
    } else if (status === 'PREDEF_BOOKED') {
      return  ExaminationStatus.PREDEF_BOOKED;
    } else {
      return ExaminationStatus.PREDEF_AVAILABLE;
    }
  }

  public getAllExaminations(): Array<Examination> {
    this.http.get(this.url + '/all').subscribe((data: Examination[]) => {
        this.listExaminations = new Array<Examination>();
        for (const c of data) {
          this.examination =  new Examination(this.whichKindExamination(c.kind.toString()), this.whichStatusExamination(c.status.toString()), c.examinationType, c.discount, c.doctorRating, c.clinicRating, c.nurse, c.clinic, c.patient, c.doctors, c.id, c.interval);
          this.listExaminations.push(this.examination);
        }
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.listExaminations);
    return this.listExaminations;
  }

  public addExamination(e: Examination) {
    if (this.getExamination(e.id) === null) {
      this.listExaminations.push(e);
    }
  }
  public getExamination(id: number) {
    if ( this.listExaminations.length === 0) {
      return null;
    }
    for (const e of this.listExaminations) {
      if (e.id === id) {
        return e;
      }
    }

    return null;
  }

  public getAllPredefExaminations(): Array<Examination> {
    this.http.get(this.url + '/allPredefExaminations').subscribe((data: Examination[]) => {
        console.log('data ispod');
        console.log(data);
        this.predefExaminations = new Array<Examination>();
        for (const c of data) {
          this.examination =  new Examination(this.whichKindExamination(c.kind.toString()), this.whichStatusExamination(c.status.toString()), c.examinationType, c.discount, c.doctorRating, c.clinicRating, c.nurse, c.clinic, c.patient, c.doctors, c.id, c.interval);
          this.predefExaminations.push(this.examination);
        }
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.predefExaminations);
    return this.predefExaminations;
  }

  public getMHforP(email: string): Array<Examination> {
    let params = new HttpParams();
    params = params.append('email', email);
    this.tmp = new Array<Examination>();
    this.http.get(this.url + '/getMHforP', {params}).subscribe((data: Examination[]) => {
        for (const c of data) {
          this.examination =  new Examination(this.whichKindExamination(c.kind.toString()), this.whichStatusExamination(c.status.toString()), c.examinationType, c.discount, c.doctorRating, c.clinicRating, c.nurse, c.clinic, c.patient, c.doctors, c.id, c.interval);
          this.tmp.push(this.examination);
        }
      },
      error => {
        console.log(error);
      }
    );
    this.MHFP = this.tmp;
    return this.MHFP;
  }

  public setMHFP(examinations: Array<Examination>) {
    this.MHFP = examinations;
  }

  public getMHFP() {
    return this.MHFP;
  }

  public makePredefExamination(id: string, email: string) {
    let params = new HttpParams();
    params = params.append('id', id);
    params = params.append('email', email);
    return this.http.post(this.url + '/makePredefExamination', params);
  }

  public makeExamination(date: string, patientEmail: string, doctorEmail: string, type: string, clinicId: string, kind: string, adminsClinic: string) {
    let params = new HttpParams();
    params = params.append('date', date);
    params = params.append('patientEmail', patientEmail);
    params = params.append('doctorEmail', doctorEmail);
    params = params.append('type', type);
    params = params.append('clinicId', clinicId);
    params = params.append('kind', kind);
    params = params.append('adminsClinic', adminsClinic);
    return this.http.post(this.url + '/addExaminationPatient', params);
  }

  public getExaminationsForDoctor(email: string): Array<Examination> {

    let params = new HttpParams();
    params = params.append('email', email);
    this.examinationForDoctor = new Array<Examination>();
    this.http.get(this.url + '/allExaminationsForDoctor', {params}).subscribe((data: Examination[]) => {
        for (const c of data) {
          this.examinationDoctor =  new Examination(this.whichKindExamination(c.kind.toString()), this.whichStatusExamination(c.status.toString()), c.examinationType, c.discount, c.doctorRating, c.clinicRating, c.nurse, c.clinic, c.patient, c.doctors, c.id, c.interval);
          this.examinationForDoctor.push(this.examinationDoctor);
        }
      },
      error => {
        console.log(error);
      }
    );
    console.log('Ispod');
    console.log(this.examinationForDoctor);
    return this.examinationForDoctor;
  }

  public getPatientForDoctors() {
    return this.examinationForDoctor;
  }


}
