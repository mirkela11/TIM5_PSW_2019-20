import { Injectable } from '@angular/core';
import {Nurse} from '../model/nurse';
import {HttpClient} from '@angular/common/http';
import {UserServiceService} from './user-service.service';
import {environment} from '../../environments/environment';
import {Medicaments} from '../model/Medicaments';

@Injectable({
  providedIn: 'root'
})
export class MedicamentsService {

  url = environment.baseUrl + environment.medicaments
  listMedicaments: Array<Medicaments> = new Array<Medicaments>();
  medicaments: Medicaments;

  constructor(
    private http: HttpClient) {

    this.getAllMedicaments();
  }

  public editMedicament(medicament) {
    return this.http.post(this.url + '/edit', medicament, {responseType: 'text'});
  }

  public newMedicament(medicament) {
    return this.http.post(this.url + '/clinical-centre-admin/addMedicament', medicament);
  }


  public getMedicament(id: number) {
    if ( this.listMedicaments.length === 0) {
      return null;
    }
    for (const u of this.listMedicaments) {
      if ( u.id === id) {
        return u;
      }
    }

    return null;
  }

  public setMedicament(p: Medicaments) {

    for (const p1 of this.listMedicaments) {
      if (p1.id === p.id) {
        p1.title = p.title;
        p1.description = p.description;
        p1.strenght = p.strenght;
        return;
      }
    }
  }

  public addMedicament(n: Medicaments) {
    if (this.getMedicament(n.id) === null) {
      this.listMedicaments.push(n);
    }
  }

  public getAllMedicaments(): Array<Medicaments> {
    this.http.get(this.url + '/getAllMedicaments').subscribe((data: Medicaments[]) => {
        for (const c of data) {
          this.medicaments = new Medicaments(c.id, c.title, c.description, c.strenght);
          this.addMedicament(this.medicaments);
        }
      },
      error => {
        console.log(error);
      }
    );

    return this.listMedicaments;
  }

}
