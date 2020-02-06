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
  displayedColumns: string[] = ['startTime', 'endTime', 'patientName', 'patientSurname', 'Edit' ];
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
    this.condition = this.medicalService.getLocalDateAndTime(element.interval.startTime, element.interval.endTime)
    this.patientService.setPatient1(element.patient);
    const medicalRecordForDialog = this.medicalRecServis.getMedicalRecordForPatient(element.patient.email);
    console.log('ovde smo');
    console.log(medicalRecordForDialog);
    this.medicalService.setMedicalRecordForDialog(medicalRecordForDialog);
   // for (Element e: tmp) {
      // this.tmp1 = this.doctorService.getDoctorsTermins(this.tmp, d.email);
      // console.log(this.tmp1);
   // }
    if(this.condition === true) {
      setTimeout(() => {
        const dialog = this.medReqDialog.open(MedicalRecordDialogComponent);
      }, 2000);
    }
  }
}
