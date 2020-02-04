import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {Zahtev} from '../../model/Zahtev';
import {VacationService} from '../../services/vacation.service';
import {ZahtevStatus} from '../../model/ZahtevStatus';

@Component({
  selector: 'app-nurse-vacation-request',
  templateUrl: './nurse-vacation-request.component.html',
  styleUrls: ['./nurse-vacation-request.component.css']
})
export class NurseVacationRequestComponent implements OnInit {

  vacationRequestForm: FormGroup;
  submitted = false;
  zahtev: Zahtev;

  constructor(public dialog: MatDialog,
              private formBuilder: FormBuilder,
              private router: Router,
              private vacationService: VacationService,
              ) {}


  ngOnInit() {
    this.vacationRequestForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      startingDate: new FormControl('', [Validators.required]),
      finishDate: new FormControl('', [Validators.required]),

    });

  }


  get f() {
    return this.vacationRequestForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.vacationRequestForm.invalid) {
      return;
    }

    this.zahtev = new Zahtev(
      this.f.email.value,
      this.f.name.value,
      this.f.surname.value,
      this.f.startingDate.value,
      this.f.finishDate.value,
      ZahtevStatus.AWAITING_APPROVAL
    );

    // tslint:disable-next-line:max-line-length
    this.zahtev = new Zahtev(this.f.email.value, this.f.name.value, this.f.surname.value, this.f.startingDate.value, this.f.finishDate.value, ZahtevStatus.AWAITING_APPROVAL);

    this.createVacation();

  }

  private createVacation() {
    console.log('ovde sam');

    this.vacationService.newVacation(this.zahtev).subscribe(
      data => {
        console.log('unutra sam');

        this.vacationService.addVacation(this.zahtev);
        this.router.navigate(['/nurse/home']);
      },
      error => {
        console.log(error);
        console.log('greska');
      }
    );
  }

}
