import { Component, OnInit } from '@angular/core';
import {MedicalRecord} from '../../model/medicalRecord';
import {MedicalRecordService} from '../../services/medical-record.service';
import {UserServiceService} from '../../services/user-service.service';
import {User} from '../../model/user';

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
    this.mr = medicalRecordService.getMRFP();
    this.user = JSON.parse(this.loggedUser);
    this.setAll();
  }

  ngOnInit() {
    this.setAll();
  }

  setAll() {
        this.height = this.mr.height;
        this.weight = this.mr.weight;
        this.bloodType = this.mr.bloodType;
        this.allergies = this.mr.allergies;
        for (const r of this.mr.examinationReports) {
          this.reports = r.comment + '\n';
         }
      }

}
