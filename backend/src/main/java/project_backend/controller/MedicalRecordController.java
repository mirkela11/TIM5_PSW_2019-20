package project_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import project_backend.model.MedicalRecord;
import project_backend.model.Patient;
import project_backend.service.MedicalRecordService;
import project_backend.service.PatientService;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class MedicalRecordController {

    @Autowired
    MedicalRecordService medicalRecordService;

    @Autowired
    PatientService patientService;

    @GetMapping(value = "/medicalRecord/all")
    public ResponseEntity<List<MedicalRecord>> allMedicalRecords() {
        return new ResponseEntity<>(medicalRecordService.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/medicalRecord/mrForP")
    public ResponseEntity<MedicalRecord> mrForP(@RequestParam(value = "email", required = true) String email) {
        MedicalRecord m = null;
        Patient p = patientService.getPatient(email);
        List<MedicalRecord> tmp = medicalRecordService.findAll();

        for(MedicalRecord mr : tmp) {
            if(mr.getPatient().getEmail().equals(p.getEmail()))
                m = mr;
        }

        return new ResponseEntity<>(m, HttpStatus.OK);
    }
}
