package project_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project_backend.dtos.ClinicDTO;
import project_backend.model.Clinic;
import project_backend.model.Doctor;
import project_backend.model.ExaminationType;
import project_backend.service.ClinicService;
import project_backend.service.ExaminationTypeService;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class ClinicController{

    @Autowired
    ClinicService clinicService;

    @Autowired
    ExaminationTypeService examinationTypeService;

    @GetMapping(value = "/clinic/all")
    public ResponseEntity<List<Clinic>> all() {
        return new ResponseEntity<>(clinicService.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "clinic/clinical-centre-admin/addClinic")
    public String AddAdministrator(@RequestBody ClinicDTO clinics){

        Clinic clinic = clinicService.getClinic(clinics.getName());
        if(clinic == null){
            Clinic newClinic = new Clinic();
            newClinic.setName(clinics.getName());
            newClinic.setAddress(clinics.getAddress());
            newClinic.setDescription(clinics.getDescription());


            boolean uspesno = clinicService.addClinic(newClinic);
            if(uspesno == true){
                System.out.println("New clinic with name " + newClinic.getName() + "is added.");
            }
            else
            {
                System.out.println("Name already exists: " + newClinic.getName());
            }

            return "";
        }
        else
            return "Name already exists";
    }

    @GetMapping(value = "/clinic/allWithTypes")
    public ResponseEntity<List<Clinic>> allWithType(@RequestParam(value = "type", required = true) String type) {
        List<Clinic> tmp = new ArrayList<>();
        List<ExaminationType> types = examinationTypeService.findAll();
        for (ExaminationType t : types) {

            if(t.getLabel().equals(type)) {
                System.out.println("Ovde sam");
                System.out.println(type);
                tmp.add(t.getClinic());
            }

        }

        for (Clinic c : tmp) {

            for(Doctor d : c.getDoctors()) {
                if(!d.getSpecialized().getLabel().equals(type)) {
                    c.getDoctors().remove(d);
                }
            }
        }

        System.out.println(tmp.size());

        return new ResponseEntity<>(tmp, HttpStatus.OK);
    }

}
