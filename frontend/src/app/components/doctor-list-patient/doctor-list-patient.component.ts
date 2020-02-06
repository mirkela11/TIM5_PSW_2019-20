import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MatTableDataSource} from '@angular/material';
import {Doctor} from '../../model/doctor';
import {DoctorService} from '../../services/doctor.service';
import {DoctorSearchDialogComponent} from '../doctor-search-dialog/doctor-search-dialog.component';
import {PatientMakeExaminationComponent} from '../patient-make-examination/patient-make-examination.component';

export class DataTable {
  termin: string;
  doctor: Doctor;
  constructor() {}
}

@Component({
  selector: 'app-doctor-list-patient',
  templateUrl: './doctor-list-patient.component.html',
  styleUrls: ['./doctor-list-patient.component.css']
})
export class DoctorListPatientComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Surname', 'DoctorRating', 'Price', 'Make'];
  doctorDataSource: MatTableDataSource<Doctor>;
  doctors: Array<Doctor>;
  date: string;
  termins: Array<string[]> = new Array<string[]>();
  @Input() doctorSearchDialog: DoctorSearchDialogComponent;
  constructor(private doctorService: DoctorService,
              public searchDialog: MatDialog,
              public dialog: MatDialog,
              private dialogRef: MatDialogRef<DoctorSearchDialogComponent>) {
    this.doctors = doctorService.getDoctorss();
    this.termins = doctorService.getExaminationsInterval();
    this.doctorDataSource = new MatTableDataSource(this.doctors);
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.doctorDataSource.filter = filterValue.trim().toLowerCase();

    if (this.doctorDataSource.paginator) {
      this.doctorDataSource.paginator.firstPage();
    }
  }

  searchDoctors() {
    const dialog = this.searchDialog.open(DoctorSearchDialogComponent);
    dialog.afterClosed().subscribe(data => {
        if (data !== undefined) {
          this.doctors = data;
          this.doctorDataSource = new MatTableDataSource(data);
        }
      }
    );
  }

  close() {
    this.dialogRef.close();
  }

  make(element) {
    this.doctorService.setDoctorForMake(element);
    setTimeout(() => {const dialog = this.searchDialog.open(PatientMakeExaminationComponent); dialog.afterClosed().subscribe(data => {
      this.dialogRef.close();
    }); }, 200);

    // const dialog = this.searchDialog.open(PatientMakeExaminationComponent);
  }
}





