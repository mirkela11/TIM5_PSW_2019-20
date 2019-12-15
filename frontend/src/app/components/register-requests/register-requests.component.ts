import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Patient} from '../../model/patient';
import {PatientService} from '../../services/patient.service';
import {PatientStatus} from '../../model/patientStatus';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-requests',
  templateUrl: './register-requests.component.html',
  styleUrls: ['./register-requests.component.css']
})
export class RegisterRequestsComponent implements OnInit {

  displayedColumns: string[] = ['email', 'approving'];
  RequestsDataSource = new MatTableDataSource<Patient>();
  p: Patient;
  constructor(private patientService: PatientService, private changeDetectorRef: ChangeDetectorRef,
              private router: Router) {
    this.all();
  }

  ngOnInit() {
    this.all();
  }

  all() {
    this.RequestsDataSource = new MatTableDataSource<Patient>(this.patientService.getAllRequests());
  }

  onAccept(patient) {
    this.p = this.patientService.getPatient(patient.email);
    this.p.status = PatientStatus.APPROVED;
    this.editPatient(patient);
    this.deleteRow(patient);

  }

  private editPatient(patient) {
    this.patientService.editPatient(this.p).subscribe(
      data => {
        this.patientService.setPatient(this.p);
        this.deleteRow(patient);
        this.router.navigate(['/clinical-centre-admin/requests']);
      },
      error => {
        alert('Error edit patient');
        console.log(error);
      }
    );
  }

  deleteRow(d) {
    const index = this.RequestsDataSource.data.indexOf(d);
    this.RequestsDataSource.data.splice(index, 1);
  }

}
