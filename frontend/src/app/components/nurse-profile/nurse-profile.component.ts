import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Nurse} from '../../model/nurse';
import {User} from '../../model/user';
import {Router} from '@angular/router';
import {UserServiceService} from '../../services/user-service.service';
import {NurseService} from '../../services/nurse-service.service';
import {Role} from '../../model/role';

@Component({
  selector: 'app-nurse-profile',
  templateUrl: './nurse-profile.component.html',
  styleUrls: ['./nurse-profile.component.css']
})
export class NurseProfileComponent implements OnInit {

  nurseProfileForm: FormGroup;
  submitted = false;
  nurse: Nurse;
  selectedNurse: Nurse;
  user: User;

  constructor(private formBuilder: FormBuilder, private router: Router, private nurseService: NurseService,
              private  userService: UserServiceService) {
    this.user = JSON.parse(userService.isLoggedIn());
    console.log(this.user);
    this.selectedNurse = nurseService.getNurse(this.user.email);
  }

  ngOnInit() {

    this.nurseProfileForm = this.formBuilder.group({
      email: new FormControl(this.selectedNurse.email, [Validators.required, Validators.email]),
      password: new FormControl(this.selectedNurse.password, [Validators.required, Validators.minLength(8),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
      name: new FormControl(this.selectedNurse.name, [Validators.required]),
      surname: new FormControl(this.selectedNurse.surname, [Validators.required]),
      phone: new FormControl(this.selectedNurse.phone, [Validators.required]),
      workHoursFrom: new FormControl(this.selectedNurse.workHoursFrom, [Validators.required]),
      workHoursTo: new FormControl(this.selectedNurse.workHoursTo, [Validators.required]),
    });
  }

  get f() {
    return this.nurseProfileForm.controls;
  }


  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.nurseProfileForm.invalid) {
      return;
    }

    this.nurse = new Nurse(
      this.f.email.value,
      this.f.password.value,
      this.f.name.value,
      this.f.surname.value,
      this.f.phone.value,
      this.f.workHoursFrom.value,
      this.f.workHoursTo.value,
    );

    this.user = new User(this.f.email.value, this.f.password.value, Role.NURSE);

    this.editNurse();
  }

  private editNurse() {
    this.nurseService.editNurse(this.nurse).subscribe(
      data => {
        this.userService.setUser(this.user);
        this.nurseService.setNurse(this.nurse);
        this.router.navigate(['/nurse/home']);
      },
      error => {
        alert('Error edit nurse');
        console.log(error);
      }
    );
  }

}
