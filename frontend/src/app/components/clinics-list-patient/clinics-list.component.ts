import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Clinic} from '../../model/clinic';
import {ClinicService} from '../../services/clinic.service';

@Component({
  selector: 'app-clinics-list',
  templateUrl: './clinics-list.component.html',
  styleUrls: ['./clinics-list.component.css']
})
export class ClinicsListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'address'];
  clinic: Clinic;
  dataSource = new MatTableDataSource<Clinic>();

  constructor(
    private clinicService: ClinicService,
  ) {
    this.all();
  }

  ngOnInit() {
    this.all();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  all() {
      this.dataSource = new MatTableDataSource(this.clinicService.getAllClinics());
  }

}
