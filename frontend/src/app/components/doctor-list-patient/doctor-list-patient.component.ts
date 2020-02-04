import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MatTableDataSource} from '@angular/material';
import {Doctor} from '../../model/doctor';
import {DoctorService} from '../../services/doctor.service';
import {DoctorSearchDialogComponent} from '../doctor-search-dialog/doctor-search-dialog.component';

@Component({
  selector: 'app-doctor-list-patient',
  templateUrl: './doctor-list-patient.component.html',
  styleUrls: ['./doctor-list-patient.component.css']
})
export class DoctorListPatientComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Surname', 'DoctorRating', 'Price'];
  doctorDataSource: MatTableDataSource<Doctor>;
  doctors: Array<Doctor>;
  @Input() doctorSearchDialog: DoctorSearchDialogComponent;
  constructor(private doctorService: DoctorService,
              public searchDialog: MatDialog,
              private dialogRef: MatDialogRef<DoctorSearchDialogComponent>) {
    this.doctors = doctorService.getDoctorss();
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
}



