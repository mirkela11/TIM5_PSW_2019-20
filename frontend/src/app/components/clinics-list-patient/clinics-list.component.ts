import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Clinic} from '../../model/clinic';
import {ClinicService} from '../../services/clinic.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Doctor} from '../../model/doctor';
import {DoctorService} from '../../services/doctor.service';


@Component({
  selector: 'app-clinics-list',
  templateUrl: './clinics-list.component.html',
  styleUrls: ['./clinics-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ClinicsListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'address'];
  clinic: Clinic;
  doctor: Doctor;
  displayedColumnsDoctor: string[] = ['name', 'surname', 'scheduling'];
  doctordataSource = new MatTableDataSource<Doctor>();
  dataSource = new MatTableDataSource<Clinic>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  expandedElement: Clinic;
  doctors: Array<Doctor> = new Array<Doctor>();
  clinics: Array<Clinic> = new Array<Clinic>();
  constructor(
    private clinicService: ClinicService,
    private doctorService: DoctorService,
  ) {
    this.doctors = this.doctorService.getAllDoctors();
    this.clinics = this.clinicService.getAllClinics();
    this.all();
  }

  ngOnInit() {
    this.all();
    this.dataSource.paginator = this.paginator;

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  all() {
      this.dataSource = new MatTableDataSource(this.clinicService.getAllClinics());
      this.doctordataSource = new MatTableDataSource<Doctor>(this.doctorService.getAllDoctors());
  }

}
