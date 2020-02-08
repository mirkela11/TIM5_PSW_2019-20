package project_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project_backend.dtos.ClinicDTO;
import project_backend.model.*;
import project_backend.service.ClinicService;
import project_backend.service.ExaminationTypeService;
import project_backend.service.TimeOffDoctorService;

import javax.swing.plaf.synth.SynthEditorPaneUI;
import java.time.LocalDateTime;
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

    @Autowired
    TimeOffDoctorService timeOffDoctorService;

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
    public ResponseEntity<List<Clinic>> allWithType(@RequestParam(value = "type", required = true) String type,
                                                    @RequestParam(value = "date", required = true) String date) {
        List<Clinic> tmp = new ArrayList<>();
        List<TimeOffDoctor> tof = timeOffDoctorService.findAll();
        List<ExaminationType> types = examinationTypeService.findAll();
        for (ExaminationType t : types) {

            if(t.getLabel().equals(type)) {
                tmp.add(t.getClinic());
            }

        }

        String[] parts = date.split("/");
        int year = Integer.parseInt(parts[2]);
        int day = Integer.parseInt(parts[1]);
        int month = Integer.parseInt(parts[0]);
        LocalDateTime datetime = LocalDateTime.of(year,month,day,0,0);
        System.out.println(datetime);

        for (Clinic c : tmp) {

            for(Doctor d : c.getDoctors()) {
                if(d.getSpecialized().getLabel().equals(type)) {
                    boolean flag = timeOffDoctorService.DoctorOff(datetime,d);
                    System.out.println(flag);
                    if(!flag) {
                        c.getDoctors().remove(d);
                    }
                }
                else
                    c.getDoctors().remove(d);
            }
        }

        System.out.println(tmp.size());

        return new ResponseEntity<>(tmp, HttpStatus.OK);
    }

}
