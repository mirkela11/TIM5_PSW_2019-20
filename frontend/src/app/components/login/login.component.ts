import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {PatientService} from '../../services/patient.service';


export class Patient {
  constructor(
    public email: string,
    public password: string
  ) { }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  private loading: false;
  private error: string;
  private success: string;
  private loginForm: FormGroup;
  private submitted = false;
  private patient: Patient;

  constructor(
    private patientService: PatientService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  private onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value));
    this.patient = new Patient(
      this.f.email.value,
      this.f.password.value
    );

    this.attemptPatientLogin();
  }

  public attemptPatientLogin() {
    this.patientService.loginPatient(this.patient).subscribe(
      data => {
        if (data !== null) {
          console.log('Successful logged in');
        } else {
          console.log('Login error');
        }
      },
      error => {
        console.log('Request errror');
      }
    );
  }

}
