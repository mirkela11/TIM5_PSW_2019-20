import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ExaminationType} from '../../model/examinationType';
import {MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource} from '@angular/material';
import {ExaminationsTypeService} from '../../services/examination-type.service';
import {Clinic} from '../../model/clinic';
import {HttpClient} from '@angular/common/http';
import {ClinicService} from '../../services/clinic.service';
import {DoctorListPatientComponent} from '../doctor-list-patient/doctor-list-patient.component';
import {ClinicsListComponent} from '../clinics-list-patient/clinics-list.component';


@Component({
  selector: 'app-clinic-search-dialog',
  templateUrl: './clinic-search-dialog.component.html',
  styleUrls: ['./clinic-search-dialog.component.css']
})
export class ClinicSearchDialogComponent implements OnInit {

  SearchClinicsGroup: FormGroup;
  clinics: Array<Clinic> = new Array<Clinic>();
  types: Array<ExaminationType> = new Array<ExaminationType>();
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Subota i nedelja se ne radi.
    return day !== 0 && day !== 6;
  }

  constructor(private clinicService: ClinicService,
              private formBuilder: FormBuilder,
              private examinationTypeService: ExaminationsTypeService,
              private dialogRef: MatDialogRef<ClinicSearchDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    this.types = examinationTypeService.getAllTypes();
  }

  ngOnInit() {
    this.SearchClinicsGroup = this.formBuilder.group({
      date: new FormControl(''),
      type: new FormControl(''),
    });
  }
  get f() {
    return this.SearchClinicsGroup.controls;
  }

  save() {
    if (this.SearchClinicsGroup.invalid) {
      return;
    }

    console.log(this.f.type.value);

    this.clinics = this.clinicService.getClinicsWithType(this.f.type.value);

    this.dialogRef.close(this.clinics);
  }

  close() {
    this.dialogRef.close();
  }


}
