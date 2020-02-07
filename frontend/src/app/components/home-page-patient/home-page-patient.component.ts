import { Component, OnInit } from '@angular/core';
import {MedicalRecordService} from '../../services/medical-record.service';
import {ExaminationService} from '../../services/examination.service';
import {User} from '../../model/user';
import {Examination} from '../../model/examination';
import {UserServiceService} from '../../services/user-service.service';

@Component({
  selector: 'app-home-page-patient',
  templateUrl: './home-page-patient.component.html',
  styleUrls: ['./home-page-patient.component.css']
})
export class HomePagePatientComponent implements OnInit {

  user = this.userService.getLoggedUser();
  tmp: Array<Examination>;
  constructor(private examinationService: ExaminationService, private userService: UserServiceService) {
    this.tmp = examinationService.getMHforP(this.user.email);
    this.examinationService.setMHFP(this.tmp);
  }

  ngOnInit() {
  }

}
