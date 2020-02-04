import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Doctor} from '../../model/doctor';

@Component({
  selector: 'app-doctor-search-dialog',
  templateUrl: './doctor-search-dialog.component.html',
  styleUrls: ['./doctor-search-dialog.component.css']
})
export class DoctorSearchDialogComponent implements OnInit {

  SearchDoctorGroup: FormGroup;
  doctors: Array<Doctor> = new Array<Doctor>();
  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<DoctorSearchDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit() {
    this.SearchDoctorGroup = this.formBuilder.group({
      name: new FormControl(''),
      surname: new FormControl(''),
      rating: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1),
        Validators.pattern('[0-5]*')]),
    });
  }

  get f() {
    return this.SearchDoctorGroup.controls;
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    if (this.SearchDoctorGroup.invalid) {
      return;
    }


    this.dialogRef.close(this.doctors);
  }

}
