import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Room} from '../model/Room';
import {HttpClient} from '@angular/common/http';
import {Clinic} from '../model/clinic';
import {ExaminationKind} from '../model/examinationKind';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  urlRoom = environment.baseUrl + environment.room;
  listRooms: Array<Room> = new Array<Room>();
  room: Room;

  constructor(private http: HttpClient) {
    this.getAllRooms();
  }

  public addRoom(r: Room) {
    if (this.getRoom(r.name) === null) {
      this.listRooms.push(r);
    }
  }

  public getRoom(name: string) {
    if ( this.listRooms.length === 0) {
      return null;
    }
    for (const u of this.listRooms) {
      if ( u.name === name) {
        return u;
      }
    }

    return null;
  }

  whichKind(kind: string) {
    if (kind === 'EXAMINATION') {
      return ExaminationKind.EXAMINATION;
    } else {
      return ExaminationKind.OPERATION;
    }
  }


  public getAllRooms(): Array<Room> {
    this.http.get(this.urlRoom + '/all').subscribe((data: Room[]) => {
      for (const r of data) {
        this.room = new Room(r.name, r.number, r.clinic, this.whichKind(r.kind.toString()));
        this.addRoom(this.room);
      }
    },
      error => {
        console.log(error);
      }
      );
    console.log(this.listRooms);
    return this.listRooms;
  }

  public newRoom(room) {
    return this.http.post(this.urlRoom + '/admin_clinic/add_room', room);
  }
}
