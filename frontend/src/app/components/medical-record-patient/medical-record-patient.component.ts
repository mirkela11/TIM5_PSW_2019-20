import { Component, OnInit } from '@angular/core';
import {MedicalRecord} from '../../model/medicalRecord';
import {MedicalRecordService} from '../../services/medical-record.service';
import {UserServiceService} from "../../services/user-service.service";
import {User} from "../../model/user";

@Component({
  selector: 'app-medical-record-patient',
  templateUrl: './medical-record-patient.component.html',
  styleUrls: ['./medical-record-patient.component.css']
})
export class MedicalRecordPatientComponent implements OnInit {

  height = 0;
  weight = 0;
  bloodType = '';
  allergies = '';
  reports = '';
  records: Array<MedicalRecord> = new Array<MedicalRecord>();
  loggedUser: string = this.userService.isLoggedIn();
  user: User;
  mr: MedicalRecord;
  constructor(private medicalRecordService: MedicalRecordService, private userService: UserServiceService) {
    this.records = medicalRecordService.getAllMedicalRecords();
    this.user = JSON.parse(this.loggedUser);
    this.setAll();
  }

  ngOnInit() {
    this.records = this.medicalRecordService.getAllMedicalRecords();
    this.setAll();
  }

  setAll() {
    for (const c of this.records) {
      if (c.patient.email === this.user.email) {
        this.mr = c;
        this.height = this.mr.height;
        this.weight = this.mr.weight;
        this.bloodType = this.mr.bloodType;
        this.allergies = this.mr.allergies;
        // Ovde da se otkomentarise kad se doda reports iz baza u klasu medicalRecord
        // for (const r of this.mr.reports) {
        // this.reports = r.comment + ' ';
        // }
      }
    }
  }

}
