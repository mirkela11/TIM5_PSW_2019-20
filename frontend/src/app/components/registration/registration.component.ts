import {Component, OnInit} from '@angular/core';
import {Patient} from '../../model/patient';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PatientService} from '../../services/patient.service';
import {PatientStatus} from '../../model/patientStatus';
import {User} from '../../model/user';
import {Role} from '../../model/role';
import {UserServiceService} from '../../services/user-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  patient: Patient;
  user: User;

  constructor(
    private patientService: PatientService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserServiceService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required, Validators.minLength(9)]),
      insuranceID: new FormControl('', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]),
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
      this.f.name.value,
      this.f.surname.value,
      this.f.number.value,
      this.f.address.value,
      this.f.city.value,
      this.f.country.value,
      this.f.insuranceID.value,
      PatientStatus.AWAITING_APPROVAL
    );

    this.user = new User(this.f.emal.value, this.f.password.value, Role.PATIENT);

    this.createPatient();
  }

  private createPatient() {
    this.patientService.newPatient(this.patient).subscribe(
      data => {
        this.userService.addUser(this.user);
        this.patientService.addPatient(this.patient);
        this.router.navigate(['/login']);
      },
      error => {
        alert('Error registration patient');
        console.log(error);
      }
    );
  }

}
