import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Doctor} from '../../model/doctor';
import {DoctorService} from '../../services/doctor.service';

@Component({
  selector: 'app-doctor-list-patient',
  templateUrl: './doctor-list-patient.component.html',
  styleUrls: ['./doctor-list-patient.component.css']
})
export class DoctorListPatientComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Surname', 'DoctorRating'];
  doctorDataSource: MatTableDataSource<Doctor>;
  doctors: Array<Doctor>;
  constructor(private doctorService: DoctorService) {
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
}



