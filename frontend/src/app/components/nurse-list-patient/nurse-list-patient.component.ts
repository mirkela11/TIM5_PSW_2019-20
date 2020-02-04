import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {PatientService} from '../../services/patient.service';
import {Patient} from '../../model/patient';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-nurse-list-patient',
  templateUrl: './nurse-list-patient.component.html',
  styleUrls: ['./nurse-list-patient.component.css']
})
export class NurseListPatientComponent implements OnInit {

  patient: Patient;
  displayedColumns: string[] = ['name', 'surname', 'insuranceID'];
  dataSource = new MatTableDataSource<Patient>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  expandedElement: Patient;
  patients: Array<Patient> = new Array<Patient>();
  constructor(
    private patientService: PatientService,

  ) {

    this.patients = this.patientService.getAllPatients();
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
    this.dataSource = new MatTableDataSource<Patient>(this.patientService.getAllPatients());
  }

}
