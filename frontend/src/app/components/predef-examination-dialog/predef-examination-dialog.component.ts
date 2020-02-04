import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MatTableDataSource} from '@angular/material';
import {Examination} from '../../model/examination';
import {DoctorService} from '../../services/doctor.service';
import {ExaminationService} from '../../services/examination.service';
import {UserServiceService} from '../../services/user-service.service';


@Component({
  selector: 'app-predef-examination-dialog',
  templateUrl: './predef-examination-dialog.component.html',
  styleUrls: ['./predef-examination-dialog.component.css']
})
export class PredefExaminationDialogComponent implements OnInit {

  ExaminationDataSource: MatTableDataSource<Examination>;
  displayedColumns: string[] = ['StartDate', 'EndDate', 'DoctorName', 'DoctorSurname', 'Type', 'Price', 'Discount', 'Make'];
  examinations: Array<Examination> = new Array<Examination>();

  constructor(private examinationService: ExaminationService,
              private userService: UserServiceService,
              private dialogRef: MatDialogRef<PredefExaminationDialogComponent>) {
    this.examinations = examinationService.getAllPredefExaminations();
    console.log(this.examinations);
    this.ExaminationDataSource = new MatTableDataSource(this.examinations);
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  make(examination) {
    const id = examination.id.toLocaleString();
    const user = this.userService.getLoggedUser();
    console.log('ISPOD');
    console.log(id);
    console.log(user.email);
    this.examinationService.makePredefExamination(id, user.email).subscribe(data => {
      this.examinations = this.examinationService.getAllPredefExaminations();
      this.ExaminationDataSource = new MatTableDataSource(this.examinations);
    }, error => {
        console.log(error);
    });
    this.dialogRef.close();
  }
}
