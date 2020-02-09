import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {Examination} from '../../model/examination';
import {RoomsService} from '../../services/rooms.service';
import {Rooms} from '../../model/Rooms';
import {ExaminationService} from '../../services/examination.service';
import {ExaminationStatus} from '../../model/examinationStatus';
import {ExaminationKind} from '../../model/examinationKind';
import {Clinic} from '../../model/clinic';
import {DoctorListPatientComponent} from '../doctor-list-patient/doctor-list-patient.component';
import {OperationListComponent} from '../operation-list/operation-list.component';

@Component({
  selector: 'app-list-of-rooms',
  templateUrl: './list-of-rooms.component.html',
  styleUrls: ['./list-of-rooms.component.css']
})
export class ListOfRoomsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'label', 'kind', 'clinic', 'startTime', 'endTime'];
  DataSource: MatTableDataSource<Rooms>;
  listRooms: Array<Rooms> = new Array<Rooms>();
  listExaminations: Array<Examination> = this.examinationService.getAllExaminations();
  constructor( private roomsService: RoomsService,
               private examinationService: ExaminationService,
               public operationDialog: MatDialog,

  ) {
   // this.listRooms = this.roomsService.getAllRooms();
    console.log('lista');
    console.log(this.listRooms);
    this.all();

  }

  ngOnInit() {
    this.all();
  }

  applyFilter(filterValue: string) {
    this.DataSource.filter = filterValue.trim().toLowerCase();
  }

  async all() {
    this.DataSource = new MatTableDataSource(await this.roomsService.getAllRooms());
  }

  reserve(element: Rooms) {
        // this.tmp1 = this.doctorService.getDoctorsTermins(this.tmp, d.email);

      // this.doctorService.setExaminationsInterval(this.arr);
      // const dialog = this.doctorsDialog.open(DoctorListPatientComponent);
      // setTimeout(() => {const dialog = this.doctorsDialog.open(DoctorListPatientComponent);  dialog.updateSize('1000px', '600'); }, 800);
      const dialog = this.operationDialog.open(OperationListComponent);
      dialog.updateSize('1000px', '600');
    }


}
