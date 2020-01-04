package project_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project_backend.model.Examination;
import project_backend.service.ExaminationService;

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
}
