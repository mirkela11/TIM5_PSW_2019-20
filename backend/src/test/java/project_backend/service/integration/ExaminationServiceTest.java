package project_backend.service.integration;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import project_backend.model.*;
import project_backend.repository.*;
import project_backend.service.*;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ExaminationServiceTest{

    @Autowired
    private ExaminationService examinationService;

    @Autowired
    private ExaminationRepo examinationRepo;

    @Autowired
    private PatientService patientService;

    @Autowired
    private DoctorService doctorService;

    @Autowired
    private ClinicAdminService clinicAdminService;

    @Autowired
    private ClinicService clinicService;

    @BeforeEach
    void setUp() {

    }

    @Test
    void findAll() {
        List<Examination> examinations =  examinationService.findAll();
        assertEquals(examinations.size(), 11);
    }

    @Test
    void findByOneById() {
        Examination e = examinationService.findOneById(100L);

        assertEquals(e.getInterval().getId(), 155);
        assertEquals(e.getClinicRating(), 4);
        assertEquals(e.getDiscount(), 10);
        assertEquals(e.getDoctorRating(), 5);
        assertEquals(e.getKind(), ExaminationKind.OPERATION);
        assertEquals(e.getStatus(), ExaminationStatus.APPROVED);
        assertEquals(e.getClinic().getId(), 101);
        assertEquals(e.getClinicAdministrator().getId(), 100);
        assertEquals(e.getExaminationType().getId(), 100);
        assertEquals(e.getPatient().getId(), 100);
        assertEquals(e.getRoom().getId(), 100);
        assertEquals(e.getNurse().getId(), 100);

    }
    // Pokusaj cuvanja izmene
    @Test
    void update() {
        Examination e = examinationService.findOneById(101L);
        e.setKind(ExaminationKind.OPERATION);

        assertEquals(e.getKind(),ExaminationKind.OPERATION);

        examinationRepo.save(e);
    }

    @Transactional
    @Test
    @Rollback
    void createExamination() throws Exception {
        Examination e = new Examination();
        String startDate="2020-03-20T13:00:00";
        String endDate="2020-03-20T14:00:00";

        LocalDateTime start = LocalDateTime.parse(startDate);
        LocalDateTime end = LocalDateTime.parse(endDate);
        Interval i = new Interval();
        i.setStartTime(start);
        i.setEndTime(end);

        e.setKind(ExaminationKind.EXAMINATION);
        e.setClinicAdministrator(clinicAdminService.getClinicalAdministrator("nemanja@email.com"));
        e.setPatient(patientService.getPatient("weca997@gmail.com"));
        e.setStatus(ExaminationStatus.AWAITING);
        e.setClinic(clinicService.getClinic("MediaGroup"));
        e.setInterval(i);
        e.setDiscount(20);
        e.setDoctorRating(0);
        e.setClinicRating(0);

        int sizeBeforeAdd = examinationService.findAll().size();
        try {
            examinationService.addExamination(e);
        }catch (Exception e1) {
            e1.printStackTrace();
        }
        assertEquals(examinationService.findAll().size(), sizeBeforeAdd + 1);

    }
    @Transactional
    @Test
    @Rollback
    void predefExamination() throws Exception {
        Examination e = examinationService.findOneById(205L);
        boolean flag = false;

        flag = examinationService.editPredefBooked(e, patientService.getPatient("weca997@gmail.com"));

        assertEquals(flag, true);

    }
}
