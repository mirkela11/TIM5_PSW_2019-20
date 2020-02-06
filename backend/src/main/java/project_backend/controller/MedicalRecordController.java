package project_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project_backend.dtos.ClinicalAdministratorDTO;
import project_backend.dtos.MedicalRecordDTO;
import project_backend.model.*;
import project_backend.service.ExaminationService;
import project_backend.service.ExaminationTypeService;
import project_backend.service.MedicalRecordService;
import project_backend.service.PatientService;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class MedicalRecordController {

    @Autowired
    MedicalRecordService medicalRecordService;
    @Autowired
    PatientService patientService;
    @Autowired
    ExaminationService examinationService;

    @GetMapping(value = "/medicalRecord/all")
    public ResponseEntity<List<MedicalRecord>> allMedicalRecords() {
        return new ResponseEntity<>(medicalRecordService.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/patient/allPatientsForDoctor")
    public ResponseEntity<List<Patient>> AllPatientForDoctor(@RequestParam(value = "email", required = true) String email) {
        List<Patient> tmp = new ArrayList<>();
        List<Examination> pacijenti = examinationService.findAll();
        for ( Examination e : pacijenti) {

            for(Doctor d: e.getDoctors()){
                if(d.getEmail().equals(email)){
                    if(e.getPatient() != null) {
                        tmp.add(e.getPatient());
                    }
                }
            }

        }

        return new ResponseEntity<>(tmp, HttpStatus.OK);
    }



    @PostMapping(value = "medicalRecord/edit")
    public String editMedicalRecord(@RequestBody MedicalRecordDTO d){
        MedicalRecord mr = medicalRecordService.findOneById(d.getId());
        System.out.println(d.getHeight());
        System.out.println(d.getWeight());
        System.out.println(d.getAllergies());
        System.out.println(d.getBloodType());
        System.out.println(d.getPatient());

        if(mr != null){
            mr.setHeight(d.getHeight());
            mr.setWeight(d.getWeight());
            mr.setBloodType(d.getBloodType());
            mr.setAllergies(d.getAllergies());
            mr.setPatient(d.getPatient());

            boolean uspesno = medicalRecordService.editMedicalRecord(mr);

          //  Patient p = patientService.getPatient(d.getPatient().getEmail());
         //   p.setMedialRecord(mr);
         //   patientService.editMedicalRecord(p);
            if(uspesno == true) {
                System.out.println("User with email: " + mr.getId() + " is edited");
                return "Uspesno";
            }

            else {
                System.out.println("Error with edit");
                return "Neuspesno";
            }
        }
        else {
            System.out.println("Error with edit else");
        }

        return "Greska";
    }

    @GetMapping(value = "/medicalRecord/MedicalRecordForPatient")
    public ResponseEntity<MedicalRecord> MedicalRecordForPatient(@RequestParam(value = "email", required = true) String email) {
        Patient p = patientService.getPatient(email);
        MedicalRecord tmp = null;
        List<MedicalRecord> izvestaj = medicalRecordService.findAll();
            for (MedicalRecord e : izvestaj) {
                if(e.getPatient().getEmail().equals(email)){
                    tmp = e;
                }
            }
        System.out.println(izvestaj.size());
        return new ResponseEntity<>(tmp, HttpStatus.OK);
    }

    @GetMapping(value = "/medicalRecord/DateAndTime")
    public boolean OpenDialog(@RequestParam(value = "interval", required = true) String interval,
                              @RequestParam(value = "interval1", required = true) String interval1){

        LocalDateTime sada = LocalDateTime.now();
        System.out.println(sada.toString());
        String trenutnoVreme = sada.toLocalTime().toString();
        String trenutniDatum = sada.toLocalDate().toString();

        String [] parts = interval.split(" ");
        String pocetniDatum = parts[0];
        String pocetnoVreme = parts[1];

        String [] parts1 = interval1.split(" ");
        String krajnjiDatum = parts1[0];
        String krajnjeVreme = parts1[1];

        if(pocetniDatum.equals(trenutniDatum)){
            
        }
        return false;
    }


}
