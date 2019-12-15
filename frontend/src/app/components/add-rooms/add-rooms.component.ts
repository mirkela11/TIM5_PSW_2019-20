import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Room} from "../../model/Room";
import {Router} from "@angular/router";
import {ClinicService} from "../../services/clinic.service";
import {RoomService} from "../../services/room.service";


@Component({
  selector: 'app-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrls: ['./add-rooms.component.css']
})
export class AddRoomsComponent implements OnInit {

  addRoomForm: FormGroup;
  submitted = false;
  room: Room;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private router: Router,
    private roomService: RoomService,
  ) { }

  ngOnInit() {
    this.addRoomForm = this.formBuilder.group({
        name: new FormControl('', [Validators.required]),
        number: new FormControl('', [Validators.required])
      });
  }

  get f() {
    return this.addRoomForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    // Stop here if form is invalid
    if (this.addRoomForm.invalid) {
      return;
    }

    this.room = new Room(
      this.f.name.value,
      this.f.number.value
    );

    this.room = new Room(this.f.name.value, this.f.number.value);

    this.createRoom();
  }

  private createRoom(){
    this.roomService.newRoom(this.room).subscribe(
      data =>{
        this.roomService.addRoom(this.room);
        this.router.navigate(['/admin_clinic/home']);
      },
      error =>{
        alert('Error adding room');
        console.log(error);
      }
    );
  }

}
