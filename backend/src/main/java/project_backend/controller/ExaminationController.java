package project_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project_backend.model.Doctor;
import project_backend.model.Examination;
import project_backend.model.Patient;
import project_backend.service.ExaminationService;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class ExaminationController {

    @Autowired
    ExaminationService examinationService;

    @GetMapping(value = "/examination/all")
    public ResponseEntity<List<Examination>> allExaminations() {
        return new ResponseEntity<>(examinationService.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/examination/allExaminationsForDoctor")
    public ResponseEntity<List<Examination>> AllExaminationForDoctor(@RequestParam(value = "email", required = true) String email) {
        List<Examination> tmp = new ArrayList<>();
        List<Examination> pregledi = examinationService.findAll();
        if(email != null){
            for (Examination e : pregledi) {

                for (Doctor d : e.getDoctors()) {
                     if (d.getEmail().equals(email)) {
                        tmp.add(e);
                     }
                }
            }
        }
        return new ResponseEntity<>(tmp, HttpStatus.OK);
    }

}
