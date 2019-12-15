package project_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import project_backend.dtos.RoomDTO;
import project_backend.model.Room;
import project_backend.service.RoomService;

import java.util.List;

public class RoomController {

    @Autowired
    RoomService roomService;

    @GetMapping(value = "/room/all")
    public ResponseEntity<List<Room>> all() {
        return new ResponseEntity<>(roomService.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "room/admin_clinic/add_room")
    public String addRoom(@RequestBody RoomDTO rooms){

        Room room = roomService.getRoom(rooms.getName());
        if(room == null){
            Room newRoom = new Room();
            newRoom.setName(rooms.getName());
            newRoom.setNumber(rooms.getNumber());


            boolean uspesno = roomService.addRoom(newRoom);
            if(uspesno == true){
                System.out.println("New room with name " + newRoom.getName() + "is added.");
            }
            else
            {
                System.out.println("Name already exists: " + newRoom.getName());
            }

            return "";
        }
        else
            return "Name already exists";
    }
}
