import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ExaminationType} from '../../model/examinationType';
import {MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource} from '@angular/material';
import {ExaminationsTypeService} from '../../services/examination-type.service';
import {Clinic} from '../../model/clinic';
import {ClinicService} from '../../services/clinic.service';
import DateTimeFormat = Intl.DateTimeFormat;
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

export class Result {
  clinics: Array<Clinic> = new Array<Clinic>();
  date: string;
}

@Component({
  selector: 'app-clinic-search-dialog',
  templateUrl: './clinic-search-dialog.component.html',
  styleUrls: ['./clinic-search-dialog.component.css']
})
export class ClinicSearchDialogComponent implements OnInit {

  SearchClinicsGroup: FormGroup;
  clinics: Array<Clinic> = new Array<Clinic>();
  types: Array<ExaminationType> = new Array<ExaminationType>();
  result: Result

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
    const a = new Date(this.f.date.value);

    const date = a.toLocaleDateString();


    this.clinics = this.clinicService.getClinicsWithType(this.f.type.value);

    this.result = new Result();
    this.result.clinics = this.clinics;
    this.result.date = date;

    this.dialogRef.close(this.result);
  }

  close() {
    this.dialogRef.close();
  }


}
