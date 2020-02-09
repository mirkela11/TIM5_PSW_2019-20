import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Rooms} from '../model/Rooms';
import {ExaminationKind} from '../model/examinationKind';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  url = environment.baseUrl + environment.rooms;
  room: Rooms;
  listRooms: Array<Rooms> = new Array<Rooms>();
  listRooms1: Array<Rooms> = new Array<Rooms>();
  flag : Array<Rooms> = new Array<Rooms>();
  reservation = false;

  roomss: Array<Rooms> = new Array<Rooms>();
  constructor(private http: HttpClient,
              ) {

    this.getAllRooms();
  }

  public addRoom(mr: Rooms) {
    if (this.getRoom(mr.id) === null) {
      this.listRooms.push(mr);
    }
  }
/*
  public whichKindExamination(kind: string) {
    if (kind === 'EXAMINATION') {
      return ExaminationKind.EXAMINATION;
    } else {
      return ExaminationKind.OPERATION;
    }
  }
*/
  public async getAllRooms(): Promise<Array<Rooms>> {
    const response: any = await this.http.get(this.url + '/all').toPromise()

          return response;
        }



  public async getAllRoomsForOperation(): Promise<Array<Rooms>> {
    const response: any = await  this.http.get(this.url + '/getAllRoomsForOperation').toPromise()
    return response;
  }


  public getRoom(id: number) {
    if (this.listRooms.length === 0) {
      return null;
    }
    for (const e of this.listRooms) {
      if (e.id === id) {
        return e;
      }
    }
  }

  public getRooomss() {
    return this.roomss;
  }

  public setRoomss(roomss: Array<Rooms>) {
    this.roomss = roomss;
  }

  public editRoom(room) {
    return this.http.post(this.url + '/edit', room, {responseType: 'text'});
  }

  public setRoom(p: Rooms) {

    for (const p1 of this.listRooms) {
      if (p1.id === p.id) {
        p1.label = p.label;
        p1.kind = p.kind;
        p1.clinic = p.clinic;
        p1.interval = p.interval;
        return;
      }
    }
  }
  public async getLocalDateAndTime(intervalExamination: string, intervalExaminationEnd: string, intervalRoom: string, intervalRoomEnd: string): Promise<boolean> {

    let params = new HttpParams();
    params = params.append('intervalExamination', intervalExamination);
    params = params.append('intervalExaminationEnd', intervalExaminationEnd);
    params = params.append('intervalRoom', intervalRoom);
    params = params.append('intervalRoomEnd', intervalRoomEnd);

    const response: any = await this.http.get(this.url + '/DateAndTime', {params}).toPromise();
    return response;


  }

}
