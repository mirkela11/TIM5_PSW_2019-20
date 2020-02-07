import {Component, Inject, OnInit} from '@angular/core';
import {Patient} from '../../model/patient';
import {PatientService} from '../../services/patient.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {forEachComment} from 'tslint';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MedicalRecord} from '../../model/medicalRecord';
import {MedicalRecordService} from '../../services/medical-record.service';
import {Nurse} from '../../model/nurse';
import {Router} from '@angular/router';

@Component({
  selector: 'app-medical-record-dialog',
  templateUrl: './medical-record-dialog.component.html',
  styleUrls: ['./medical-record-dialog.component.css']
})
export class MedicalRecordDialogComponent implements OnInit {
  medicalRecord: MedicalRecord;
  submitted = false;
  records: Array<MedicalRecord>;
  record: Patient;
  medicalRecordForm: FormGroup;


  constructor(private formBuilder: FormBuilder,
              private patientService: PatientService,
              private dialogRef: MatDialogRef<MedicalRecordDialogComponent>,
              private medicalService: MedicalRecordService,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) data) {

    this.records = medicalService.getAllMedicalRecords();
    this.record = patientService.getPatient1();
    this.setAll();
    this.medicalRecord = medicalService.getMedicalRecordForDialog();
    console.log('blabla');
    console.log(this.medicalRecord);
  }

  ngOnInit() {
    // this.setAll();
    this.medicalRecordForm = this.formBuilder.group({
      height: new FormControl(this.medicalRecord.height),
      weight: new FormControl(this.medicalRecord.weight),
      bloodType: new FormControl(this.medicalRecord.bloodType),
      allergies: new FormControl(this.medicalRecord.allergies),
      reports: new FormControl(this.medicalRecord.examinationReports)
    });
  }

  get f() {
    return this.medicalRecordForm.controls;
  }
  close() {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.medicalRecordForm.invalid) {
      return;
    }
  //  this.medicalRecord.set(this.f.height.value, this.f.weight.value, this.f.bloodType.value, this.f.allergies.value)
    this.medicalRecord.height = this.f.height.value;
    this.medicalRecord.weight = this.f.weight.value;
    this.medicalRecord.bloodType = this.f.bloodType.value;
    this.medicalRecord.allergies = this.f.allergies.value;
    this.medicalRecord.examinationReports = this.f.reports.value;
    console.log(this.medicalRecord);

    this.editMedicalRecord();
    this.dialogRef.close(this.medicalRecord);
  }

  private editMedicalRecord() {
    this.medicalService.editMedicalRecord(this.medicalRecord).subscribe(
      data => {
        this.medicalService.setMedicalRecord(this.medicalRecord);
        this.router.navigate(['/doctor/MedicalRecord']);
      },
      error => {
        alert('Error edit Medical record');
        console.log(error);
      }
    );
  }

  setAll() {
    for (const c of this.records) {
      if (c.patient.email === this.record.email) {
        this.medicalRecord = c;
        // Ovde da se otkomentarise kad se doda reports iz baza u klasu medicalRecord
        // for (const r of this.mr.reports) {
        // this.reports = r.comment + ' ';
        // }
      }
    }
  }


}
