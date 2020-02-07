import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../services/patient.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-activated-account-patient',
  templateUrl: './activated-account-patient.component.html',
  styleUrls: ['./activated-account-patient.component.css']
})
export class ActivatedAccountPatientComponent implements OnInit {

  success = false;

  constructor(private patientService: PatientService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      const param = params.get('id');
      this.activatePatient(+param);
    });
  }
  activatePatient(id: number) {
    this.patientService.activatePatient(id).subscribe(() => {
        this.success = true;
      },
      () => {
        alert('Your account is already activated');
        this.router.navigate(['']);
      });
  }


}
