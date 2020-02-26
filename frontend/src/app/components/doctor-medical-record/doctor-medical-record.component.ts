import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {MedicalRecord} from '../../model/medicalRecord';
import {MedicalRecordService} from '../../services/medical-record.service';
import {Patient} from '../../model/patient';
import {PatientService} from '../../services/patient.service';
import {UserServiceService} from '../../services/user-service.service';
import {FormGroup} from '@angular/forms';
import {Clinic} from '../../model/clinic';
import {MedicalRecordPatientComponent} from '../medical-record-patient/medical-record-patient.component';
import {MedicalRecordDialogComponent} from '../medical-record-dialog/medical-record-dialog.component';
import {ExaminationService} from '../../services/examination.service';
import {Examination} from '../../model/examination';

@Component({
  selector: 'app-doctor-medical-record',
  templateUrl: './doctor-medical-record.component.html',
  styleUrls: ['./doctor-medical-record.component.css']
})
export class DoctorMedicalRecordComponent implements OnInit {

  patient: Patient;
  pat: Array<Examination>;
  displayedColumns: string[] = ['startTime', 'endTime', 'patientName', 'patientSurname', 'Edit'];
  DataSource: MatTableDataSource<Examination>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  expandedElement: Patient;
  condition: boolean;
  rec: Array<MedicalRecord> = new Array<MedicalRecord>();

  constructor(public dialog: MatDialog,
              public medReqDialog: MatDialog,
              private medicalRecServis: MedicalRecordService,
              private patientService: PatientService,
              private medicalService: MedicalRecordService,
              private examinationService: ExaminationService,
              private userService: UserServiceService) {

    this.rec = this.medicalRecServis.getAllMedicalRecords();
    const user = JSON.parse(userService.isLoggedIn());

    this.pat = this.examinationService.getExaminationsForDoctor(user.email);
    this.condition = false;
    console.log('Ispod1');
    console.log(this.pat);
    this.all();

  }

  ngOnInit() {
    this.all();
    this.DataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.DataSource.filter = filterValue.trim().toLowerCase();
  }

  all() {
    this.DataSource = new MatTableDataSource(this.pat);
  }

  edit(element: Examination) {
    setTimeout(() => {
      const medicalRecordForDialog = this.medicalRecServis.getMedicalRecordForPatient(element.patient.email);
      this.medicalService.setMedicalRecordForDialog(medicalRecordForDialog);
    }, 750);
    this.patientService.setPatient1(element.patient);
    this.condition = this.medicalService.getLocalDateAndTime(element.interval.startTime, element.interval.endTime);

  //  setTimeout(() => {
    if (this.condition === true) {
        console.log('u kondition sam');
        console.log(this.condition);
        const dialog = this.medReqDialog.open(MedicalRecordDialogComponent);
      }
 //   }, 200);

  }
}
