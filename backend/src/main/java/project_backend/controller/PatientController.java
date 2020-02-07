package project_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project_backend.dtos.PatientDTO;
import project_backend.model.Examination;
import project_backend.model.Patient;
import project_backend.model.PatientStatus;
import project_backend.model.User;
import project_backend.service.ExaminationService;
import project_backend.service.PatientService;
import project_backend.service.UserService;

import javax.validation.constraints.NotNull;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class PatientController{

    @Autowired
    private PatientService patientService;

    @Autowired
    private UserService userService;

    @PostMapping(value = "/patient/edit")
    public String editPatient(@RequestBody PatientDTO p)
    {
        Patient pat = patientService.getPatient(p.getEmail());
        User u = userService.getUser(p.getEmail());

        if(pat != null)
        {
            pat.setEmail(p.getEmail());
            pat.setPassword(p.getPassword());
            pat.setName(p.getName());
            pat.setSurname(p.getSurname());
            pat.setNumber(p.getNumber());
            pat.setCity(p.getCity());
            pat.setCountry(p.getCountry());
            pat.setAddress(p.getAddress());
            pat.setInsuranceID(p.getInsuranceID());
            pat.setStatus(p.getStatus());
            u.setPassword(p.getPassword());

            boolean uspesno = patientService.editPatient(pat);
            boolean uspesno2 = userService.editUser(u);

            if(uspesno == true || uspesno2 == true) {
                System.out.println("User with email: " + pat.getEmail() + " is edited");

                if(pat.getStatus() == PatientStatus.APPROVED) {
                    patientService.SendApprovedEmail(pat.getEmail(),pat.getId());
                }

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

    @GetMapping(value = "/patient/all")
    public ResponseEntity<List<Patient>> all() {
        return new ResponseEntity<>(patientService.findall(), HttpStatus.OK);
    }

    @GetMapping(value = "/patient/requests")
    public ResponseEntity<ArrayList<Patient>> allRequests() {
        List<Patient> tmp = patientService.findall();
        ArrayList<Patient> returnList = new ArrayList<Patient>();
        for(Patient p : tmp) {
            System.out.println(p.getStatus());
            if(p.getStatus() == PatientStatus.AWAITING_APPROVAL) {
                returnList.add(p);
            }
        }
        return new ResponseEntity<>(returnList, HttpStatus.OK);
    }

    @PutMapping(value = "/activatePatient")
    public ResponseEntity<Patient> activateAccount(@NotNull @RequestBody Long id) {
        Patient p = patientService.findById(id);
        System.out.println(p.getEmail() + " email prilikom aktivacije");
        if (p == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        p.setStatus(PatientStatus.ACTIVATED);
        patientService.acitvatePatient(p);

        return new ResponseEntity<>(p, HttpStatus.OK);
    }

}
