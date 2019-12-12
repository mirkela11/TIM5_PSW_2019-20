import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AdminClinic} from "../../model/adminClinic";
import {User} from "../../model/user";
import {Router} from "@angular/router";
import {UserServiceService} from "../../services/user-service.service";
import {Role} from "../../model/role";
import {AdminClinicService} from "../../services/admin-clinic.service";

@Component({
  selector: 'app-admin-clinic-profile',
  templateUrl: './admin-clinic-profile.component.html',
  styleUrls: ['./admin-clinic-profile.component.css']
})
export class AdminClinicProfileComponent implements OnInit {

  adminClinicProfileForm: FormGroup;
  submitted = false;
  adminClinic: AdminClinic;
  selectedAdminClinic: AdminClinic;
  user: User;

  constructor(private formBuilder: FormBuilder, private router: Router, private adminClinicService: AdminClinicService,
              private  userService: UserServiceService) {
    this.user = JSON.parse(userService.isLoggedIn());
    console.log(this.user);
    this.selectedAdminClinic = adminClinicService.getAdminClinic(this.user.email);
  }

  ngOnInit() {
    this.adminClinicProfileForm = this.formBuilder.group({
      email: new FormControl(this.selectedAdminClinic.email, [Validators.required, Validators.email]),
      password: new FormControl(this.selectedAdminClinic.password, [Validators.required, Validators.minLength(8),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
      name: new FormControl(this.selectedAdminClinic.name, [Validators.required]),
      surname: new FormControl(this.selectedAdminClinic.surname, [Validators.required]),
      number: new FormControl(this.selectedAdminClinic.number, [Validators.required, Validators.minLength(9)]),
    });
  }

  get f() {
    return this.adminClinicProfileForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.adminClinicProfileForm.invalid) {
      return;
    }

    this.adminClinic = new AdminClinic(
      this.f.email.value,
      this.f.password.value,
      this.f.name.value,
      this.f.surname.value,
      this.f.number.value
    );
    this.user = new User(this.f.email.value, this.f.password.value, Role.CLINIC_ADMINISTRATOR);

    this.editAdminClinic();
  }

  private editAdminClinic(){
    this.adminClinicService.editAdminClinic(this.adminClinic).subscribe(
      data => {
        this.userService.setUser(this.user);
        this.adminClinicService.setAdminClinic(this.adminClinic);
        this.router.navigate(['/admin_clinic/home']);
      },
      error => {
        alert('Error edit doctor');
        console.log(error);
      }
    );
  }

}
