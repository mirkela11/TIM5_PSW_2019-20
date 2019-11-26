package project_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import project_backend.dtos.PatientDTO;
import project_backend.model.Patient;
import project_backend.model.PatientStatus;
import project_backend.model.Role;
import project_backend.model.User;
import project_backend.service.PatientService;
import project_backend.service.UserService;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class RegisterController {

    @Autowired
    private PatientService patientService;

    @Autowired
    private UserService userService;

    @PostMapping(value = "/patient/register")
    public String Register(@RequestBody PatientDTO patient){

        Patient pat = patientService.getPatient(patient.getEmail());

        if(pat == null){
            Patient newPatient = new Patient();
            newPatient.setEmail(patient.getEmail());
            newPatient.setPassword(patient.getPassword());
            newPatient.setName(patient.getName());
            newPatient.setSurname(patient.getSurname());
            newPatient.setNumber(patient.getNumber());
            newPatient.setCity(patient.getCity());
            newPatient.setCountry(patient.getCountry());
            newPatient.setAddress(patient.getAddress());
            newPatient.setInsuranceID(patient.getInsuranceID());
            newPatient.setStatus(PatientStatus.APPROVED);


            boolean uspesno = patientService.addPatient(newPatient);
            if(uspesno == true){
                System.out.println("New account with email: " + newPatient.getEmail());
                User u = new User(patient.getEmail(), patient.getPassword(), Role.PATIENT);
                userService.save(u);
            }
            else
            {
                System.out.println("Email already exists: " + newPatient.getEmail());
            }

            return "";
        }
        else
            return "Email already exists";
    }
}
