package project_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project_backend.dtos.DoctorDTO;
import project_backend.model.Doctor;
import project_backend.model.User;
import project_backend.service.DoctorService;
import project_backend.service.UserService;

import javax.jws.soap.SOAPBinding;
import javax.print.Doc;
import java.time.LocalTime;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @Autowired
    private UserService userService;

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
}
