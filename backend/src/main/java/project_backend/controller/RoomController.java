package project_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import project_backend.model.ExaminationKind;
import project_backend.model.Room;
import project_backend.service.RoomService;

import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class RoomController {

    @Autowired
    RoomService roomService;

    @GetMapping(value = "/rooms/all")
    public ResponseEntity<List<Room>> all() {
        return new ResponseEntity<>(roomService.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/rooms/getAllRoomsForOperation")
    public ResponseEntity<List<Room>> allRoomsForOperation()
    { List<Room> pom = roomService.findAll();
    List<Room> ret = new ArrayList<>();
    for(Room e : pom)  {
        if(e.getKind() == ExaminationKind.OPERATION) {
            ret.add(e);
        }
    }
    return new ResponseEntity<>(ret, HttpStatus.OK); }


}
