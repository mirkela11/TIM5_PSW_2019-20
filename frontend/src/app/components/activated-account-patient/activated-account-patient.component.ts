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
   const id = this.activatedRoute.snapshot.params.id;
   this.activatePatient(id);
   console.log('Id je: ' + id);
  }
  activatePatient(id: number) {
    this.patientService.activatePatient(id).subscribe(data => {
        this.success = true;
      },
      error => {
        alert('Your account is already activated');
        console.log(error);
      });
  }


}
