import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Examination} from '../../model/examination';
import {PatientService} from '../../services/patient.service';
import {ExaminationService} from '../../services/examination.service';
import {User} from '../../model/user';
import {UserServiceService} from '../../services/user-service.service';
import {ExaminationStatus} from '../../model/examinationStatus';
import {RateDoctorAndClinicPatientComponent} from '../rate-doctor-and-clinic-patient/rate-doctor-and-clinic-patient.component';
import {async} from 'q';

@Component({
  selector: 'app-medical-history-patient',
  templateUrl: './medical-history-patient.component.html',
  styleUrls: ['./medical-history-patient.component.css']
})
export class MedicalHistoryPatientComponent implements OnInit {

  displayedColumns: string[] = ['Kind', 'Clinic', 'Doctor', 'StartTime', 'EndTime', 'Rate'];
  medicalDataSource = new MatTableDataSource<Examination>();
  examinations: Array<Examination> = this.examinationService.getAllExaminations();
  tmp: Array<Examination> = new Array<Examination>();
  loggedUser: string = this.userService.isLoggedIn();
  user: User;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  tmpStr = this.loggedUser.split(',');
  tmpStr1 = this.tmpStr[0].split(':');
  flag: boolean;
  constructor(private patientService: PatientService, private examinationService: ExaminationService,
              private userService: UserServiceService,
              public dialog: MatDialog) {
    this.user = JSON.parse(this.loggedUser);
    this.flag = false;
  }

  ngOnInit() {
    this.all();
  }

  all() {
    // Ovako ostavljeno posto ovako jedino radi tabela.
    for (const c of this.examinations) {
      if (c.status !== ExaminationStatus.PREDEF_AVAILABLE) {
        if (c.patient.email === this.user.email) {
          this.tmp.push(c);
        }
      }
    }
    this.medicalDataSource = new MatTableDataSource(this.tmp);
  }

  async rate(examination) {

    this.flag = await this.examinationService.getFlagForRate(examination.id.toString());
    console.log('FLAG ISPOD');
    console.log(this.flag);
    this.openDialog(this.flag);

  }

  openDialog(flag) {
    if (flag === true) {
      const d = this.dialog.open(RateDoctorAndClinicPatientComponent);
    }
  }

}
