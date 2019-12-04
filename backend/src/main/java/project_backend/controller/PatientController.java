package project_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import project_backend.dtos.PatientDTO;
import project_backend.model.Patient;
import project_backend.model.PatientStatus;
import project_backend.service.PatientService;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class PatientController{

    @Autowired
    private PatientService patientService;

    @PostMapping(value = "/patient/edit")
    public String editPatient(@RequestBody PatientDTO p)
    {
        Patient pat = patientService.getPatient(p.getEmail());

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
            pat.setStatus(PatientStatus.AWAITING_APPROVAL);

            boolean uspesno = patientService.editPatient(pat);

            if(uspesno == true) {
                System.out.println("User with email: " + pat.getEmail() + " is edited");
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

}