import { Injectable } from '@angular/core';
import {Diagnose} from '../model/Diagnose';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DiagnoseService {

  url = environment.baseUrl + environment.diagnose;
  diagnose: Diagnose;
  diagnose1: Diagnose;
  listDiagnoses: Array<Diagnose> = new Array<Diagnose>();

  constructor(private http: HttpClient
  ) {

    this.getAllDiagnoses();
  }

  public editDiagnose(diagnose) {
    return this.http.post(this.url + '/edit', diagnose, {responseType: 'text'});
  }

  public getDiagnose(id: number) {
    if ( this.listDiagnoses.length === 0) {
      return null;
    }
    for (const u of this.listDiagnoses) {
      if ( u.id === id) {
        return u;
      }
    }

    return null;
  }

  public setDiagnose(d: Diagnose) {
    for (const diag of this.listDiagnoses) {
      if (diag.id === d.id) {
        diag.title = d.title;
        diag.description = d.description;
        return;
      }
    }
  }

  public addDiagnose(d: Diagnose) {
    if (this.getDiagnose(d.id) === null) {
      this.listDiagnoses.push(d);
    }
  }

  public newDiagnose(diagnose) {
    return this.http.post(this.url + '/clinical-centre-admin/addDiagnose', diagnose);
  }

  public getAllDiagnoses(): Array<Diagnose> {
    this.http.get(this.url + '/all').subscribe((data: Diagnose[]) => {
        for (const c of data) {
          this.diagnose1 = new Diagnose(c.id, c.title, c.description);
          this.addDiagnose(this.diagnose1);
          console.log(c);
          console.log('Ispod admin klinike');
          console.log(this.diagnose1);
        }
      },
      error => {
        console.log(error);
      }
    );

    return this.listDiagnoses;
  }

}
