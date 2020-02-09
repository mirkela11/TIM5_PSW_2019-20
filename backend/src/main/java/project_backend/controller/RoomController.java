package project_backend.controller;

import org.apache.tomcat.jni.Local;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import project_backend.model.Examination;
import project_backend.model.ExaminationKind;
import project_backend.model.Room;
import project_backend.service.RoomService;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
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
    public ResponseEntity<List<Room>> allRoomsForOperation() {
        List<Room> pom = roomService.findAll();
        List<Room> ret = new ArrayList<>();
        for (Room e : pom) {
            if (e.getKind() == ExaminationKind.OPERATION) {
                ret.add(e);
            }
        }
        return new ResponseEntity<>(ret, HttpStatus.OK);
    }

    @GetMapping(value = "/rooms/DateAndTime")
    public boolean getLocalDateAndTime(@RequestParam(value = "intervalExamination", required = true) String intervalExamination,
                                       @RequestParam(value = "intervalExaminationEnd", required = true) String intervalExaminationEnd,
                                       @RequestParam(value = "intervalRoom", required = true) String intervalRoom,
                                       @RequestParam(value = "intervalRoomEnd", required = true) String intervalRoomEnd){

        System.out.println("Interval examination " + intervalExamination);
        System.out.println("Interval room" + intervalRoom);

        String [] e = intervalExamination.split(" ");
        String datumEpocetni = e[0];
        String vremeEpocetni = e[1];

        String [] vremeEpocetniPodeljeno = vremeEpocetni.split(":");
        String satiEpocetni = vremeEpocetniPodeljeno[0];
        String minutiEpocetni = vremeEpocetniPodeljeno[1];


        String [] datumEpocetniPodeljeno = datumEpocetni.split("-");
        String danEpocetni = datumEpocetniPodeljeno[2];

        String [] eKraj = intervalExaminationEnd.split(" ");
        String datumEkrajnji = eKraj[0];
        String vremeEkrajnji = eKraj[1];

        String [] vremeEkrajnjePodeljeno = vremeEkrajnji.split(":");
        String satiEkrajnji = vremeEkrajnjePodeljeno[0];
        String minutiEkrajnji = vremeEkrajnjePodeljeno[1];

        String [] datumEkrajnjiPodeljeno = datumEkrajnji.split("-");
        String danEkrajni = datumEkrajnjiPodeljeno[2];

        String [] r = intervalRoom.split(" ");
        String datumRpocetni = r[0];
        String vremeRpocetno = r[1];

        String [] vremeRpocetniPodeljeno = vremeRpocetno.split(":");
        String satiRpocetni = vremeRpocetniPodeljeno[0];
        String minutiRpocetni = vremeRpocetniPodeljeno[1];

        String [] datumRpocetniPodeljeno = datumRpocetni.split("-");
        String danRpocetni = datumRpocetniPodeljeno[2];

        String [] rKraj = intervalRoomEnd.split(" ");
        String datumRkrajnji = rKraj[0];
        String vremeRkrajnje = rKraj[1];

        String [] vremeRkrajnjePodeljeno = vremeRkrajnje.split(":");
        String satiRkrajnje = vremeRkrajnjePodeljeno[0];
        String minutiRkrajnje = vremeRkrajnjePodeljeno[1];

        String [] datumRkrajnjiPodeljeno = datumRkrajnji.split("-");
        String danRkrajnji = datumRkrajnjiPodeljeno[2];

        System.out.println("datumEpocetni" + datumEpocetni);
        System.out.println("datumEkrajnji" + datumEkrajnji);
        System.out.println("datumRpocetni" + datumRpocetni);
        System.out.println("datumRkrajnji" + datumRkrajnji);
        System.out.println("satiEpocetni" + satiEpocetni);
        System.out.println("satiEkrajnji" + satiEkrajnji);
        System.out.println("minutiEpocetni" + minutiEpocetni);
        System.out.println("minutiEkrajnji" + minutiEkrajnji);
        System.out.println("satiRkrajnje" + satiRkrajnje);
        System.out.println("minutiRpocetni" + minutiRpocetni);
        System.out.println("minutiRkrajnje" + minutiRkrajnje);
        System.out.println("satiRkrajnje" + satiRpocetni);


        if(danEpocetni.equals(danRpocetni) && danEkrajni.equals(danRkrajnji)){
            System.out.println("prvi if");

            if(!satiEpocetni.equals(satiRpocetni) && !satiEkrajnji.equals(satiRkrajnje)){
                System.out.println("true");
                return  true;
            }
        } else if (!danEpocetni.equals(danRpocetni) && !danEkrajni.equals(danRkrajnji)) {
            return true;
        }
        return false;

    }
}
