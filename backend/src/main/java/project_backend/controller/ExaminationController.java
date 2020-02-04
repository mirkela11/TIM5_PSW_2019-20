package project_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project_backend.model.Examination;
import project_backend.model.ExaminationStatus;
import project_backend.model.Patient;
import project_backend.service.ExaminationService;
import project_backend.service.PatientService;
import project_backend.service.UserService;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class ExaminationController {

    @Autowired
    ExaminationService examinationService;

    @Autowired
    PatientService patientService;

    @GetMapping(value = "/examination/all")
    public ResponseEntity<List<Examination>> allExaminations() {
        return new ResponseEntity<>(examinationService.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/examination/allPredefExaminations")
    public ResponseEntity<List<Examination>> allPredefExaminations() {
        List<Examination> pom = examinationService.findAll();
        List<Examination> ret = new ArrayList<>();

        for(Examination e : pom)
        {
            if(e.getStatus() == ExaminationStatus.PREDEF_AVAILABLE)
            {
                ret.add(e);
            }
        }

        return new ResponseEntity<>(ret, HttpStatus.OK);
    }

    @PostMapping(value = "/examination/makePredefExamination")
    public ResponseEntity<Examination> makePredefExamination(@RequestParam(value = "id", required = true) String id,
                                                             @RequestParam(value = "email", required = true) String email) {
        Examination e = new Examination();
        Long idEx = Long.parseLong(id);
        e = examinationService.findOneById(idEx);
        Patient p = patientService.getPatient(email);

        boolean uspesno = examinationService.editPredefBooked(e,p);
        if(uspesno == true)
            return new ResponseEntity<>(e, HttpStatus.OK);
        else
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
    }

}
