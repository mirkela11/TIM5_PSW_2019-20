package project_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project_backend.dtos.ClinicalAdministratorDTO;
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
import java.time.LocalDateTime;
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
        System.out.println(doct.getEmail());
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
    public ResponseEntity<List<String>> doctorTerminsByDate(@RequestParam(value = "date", required = true) String date,
                                         @RequestParam(value = "email", required = true) String email) {
        List<String> ret = new ArrayList<>();
        String tmp = "";
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
        int pocetnoVreme = Integer.parseInt(doctor.getWorkHoursFrom());
        int krajnjeVreme = Integer.parseInt(doctor.getWorkHoursTo());

        int i = pocetnoVreme;
        while(i < krajnjeVreme) {
            String s = Integer.toString(pocetnoVreme);
            if(pocetnoVreme < 10) {
                tmp = "0" + Integer.toString(pocetnoVreme) + ":00";
                ret.add(tmp);
            }
            else
            {
                tmp = Integer.toString(pocetnoVreme) + ":00";
                ret.add(tmp);
            }
            pocetnoVreme++;
            i++;
        }

        boolean flag = false;
        List<Examination> tmpList = examinationService.findAll();
        List<String> pomList = new ArrayList<>();
        for(Examination e : tmpList) {
            for(Doctor d1: e.getDoctors()) {
               if(d1.getEmail().equals(email) && e.getInterval().getStartTime().toLocalDate().toString().equals(date_new)) {
                  String datum = e.getInterval().getStartTime().toLocalDate().toString();
                  String vreme = e.getInterval().getStartTime().toLocalTime().toString();

                  for(String v : ret) {
                      if(!v.equals(vreme)) {
                          pomList.add(v);
                      }
                  }
                    flag = true;
               }
            }


        }

        if(flag == false) {
            pomList = ret;
        }


        ret = pomList;
        pomList = new ArrayList<>();
        for(String s : ret) {
            String pom = s;
            s = date_new + " " + pom;
            pomList.add(s);

        }

        ret = pomList;

        return new ResponseEntity<>(ret, HttpStatus.OK);
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
