import { Component, OnInit, Injectable} from '@angular/core';
import { Patient} from '../../model/patient';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {PatientService} from '../../services/patient.service';
import {PatientStatus} from '../../model/patientStatus';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  patient: Patient;

  constructor(
    private patientService: PatientService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(9)]),
      healthInsuranceID: new FormControl('', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]),
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.patient = new Patient(
      this.f.email.value,
      this.f.password.value,
      this.f.firstName.value,
      this.f.lastName.value,
      this.f.phoneNumber.value,
      this.f.address.value,
      this.f.city.value,
      this.f.country.value,
      this.f.healthInsuranceID.value,
      PatientStatus.AWAITING_APPROVAL
    );

    this.createPatient();
  }

  private createPatient() {
    this.patientService.newPatient(this.patient).subscribe(
      data => {
        this.router.navigate(['/patient/pending-approval']);
      }
    );
  }

}
