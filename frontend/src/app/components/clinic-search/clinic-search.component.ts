import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Clinic} from '../../model/clinic';
import {ExaminationType} from '../../model/examinationType';
import {ExaminationTypeService} from '../../services/examination-type.service';

@Component({
  selector: 'app-clinic-search',
  templateUrl: './clinic-search.component.html',
  styleUrls: ['./clinic-search.component.css']
})
export class ClinicSearchComponent implements OnInit {
  SearchClinicsGroup: FormGroup;
  types: Array<ExaminationType> = new Array<ExaminationType>();
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Subota i nedelja se ne radi.
    return day !== 0 && day !== 6;
  }

  constructor(private formBuilder: FormBuilder, private examinationTypeService: ExaminationTypeService , private dialogRef: MatDialogRef<ClinicSearchComponent>,
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
