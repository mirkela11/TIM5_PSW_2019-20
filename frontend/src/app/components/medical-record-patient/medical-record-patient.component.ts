import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-record-patient',
  templateUrl: './medical-record-patient.component.html',
  styleUrls: ['./medical-record-patient.component.css']
})
export class MedicalRecordPatientComponent implements OnInit {

  height = 180;
  weight = 80;
  bloodType = 'AB+';
  allergies = 'Alergrija na med';
  reports = 'asd';
  constructor() { }

  ngOnInit() {
  }

}
