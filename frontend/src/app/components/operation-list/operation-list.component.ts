import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Rooms} from '../../model/Rooms';
import {Examination} from '../../model/examination';
import {RoomsService} from '../../services/rooms.service';
import {ExaminationService} from '../../services/examination.service';
import {ExaminationKind} from '../../model/examinationKind';
import {__await} from 'tslib';
import {MedicalRecordDialogComponent} from '../medical-record-dialog/medical-record-dialog.component';

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css']
})
export class OperationListComponent implements OnInit {

  isDisabled = false
  displayedColumns: string[] = ['id', 'label', 'kind', 'clinic', 'startTime', 'endTime', 'reserve'];
  DataSource: MatTableDataSource<Rooms>;
 // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  listRooms: Array<Rooms> = new Array<Rooms>();
  examination: Examination;
  condition = false;
  listExaminations: Array<Examination> = new Array<Examination>();
  constructor( private roomsService: RoomsService,
               private examinationService: ExaminationService,

  ) {
    console.log('lista soba kons' );
    console.log(this.listRooms);
   // this.listExaminations = this.examinationService.getExaminationForOperation();

    this.all();


  }

  ngOnInit() {
    this.all();
  }

  applyFilter(filterValue: string) {
    this.DataSource.filter = filterValue.trim().toLowerCase();
  }

  async all() {
        this.DataSource = new MatTableDataSource(await this.roomsService.getAllRoomsForOperation());
  }

  async reserve(element) {
     for (const e of await this.examinationService.getExaminationForOperation()) {
       for (const r of await this.roomsService.getAllRoomsForOperation()) {
         console.log('e');
         console.log(e);
         this.condition = await this.roomsService.getLocalDateAndTime(e.interval.startTime, e.interval.endTime, element.interval.startTime, element.interval.endTime);
       }
     }
    console.log(this.condition);

   if (await this.condition === true){
      this.isDisabled = false;
      alert('Uspesno ste zakazali pregled');
      this.deleteRow(element);
   } else {
      alert('Termin je zauzet, izaberite sledeci');
    }

  }

    async deleteRow(d){
      const index = this.DataSource.data.indexOf(d);
      this.DataSource.data.splice(index, 1);
    }

}
