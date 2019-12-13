package project_backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project_backend.dtos.NurseDTO;
import project_backend.model.Nurse;
import project_backend.service.NurseService;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class NurseController {

    @Autowired
    private NurseService nurseService;

    @PostMapping(value = "/nurse/edit")
    public String editNurse(@RequestBody NurseDTO n){

        Nurse nur = nurseService.getNurse(n.getEmail());

        if(nur != null)
        {
            nur.setEmail(n.getEmail());
            nur.setPassword(n.getPassword());
            nur.setName(n.getName());
            nur.setSurname(n.getSurname());
            nur.setPhone(n.getPhone());
            nur.setWorkHoursFrom(nur.getWorkHoursFrom());
            nur.setWorkHoursTo(nur.getWorkHoursTo());


            boolean uspesno = nurseService.editNurse(nur);

            if(uspesno == true) {
                System.out.println("User with email: " + nur.getEmail() + " is edited");
                return "Uspesno";
            }

            else {
                System.out.println("Error with edit");
                return "Neuspesno";
            }

        }
        else
        {
            System.out.println("Error with edit else");
        }

        return "Greska";
    }

    @GetMapping(value = "/nurse/all")
    public ResponseEntity<List<Nurse>> all() {
        return new ResponseEntity<>(nurseService.findall(), HttpStatus.OK);
    }

}
