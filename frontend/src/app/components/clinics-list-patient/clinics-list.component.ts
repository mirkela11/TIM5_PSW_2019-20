import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {Clinic} from '../../model/clinic';
import {ClinicService} from '../../services/clinic.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Doctor} from '../../model/doctor';
import {DoctorService} from '../../services/doctor.service';
import {ClinicSearchDialogComponent} from '../clinic-search-dialog/clinic-search-dialog.component';
import {DoctorListPatientComponent} from '../doctor-list-patient/doctor-list-patient.component';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-clinics-list',
  templateUrl: './clinics-list.component.html',
  styleUrls: ['./clinics-list.component.css'],
})
export class ClinicsListComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Address', 'Doctors'];
  clinic: Clinic;
  @Input() doctorListComponent: DoctorListPatientComponent;
  doctor: Doctor;
  // displayedColumnsDoctor: string[] = ['name', 'surname', 'scheduling'];
  // doctordataSource = new MatTableDataSource<Doctor>();
  dataSource = new MatTableDataSource<Clinic>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  // doctors: Array<Doctor> = new Array<Doctor>();
  clinics: Array<Clinic> = new Array<Clinic>();
  constructor(
    private clinicService: ClinicService,
    private doctorService: DoctorService,
    public dialog: MatDialog,
    public doctorsDialog: MatDialog,
  ) {
    // this.doctors = this.doctorService.getAllDoctors();
    this.clinics = this.clinicService.getAllClinics();
    this.all();
  }

  ngOnInit() {
    this.all();
    this.dataSource.paginator = this.paginator;

  }

  all() {
      this.dataSource = new MatTableDataSource(this.clinicService.getAllClinics());
      // this.doctordataSource = new MatTableDataSource<Doctor>(this.doctorService.getAllDoctors());
  }

  openDialog() {
    this.dialog.open(ClinicSearchDialogComponent);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  doctorList(element: Clinic) {
    this.doctorService.setDoctorss(element.doctors);
    const dialog = this.doctorsDialog.open(DoctorListPatientComponent);
    dialog.afterClosed().pipe().subscribe(data => {
      this.clinics = data;
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    });

  }

}
