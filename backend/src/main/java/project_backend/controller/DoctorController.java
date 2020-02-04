package project_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project_backend.dtos.DoctorDTO;
import project_backend.model.Doctor;
import project_backend.model.User;
import project_backend.model.*;

import project_backend.service.DoctorService;
import project_backend.service.ExaminationService;
import project_backend.service.TimeOffDoctorService;
import project_backend.service.UserService;

import javax.jws.soap.SOAPBinding;
import javax.print.Doc;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @Autowired
    private UserService userService;

    @Autowired
    private ExaminationService examinationService;

    @PostMapping(value = "doctor/edit")
    public String editDoctor(@RequestBody DoctorDTO d){
        Doctor doct = doctorService.getDoctor(d.getEmail());
        User u = userService.getUser(d.getEmail());

        if(doct != null){
            doct.setEmail(d.getEmail());
            doct.setPassword(d.getPassword());
            doct.setName(d.getName());
            doct.setSurname(d.getSurname());
            doct.setPhone(d.getPhone());
            doct.setWorkHoursFrom(d.getWorkHoursFrom());
            doct.setWorkHoursTo(d.getWorkHoursTo());
            u.setPassword(d.getPassword());

            boolean uspesno = doctorService.editDoctor(doct);
            boolean uspesno2 = userService.editUser(u);

            if(uspesno == true || uspesno2 == true) {
                System.out.println("User with email: " + doct.getEmail() + " is edited");
                return "Uspesno";
            }

            else {
                System.out.println("Error with edit");
                return "Neuspesno";
            }
        }
        else {
            System.out.println("Error with edit else");
        }

        return "Greska";
    }

    @GetMapping(value = "doctor/all")
    public ResponseEntity<List<Doctor>> all() {
        return new ResponseEntity<>(doctorService.findall(), HttpStatus.OK);
    }

    @GetMapping(value = "doctor/terminString")
    public ResponseEntity<String> doctorTerminsByDate(@RequestParam(value = "date", required = true) String date,
                                         @RequestParam(value = "email", required = true) String email) {
        System.out.println(date);
        String tmp = "09:00,10:00,11:00,12:00";
        String[] parts = date.split("/");
        String date_new;
        if(parts[0].equals("10") || parts[0].equals("11") || parts[0].equals("12")) {
            if(parts[1].equals("1") ||parts[1].equals("2") ||parts[1].equals("3") ||parts[1].equals("4") ||parts[1].equals("5") ||parts[1].equals("6") ||parts[1].equals("7") ||parts[1].equals("8") ||parts[1].equals("9")) {
                 date_new = parts[2] + "-" + parts[0] + "-0" + parts[1];
            }
            else
            {
                 date_new = parts[2] + "-" + parts[0] + "-" + parts[1];
            }

        }
        else
        {
            if(parts[1].equals("1") ||parts[1].equals("2") ||parts[1].equals("3") ||parts[1].equals("4") ||parts[1].equals("5") ||parts[1].equals("6") ||parts[1].equals("7") ||parts[1].equals("8") ||parts[1].equals("9")) {
                 date_new = parts[2] + "-0" + parts[0] + "-0" + parts[1];
            }
            else
            {
                 date_new = parts[2] + "-0" + parts[0] + "-" + parts[1];
            }
        }

        System.out.println(date_new);

        Doctor doctor = doctorService.getDoctor(email);
        List<Examination> tmpList = examinationService.findAll();

        for(Examination e : tmpList) {
            int mesec = e.getInterval().getStartTime().getMonthValue(); // 2
            int dan = e.getInterval().getStartTime().getDayOfMonth(); // 6
            int godina = e.getInterval().getStartTime().getYear();
            String m = "";
            String d = "";
            if(mesec < 10) {
                String tmpM = Integer.toString(mesec);
                 m = "0" + tmpM;
            }
            else
            {
                m = Integer.toString(mesec);
            }
            if(dan < 10)
            {
                String tmpD = Integer.toString(dan);
                 d = "0" + tmpD;
            }
            else
            {
                d = Integer.toString(dan);
            }
            String konacan_datum = Integer.toString(godina) + "-" + m + "-" + d;
            System.out.println("Konacan izgled datume je " + konacan_datum);

            int sat = e.getInterval().getStartTime().getHour();
            int minut = e.getInterval().getStartTime().getMinute();
            String satStr = "";
            String minutStr = "";

            if(sat < 10)
                satStr = "0" + Integer.toString(sat);
            else
                satStr = Integer.toString(sat);


            if(minut < 10)
                minutStr = "0" + Integer.toString(minut);
            else
                minutStr = Integer.toString(minut);

            String konacno_vreme = satStr + ":" + minutStr;

            System.out.println("Konacno vreme je " + konacno_vreme);


        }





        return new ResponseEntity<>(tmp, HttpStatus.OK);
    }

    @GetMapping(value = "doctor/allWithSearch")
    public ResponseEntity<List<Doctor>> doctorsWithSearch(@RequestParam(value = "name", required = true) String name,
                                                          @RequestParam(value = "surname", required = true) String surname,
                                                          @RequestParam(value = "rating", required = true) String rating) {
        List<Doctor> tmp = doctorService.findall();
        List<Doctor> ret = new ArrayList<>();

        for(Doctor d : tmp) {
            if(d.getName().equals(name) && d.getSurname().equals(surname) && d.getDoctorRating() >= Integer.parseInt(rating)) {
                ret.add(d);
            }
        }

        System.out.println(ret.size());

        return new ResponseEntity<>(ret, HttpStatus.OK);
    }


}
