import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Examination} from '../model/examination';
import {ExaminationKind} from '../model/examinationKind';
import {ExaminationStatus} from '../model/examinationStatus';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExaminationService {

  url = environment.baseUrl + environment.examination;
  listExaminations: Array<Examination> = new Array<Examination>();
  examination: Examination;
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
          this.examination =  new Examination(this.whichKindExamination(c.kind.toString()), this.whichStatusExamination(c.status.toString()), c.type, c.discount, c.doctorRating, c.clinicRating, c.nurse, c.clinic, c.patient, c.doctors, c.id);
          this.listExaminations.push(this.examination);
          console.log(this.examination);
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

}
