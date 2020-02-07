import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Examination} from '../../model/examination';
import {PatientService} from '../../services/patient.service';
import {ExaminationService} from '../../services/examination.service';
import {User} from '../../model/user';
import {UserServiceService} from '../../services/user-service.service';
import {ExaminationStatus} from '../../model/examinationStatus';

@Component({
  selector: 'app-medical-history-patient',
  templateUrl: './medical-history-patient.component.html',
  styleUrls: ['./medical-history-patient.component.css']
})
export class MedicalHistoryPatientComponent implements OnInit {

  displayedColumns: string[] = ['Kind', 'Clinic', 'Doctor', 'StartTime', 'EndTime'];
  medicalDataSource = new MatTableDataSource<Examination>();
  examinations: Array<Examination> = this.examinationService.getAllExaminations();
  tmp: Array<Examination> = new Array<Examination>();
  loggedUser: string = this.userService.isLoggedIn();
  user: User;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  tmpStr = this.loggedUser.split(',');
  tmpStr1 = this.tmpStr[0].split(':');
  constructor(private patientService: PatientService, private examinationService: ExaminationService,
              private userService: UserServiceService) {
    this.user = JSON.parse(this.loggedUser);
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

}
