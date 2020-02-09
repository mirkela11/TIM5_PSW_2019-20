import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Rooms} from '../../model/Rooms';
import {Examination} from '../../model/examination';
import {RoomsService} from '../../services/rooms.service';
import {ExaminationService} from '../../services/examination.service';
import {ExaminationKind} from '../../model/examinationKind';

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css']
})
export class OperationListComponent implements OnInit {


  displayedColumns: string[] = ['id', 'label', 'kind', 'clinic', 'startTime', 'endTime'];
  DataSource: MatTableDataSource<Rooms>;
 // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  listRooms: Array<Rooms> = new Array<Rooms>();
  listExaminations: Array<Examination> = this.examinationService.getAllExaminations();
  constructor( private roomsService: RoomsService,
               private examinationService: ExaminationService,

  ) {
   // this.listRooms = this.roomsService.getAllRoomsForOperation();
    console.log('lista soba kons' );
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
        this.DataSource = new MatTableDataSource(await this.roomsService.getAllRoomsForOperation());
  }
}
