import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminClinic} from '../../model/adminClinic';
import {Router} from '@angular/router';
import {AdminClinicService} from '../../services/admin-clinic.service';

@Component({
  selector: 'app-add-clinic-administrator',
  templateUrl: './add-clinic-administrator.component.html',
  styleUrls: ['./add-clinic-administrator.component.css']
})
export class AddClinicAdministratorComponent implements OnInit {

  addClinicAdministratorForm: FormGroup;
  submitted = false;
  adminClinic: AdminClinic;

  constructor(
    private formBuilder: FormBuilder,
    private adminClinicService: AdminClinicService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.addClinicAdministratorForm = this.formBuilder.group({

      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
      name: new FormControl( '', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required, Validators.minLength(9)]),
    });
  }

  get f() {
    return this.addClinicAdministratorForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.addClinicAdministratorForm.invalid) {
      return;
    }

    this.adminClinic = new AdminClinic(
      this.f.email.value,
      this.f.password.value,
      this.f.name.value,
      this.f.surname.value,
      this.f.number.value,
    );

    this.adminClinic = new AdminClinic(this.f.email.value, this.f.password.value, this.f.name.value,      this.f.surname.value, this.f.number.value);

    this.createClinicAdministrator();
  }

  private createClinicAdministrator() {
    this.adminClinicService.newAdminClinic(this.adminClinic).subscribe(
      data => {
        this.adminClinicService.addAdminClinic(this.adminClinic);
        this.router.navigate(['/clinical-centre-admin/home']);
      },
      error => {
        alert('Error registration patient');
        console.log(error);
      }
    );
  }

}
