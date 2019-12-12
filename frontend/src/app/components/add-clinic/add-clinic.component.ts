import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';



export interface DialogData {
  address: string;
  name: string;
  description: string;
  grade: string;
}

@Component({
  selector: 'app-add-clinic',
  templateUrl: './add-clinic.component.html',
  styleUrls: ['./add-clinic.component.css']
})
export class AddClinicComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  address: string;
  name: string;
  description: string;
  grade: string;



  ngOnInit() {
  }



}
