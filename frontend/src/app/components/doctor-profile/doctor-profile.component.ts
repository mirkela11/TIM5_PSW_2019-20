import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Doctor} from '../../model/doctor';
import {User} from '../../model/user';
import {Router} from '@angular/router';
import {UserServiceService} from '../../services/user-service.service';
import {DoctorService} from '../../services/doctor.service';
import {Role} from '../../model/role';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  doctorProfileForm: FormGroup;
  submitted = false;
  doctor: Doctor;
  selectedDoctor: Doctor;
  user: User;

  constructor(private formBuilder: FormBuilder, private router: Router, private doctorService: DoctorService,
              private  userService: UserServiceService) {
    this.user = JSON.parse(userService.isLoggedIn());
    console.log(this.user);
    this.selectedDoctor = doctorService.getDoctor(this.user.email);
  }

  ngOnInit() {
    this.doctorProfileForm = this.formBuilder.group({
      email: new FormControl(this.selectedDoctor.email, [Validators.required, Validators.email]),
      password: new FormControl(this.selectedDoctor.password, [Validators.required, Validators.minLength(8),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
      name: new FormControl(this.selectedDoctor.name, [Validators.required]),
      surname: new FormControl(this.selectedDoctor.surname, [Validators.required]),
      number: new FormControl(this.selectedDoctor.phone, [Validators.required, Validators.minLength(9)]),
      workHoursFrom: new FormControl(this.selectedDoctor.workHoursFrom, [Validators.required, Validators.minLength(2),
        Validators.maxLength(2)]),
      workHoursTo: new FormControl(this.selectedDoctor.workHoursTo, [Validators.required, Validators.minLength(2),
        Validators.maxLength(2)]),
    });
  }

  get f() {
    return this.doctorProfileForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.doctorProfileForm.invalid) {
      return;
    }

    this.doctor = new Doctor(
      this.f.email.value,
      this.f.password.value,
      this.f.name.value,
      this.f.surname.value,
      this.f.number.value,
      this.f.workHoursFrom.value,
      this.f.workHoursTo.value,
    );
    this.user = new User(this.f.email.value, this.f.password.value, Role.DOCTOR);

    this.editDoctor();
  }

  private editDoctor() {
    this.doctorService.editDoctor(this.doctor).subscribe(
      data => {
        this.userService.setUser(this.user);
        this.doctorService.setDoctor(this.doctor);
        this.router.navigate(['/doctor/home']);
        console.log('uspesno');
      },
      error => {
        alert('Error edit doctor');
        console.log(error);
      }
    );
  }
}
