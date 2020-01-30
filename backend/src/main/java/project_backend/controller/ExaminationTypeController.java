package project_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import project_backend.model.ExaminationType;
import project_backend.service.ExaminationTypeService;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class ExaminationTypeController{

    @Autowired
    ExaminationTypeService examinationTypeService;

    @GetMapping(value = "/examinationType/all")
    public ResponseEntity<List<ExaminationType>> allExaminationTypes() {
        return new ResponseEntity<>(examinationTypeService.findAll(), HttpStatus.OK);
    }
}
