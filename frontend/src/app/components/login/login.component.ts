import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PatientService} from '../../services/patient.service';
import {Router} from '@angular/router';
import {User} from '../../model/user';
import {UserServiceService} from '../../services/user-service.service';
import {Role} from '../../model/role';

export class Patient {
  constructor(
    public email: string,
    public password: string
  ) {}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  private submitted = false;
  private user: User;
  private patient: Patient;

  constructor(
    private patientService: PatientService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserServiceService,
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

    this.patient = new Patient(
      this.f.email.value,
      this.f.password.value
    );

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value));

    this.user = this.userService.getUser(this.f.email.value);

    this.attemptPatientLogin();
  }

  public attemptPatientLogin() {
    if (this.user.role === Role.PATIENT) {
      console.log(this.patient);
      this.patientService.loginPatient(this.patient).subscribe(
        data => {
          console.log(data);
          if (data !== null) {
            console.log('Successful logged in');
            this.router.navigate(['/patient/home']);
          } else {
            console.log('Login error');
          }
        },
        error => {
          console.log(error);
        }
      );
    }
  }

}
