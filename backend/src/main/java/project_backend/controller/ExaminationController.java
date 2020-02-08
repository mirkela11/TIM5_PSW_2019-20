package project_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import project_backend.model.*;
import project_backend.service.*;
import org.springframework.web.bind.annotation.*;
import project_backend.model.Doctor;
import project_backend.model.Examination;
import project_backend.model.Patient;
import project_backend.service.ExaminationService;

import javax.persistence.criteria.CriteriaBuilder;
import javax.sound.midi.SysexMessage;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class ExaminationController {

    @Autowired
    ExaminationService examinationService;

    @Autowired
    PatientService patientService;

    @Autowired
    DoctorService doctorService;

    @Autowired
    ExaminationTypeService examinationTypeService;

    @Autowired
    ClinicService clinicService;

    @Autowired
    ClinicAdminService clinicAdminService;

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
    public ResponseEntity<Boolean> makePredefExamination(@RequestParam(value = "id", required = true) String id,
                                                             @RequestParam(value = "email", required = true) String email) {
        Examination e = new Examination();
        Long idEx = Long.parseLong(id);
        e = examinationService.findOneById(idEx);
        Patient p = patientService.getPatient(email);

        boolean uspesno = examinationService.editPredefBooked(e,p);
        if(uspesno == true)
            return new ResponseEntity<>(true, HttpStatus.OK);
        else
            return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
    }

    @PostMapping(value = "/examination/addExaminationPatient")
    public ResponseEntity<Boolean> addExaminationPatient(@RequestParam(value = "date", required = true) String date,
                                                             @RequestParam(value = "patientEmail", required = true) String patientEmail,
                                                             @RequestParam(value = "doctorEmail", required = true) String doctorEmail,
                                                             @RequestParam(value = "type", required = true) String type,
                                                             @RequestParam(value = "clinicId", required = true) String clinicId,
                                                             @RequestParam(value = "kind", required = true) String kind,
                                                             @RequestParam(value = "adminsClinic", required = true) String adminsClinic) {
        Doctor doctor = doctorService.getDoctor(doctorEmail);
        Patient patient = patientService.getPatient(patientEmail);
        Clinic clinic = clinicService.findOneById(Long.parseLong(clinicId));

        System.out.println(date);
        System.out.println(patientEmail);
        System.out.println(doctorEmail);
        System.out.println(type);
        System.out.println(clinicId);
        System.out.println(kind);
        System.out.println(adminsClinic);

        if(patient == null || doctor == null || clinic == null) {
            return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
        }

        ExaminationType examinationType = examinationTypeService.findByName(type);
        Interval interval = new Interval();
        Examination e = new Examination();
        ClinicAdministrator clinicAdministrator = clinicAdminService.getClinicalAdministrator(adminsClinic);
        Set<Doctor> doctors = new HashSet<Doctor>();

        String[] parts = date.split(" ");
        String[] datum = parts[0].split("-");
        String[] vreme = parts[1].split(":");

        int godina = Integer.parseInt(datum[0]);
        int mesec = Integer.parseInt(datum[1]);
        int dan = Integer.parseInt(datum[2]);
        int sat = Integer.parseInt(vreme[0]);
        int minut = Integer.parseInt(vreme[1]);

        interval.setStartTime(LocalDateTime.of(godina,mesec,dan,sat,minut));
        interval.setEndTime(LocalDateTime.of(godina,mesec,dan,sat+1,minut));
        e.setStatus(ExaminationStatus.AWAITING);
        e.setPatient(patient);
        e.setExaminationType(examinationType);
        e.setClinic(clinic);
        doctors.add(doctor);
        e.setDoctors(doctors);
        e.setInterval(interval);
        e.setClinicAdministrator(clinicAdministrator);

        if(kind.equals("Examination")) {
            e.setKind(ExaminationKind.EXAMINATION);
        }else
            e.setKind(ExaminationKind.OPERATION);

        examinationService.addExamination(e);
        this.examinationService.awaitingExamination(e,patient);
        this.examinationService.awaitingExaminationForAdmin(e,clinicAdministrator);
        return new ResponseEntity<>(true, HttpStatus.CREATED);
    }

    @GetMapping(value = "/examination/getMHforP")
    public ResponseEntity<List<Examination>> getMHforP(@RequestParam(value = "email", required = true) String email) {
        List<Examination> tmp = examinationService.findAll();
        List<Examination> ret = new ArrayList<>();

        for(Examination e : tmp) {
            if(e.getPatient() != null) {
                if (e.getPatient().getEmail().equals(email)) {
                    if (e.getStatus() != ExaminationStatus.AWAITING) {
                        ret.add(e);
                    }
                }
            }
        }

        return new ResponseEntity<>(ret, HttpStatus.OK);
    }
}
