package project_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import project_backend.model.Clinic;
import project_backend.service.ClinicService;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class ClinicController{

    @Autowired
    ClinicService clinicService;

    @GetMapping(value = "/clinic/all")
    public ResponseEntity<List<Clinic>> all() {
        return new ResponseEntity<>(clinicService.findAll(), HttpStatus.OK);
    }
}
