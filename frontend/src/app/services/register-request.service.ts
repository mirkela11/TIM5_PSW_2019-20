import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import {Router} from '@angular/router';
import {RegisterRequest} from '../model/registerRequest';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterRequestService {

  url = environment.baseUrl + environment.ClinicalCentreAdministrator;
  registerReqeusts: BehaviorSubject<RegisterRequest[]> = new BehaviorSubject<RegisterRequest[]>([]);


  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  public getRegisterRequest(): Observable<RegisterRequest[]> {
    this.httpClient.get(this.url + '/all-requests-to-register').subscribe(
      (data: RegisterRequest[]) => {
        this.registerReqeusts.next(data);
      },
      (error: HttpErrorResponse) => {

      });

    return this.registerReqeusts.asObservable();
  }

  public reject(id: number, reason: string) {
    return this.httpClient.put(this.url + '/reject-request-to-register/' + id, reason);
  }

  public approve(registerRequest: RegisterRequest) {
    return this.httpClient.put(this.url + '/approve-request-to-register/' + registerRequest.id, registerRequest);
  }
}
