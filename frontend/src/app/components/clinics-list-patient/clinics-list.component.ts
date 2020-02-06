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
import {PredefExaminationDialogComponent} from '../predef-examination-dialog/predef-examination-dialog.component';
import {__await} from 'tslib';


@Component({
  selector: 'app-clinics-list',
  templateUrl: './clinics-list.component.html',
  styleUrls: ['./clinics-list.component.css'],
})
export class ClinicsListComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Address', 'ClinicRating', 'Price', 'Doctors'];
  clinic: Clinic;
  doctor: Doctor;
  condition: boolean;
  tmp: string;
  str: string;
  tmp1: Array<string> = new Array<string>();
  arr: Array<string[]> = new Array<string[]>();
  dataSource = new MatTableDataSource<Clinic>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  clinics: Array<Clinic> = new Array<Clinic>();

  constructor(
    private clinicService: ClinicService,
    private doctorService: DoctorService,
    public dialog: MatDialog,
    public doctorsDialog: MatDialog,
    public predefExaminaitonDialog: MatDialog,
  ) {
    // this.doctors = this.doctorService.getAllDoctors();
    this.clinics = this.clinicService.getAllClinics();
    this.all();
    this.condition = true;
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
    const dialog = this.dialog.open(ClinicSearchDialogComponent);
    dialog.afterClosed().subscribe(data => {
       if (data !== undefined) {
         this.clinics = data.clinics;
         this.dataSource = new MatTableDataSource(this.clinics);
         this.condition = false;
         this.tmp = data.date;
         this.doctorService.setDate(data.date);
       }
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  doctorList(element: Clinic) {
    this.doctorService.setDoctorss(element.doctors);
    this.clinicService.setClinicForExamination(element);
    this.arr = new Array<string[]>();
    for (const d of element.doctors) {
      this.tmp1 = new Array<string>();
      // this.tmp1 = this.doctorService.getDoctorsTermins(this.tmp, d.email);
    }
    // this.doctorService.setExaminationsInterval(this.arr);
    // const dialog = this.doctorsDialog.open(DoctorListPatientComponent);
    // setTimeout(() => {const dialog = this.doctorsDialog.open(DoctorListPatientComponent);  dialog.updateSize('1000px', '600'); }, 800);
    const dialog = this.doctorsDialog.open(DoctorListPatientComponent);
    dialog.updateSize('1000px', '600');
  }
  predefDialog() {
    const dialog = this.predefExaminaitonDialog.open(PredefExaminationDialogComponent);
    dialog.updateSize('1000px', '600');
  }


}
