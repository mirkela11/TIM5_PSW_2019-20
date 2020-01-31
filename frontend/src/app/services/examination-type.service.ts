import { Injectable } from '@angular/core';
import {ExaminationType} from '../model/examinationType';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExaminationsTypeService {

  urlExaminationType = environment.baseUrl + environment.examinationType;
  examinationTypes: Array<ExaminationType> = new Array<ExaminationType>();
  type: ExaminationType;

  constructor(private http: HttpClient) { }

  public getAllTypes(): Array<ExaminationType> {
    this.http.get(this.urlExaminationType + '/all').subscribe((data: ExaminationType[]) => {
        for (const c of data) {
          this.type = new ExaminationType(c.label, c.price, c.clinic);
          this.addType(this.type);
        }
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.examinationTypes);
    return this.examinationTypes;
  }

  public addType(t: ExaminationType) {
    if (this.getType(t.label) === null) {
      this.examinationTypes.push(t);
    }
  }

  public getType(name: string) {
    if ( this.examinationTypes.length === 0) {
      return null;
    }
    for (const u of this.examinationTypes) {
      if ( u.label === name) {
        return u;
      }
    }

    return null;
  }
}

