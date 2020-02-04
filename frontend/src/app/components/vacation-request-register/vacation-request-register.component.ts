import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {Zahtev} from '../../model/Zahtev';
import {VacationService} from '../../services/vacation.service';
import {ZahtevStatus} from '../../model/ZahtevStatus';

@Component({
  selector: 'app-vacation-request-register',
  templateUrl: './vacation-request-register.component.html',
  styleUrls: ['./vacation-request-register.component.css']
})
export class VacationRequestRegisterComponent implements OnInit {

  displayedColumns: string[] = ['email', 'startingDate', 'finishDate', 'approving'];
  RequestsDataSource = new MatTableDataSource<Zahtev>();
  p: Zahtev;
  constructor(private vacationService: VacationService, private changeDetectorRef: ChangeDetectorRef,
              private router: Router) {
    this.all();
  }

  ngOnInit() {
    this.all();
  }

  all() {
    this.RequestsDataSource = new MatTableDataSource<Zahtev>(this.vacationService.getAllRequests());
  }

  onAccept(zahtev) {
    this.p = this.vacationService.getVacations(zahtev.email);
    this.p.status = ZahtevStatus.APPROVED;
    this.editVacation(zahtev);
    this.deleteRow(zahtev);

  }

  private editVacation(zahtev) {
    this.vacationService.editVacation(this.p).subscribe(
      data => {
        this.vacationService.setVacation(this.p);
        this.deleteRow(zahtev);
        this.router.navigate(['/clinical-centre-admin/VacationRequests']);
      },
      error => {
        alert('Error edit request');
        console.log(error);
      }
    );
  }

  deleteRow(d) {
    const index = this.RequestsDataSource.data.indexOf(d);
    this.RequestsDataSource.data.splice(index, 1);
  }
}
