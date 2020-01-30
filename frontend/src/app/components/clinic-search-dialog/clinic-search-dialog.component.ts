import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ExaminationType} from '../../model/examinationType';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ExaminationsTypeService} from '../../services/examination-type.service';


@Component({
  selector: 'app-clinic-search-dialog',
  templateUrl: './clinic-search-dialog.component.html',
  styleUrls: ['./clinic-search-dialog.component.css']
})
export class ClinicSearchDialogComponent implements OnInit {

  SearchClinicsGroup: FormGroup;
  types: Array<ExaminationType> = new Array<ExaminationType>();
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Subota i nedelja se ne radi.
    return day !== 0 && day !== 6;
  }

  constructor(private formBuilder: FormBuilder, private examinationTypeService: ExaminationsTypeService , private dialogRef: MatDialogRef<ClinicSearchDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    this.types = examinationTypeService.getAllTypes();
  }

  ngOnInit() {
    this.SearchClinicsGroup = this.formBuilder.group({
      date: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
    });
  }
  get f() {
    return this.SearchClinicsGroup.controls;
  }

  save() {
    this.dialogRef.close(this.SearchClinicsGroup.value);
  }

  close() {
    this.dialogRef.close();
  }

}
