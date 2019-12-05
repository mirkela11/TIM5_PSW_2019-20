import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Patient} from '../../model/patient';
import {Router} from '@angular/router';
import {PatientStatus} from '../../model/patientStatus';
import {PatientService} from '../../services/patient.service';
import {UserServiceService} from '../../services/user-service.service';
import {User} from '../../model/user';
import {Role} from '../../model/role';
import {__values} from 'tslib';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  patientProfileForm: FormGroup;
  submitted = false;
  patient: Patient;
  selectedPatient: Patient;
  user: User;

  constructor(private formBuilder: FormBuilder, private router: Router, private patientService: PatientService,
              private  userService: UserServiceService) {
    this.user = JSON.parse(userService.isLoggedIn());
    console.log(this.user);
    this.selectedPatient = patientService.getPatient(this.user.email);
  }

  ngOnInit() {
    this.patientProfileForm = this.formBuilder.group({
      email: new FormControl(this.selectedPatient.email, [Validators.required, Validators.email]),
      password: new FormControl(this.selectedPatient.password, [Validators.required, Validators.minLength(8),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
      name: new FormControl(this.selectedPatient.name, [Validators.required]),
      surname: new FormControl(this.selectedPatient.surname, [Validators.required]),
      address: new FormControl(this.selectedPatient.address, [Validators.required]),
      city: new FormControl(this.selectedPatient.city, [Validators.required]),
      country: new FormControl(this.selectedPatient.country, [Validators.required]),
      number: new FormControl(this.selectedPatient.number, [Validators.required, Validators.minLength(9)]),
      insuranceID: new FormControl(this.selectedPatient.insuranceID, [Validators.required, Validators.minLength(13),
         Validators.maxLength(13)]),
    });
  }

  get f() {
    return this.patientProfileForm.controls;
  }


  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.patientProfileForm.invalid) {
      return;
    }

    this.patient = new Patient(
      this.f.email.value,
      this.f.password.value,
      this.f.name.value,
      this.f.surname.value,
      this.f.number.value,
      this.f.address.value,
      this.f.city.value,
      this.f.country.value,
      this.f.insuranceID.value,
      PatientStatus.AWAITING_APPROVAL
    );

    this.user = new User(this.f.email.value, this.f.password.value, Role.PATIENT);

    this.editPatient();
  }

  private editPatient() {
    this.patientService.editPatient(this.patient).subscribe(
      data => {
        this.userService.setUser(this.user);
        this.patientService.setPatient(this.patient);
        this.router.navigate(['/patient/home']);
      },
      error => {
        alert('Error edit patient');
        console.log(error);
      }
    );
  }

}
