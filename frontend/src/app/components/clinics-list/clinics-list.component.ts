import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Clinic} from '../../model/clinic';

@Component({
  selector: 'app-clinics-list',
  templateUrl: './clinics-list.component.html',
  styleUrls: ['./clinics-list.component.css']
})
export class ClinicsListComponent implements OnInit {

  Columns: string[] = ['name', 'address'];
  clinicsData: MatTableDataSource<Clinic>

  constructor() { }

  ngOnInit() {
  }

}
