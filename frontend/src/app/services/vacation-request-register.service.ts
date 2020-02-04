import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {VacationRequestRegister} from '../model/VacationRequestRegister';

@Injectable({
  providedIn: 'root'
})
export class VacationRequestRegisterService {

  url = environment.baseUrl + environment.ClinicalCentreAdministrator;
  registerReqeusts: BehaviorSubject<VacationRequestRegister[]> = new BehaviorSubject<VacationRequestRegister[]>([]);


  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  public getRegisterRequest(): Observable<VacationRequestRegister[]> {
    this.httpClient.get(this.url + '/all-requests-to-register').subscribe(
      (data: VacationRequestRegister[]) => {
        this.registerReqeusts.next(data);
      },
      (error: HttpErrorResponse) => {

      });

    return this.registerReqeusts.asObservable();
  }

  public reject(id: number, reason: string) {
    return this.httpClient.put(this.url + '/reject-request-to-register/' + id, reason);
  }

  public approve(registerReqeusts: VacationRequestRegister) {
    return this.httpClient.put(this.url + '/approve-request-to-register/' + registerReqeusts.id, registerReqeusts);
  }
}
