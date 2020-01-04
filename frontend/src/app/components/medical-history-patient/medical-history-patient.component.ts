import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Examination} from '../../model/examination';
import {Patient} from '../../model/patient';
import {Router} from '@angular/router';
import {PatientService} from '../../services/patient.service';
import {ExaminationService} from '../../services/examination.service';

@Component({
  selector: 'app-medical-history-patient',
  templateUrl: './medical-history-patient.component.html',
  styleUrls: ['./medical-history-patient.component.css']
})
export class MedicalHistoryPatientComponent implements OnInit {

  displayedColumns: string[] = ['kind', 'clinic', 'doctor'];
  medicalDataSource = new MatTableDataSource<Examination>();
  constructor(private patientService: PatientService, private examinationService: ExaminationService) {
    this.all();
  }

  ngOnInit() {
    this.all();
  }

  all() {
    this.medicalDataSource = new MatTableDataSource(this.examinationService.getAllExaminations());
  }

}
