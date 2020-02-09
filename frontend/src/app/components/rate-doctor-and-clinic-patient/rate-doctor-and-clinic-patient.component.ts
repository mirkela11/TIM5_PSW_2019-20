import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Examination} from '../../model/examination';
import {ExaminationService} from '../../services/examination.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-rate-doctor-and-clinic-patient',
  templateUrl: './rate-doctor-and-clinic-patient.component.html',
  styleUrls: ['./rate-doctor-and-clinic-patient.component.css']
})
export class RateDoctorAndClinicPatientComponent implements OnInit {

  RateFormGroup: FormGroup;
  doctorRate = '';
  clinicRate = '';
  examination: Examination;
  constructor(private formBuilder: FormBuilder,
              private examinationService: ExaminationService,
              private dialogRef: MatDialogRef<RateDoctorAndClinicPatientComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    this.examination = examinationService.getExaminationForRating();
  }

  ngOnInit() {
    this.RateFormGroup = this.formBuilder.group({
      doctorRating: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1),
        Validators.pattern('[0-5]*')]),
      clinicRating: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1),
        Validators.pattern('[0-5]*')])
    });
  }

  get f() {
    return this.RateFormGroup.controls;
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    if (this.RateFormGroup.invalid) {
      return;
    }

    this.doctorRate = this.f.doctorRating.value;
    this.clinicRate = this.f.clinicRating.value;

    console.log(this.doctorRate);
    console.log(this.clinicRate);
    this.examinationService.RateDoctorAndClinic(this.examination.id.toString(), this.doctorRate, this.clinicRate).subscribe(data => {
      this.dialogRef.close();
    }, error => {
        console.log(error);
    });

  }

}
