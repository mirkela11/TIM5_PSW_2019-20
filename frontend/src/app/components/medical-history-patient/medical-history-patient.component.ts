import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material";
import {Examination} from "../../model/examination";
import {Patient} from "../../model/patient";

@Component({
  selector: 'app-medical-history-patient',
  templateUrl: './medical-history-patient.component.html',
  styleUrls: ['./medical-history-patient.component.css']
})
export class MedicalHistoryPatientComponent implements OnInit {

  displayedColumns: string[] = ['kind', 'clinic', 'doctor'];
  medicalDataSource = new MatTableDataSource<Patient>();
  constructor() { }

  ngOnInit() {
  }

}
