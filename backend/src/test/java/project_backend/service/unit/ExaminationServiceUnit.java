package project_backend.service.unit;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import project_backend.model.*;
import project_backend.repository.DoctorRepo;
import project_backend.repository.ExaminationRepo;
import project_backend.repository.ExaminationTypeRepo;
import project_backend.repository.PatientRepo;
import project_backend.service.*;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ExaminationServiceUnit{

    @Autowired
    private ExaminationService examinationService;

    @Autowired
    private ClinicAdminService clinicAdminService;

    @Autowired
    private PatientService patientService;

    @Autowired
    private ClinicService clinicService;

    @MockBean
    private ExaminationRepo examinationRepo;

    @MockBean
    private ExaminationTypeRepo examinationTypeRepo;

    @MockBean
    private PatientRepo patientRepo;

    @MockBean
    private DoctorRepo doctorRepo;


    @BeforeEach
    public void setup() {

        Examination examination = new Examination();
        String startDate="2020-03-20T13:00:00";
        String endDate="2020-03-20T14:00:00";

        LocalDateTime start = LocalDateTime.parse(startDate);
        LocalDateTime end = LocalDateTime.parse(endDate);
        Interval i = new Interval();
        i.setStartTime(start);
        i.setEndTime(end);
        Patient p1 = new Patient(1L,"weca997@gmail.com","Password123","Veljko","Vukovic","123456","Stojana Novakovica",
                "Srbija", "Sabac", "1231231231231");
        examination.setKind(ExaminationKind.EXAMINATION);
        examination.setClinicAdministrator(clinicAdminService.getClinicalAdministrator("nemanja@email.com"));
        examination.setPatient(p1);
        examination.setStatus(ExaminationStatus.APPROVED);
        examination.setClinic(clinicService.getClinic("MediaGroup"));
        examination.setInterval(i);
        examination.setDiscount(20);
        examination.setDoctorRating(0);
        examination.setClinicRating(0);
        examination.setId(1L);
        when(
                examinationRepo.save(any(Examination.class))
        ).thenReturn(
                examination
        );

    }

    @Test
    public void getExaminationTest() {
        Examination examination = new Examination();
        String startDate="2020-03-20T13:00:00";
        String endDate="2020-03-20T14:00:00";

        LocalDateTime start = LocalDateTime.parse(startDate);
        LocalDateTime end = LocalDateTime.parse(endDate);
        Interval i = new Interval();
        i.setStartTime(start);
        i.setEndTime(end);

        Patient p1 = new Patient(1L,"weca997@gmail.com","Password123","Veljko","Vukovic","123456","Stojana Novakovica",
                "Srbija", "Sabac", "1231231231231");
        examination.setKind(ExaminationKind.EXAMINATION);
        examination.setPatient(p1);
        examination.setClinicAdministrator(clinicAdminService.getClinicalAdministrator("nemanja@email.com"));
        examination.setPatient(patientRepo.findOneById(1L));
        examination.setStatus(ExaminationStatus.APPROVED);
        examination.setClinic(clinicService.getClinic("MediaGroup"));
        examination.setInterval(i);
        examination.setDiscount(20);
        examination.setDoctorRating(0);
        examination.setClinicRating(0);
        examination.setId(1L);


        Mockito.when(examinationRepo.findOneById(1L)).thenReturn(examination);

        Examination result = examinationRepo.findOneById(1L);
        assertNotNull(result);
        assertEquals(1L, result.getId());

        verify(examinationRepo, times(1)).findOneById(1L);
    }

    @Test
    public void addExaminationTest() throws Exception {
        Examination examination = new Examination();
        String startDate="2020-03-20T13:00:00";
        String endDate="2020-03-20T14:00:00";

        LocalDateTime start = LocalDateTime.parse(startDate);
        LocalDateTime end = LocalDateTime.parse(endDate);
        Interval i = new Interval();
        i.setStartTime(start);
        i.setEndTime(end);

        Patient p1 = new Patient(1L,"weca997@gmail.com","Password123","Veljko","Vukovic","123456","Stojana Novakovica",
        "Srbija", "Sabac", "1231231231231");

        examination.setKind(ExaminationKind.EXAMINATION);
        examination.setPatient(p1);
        examination.setClinicAdministrator(clinicAdminService.getClinicalAdministrator("nemanja@email.com"));
        examination.setPatient(patientRepo.findOneById(1L));
        examination.setStatus(ExaminationStatus.APPROVED);
        examination.setClinic(clinicService.getClinic("MediaGroup"));
        examination.setInterval(i);
        examination.setDiscount(20);
        examination.setDoctorRating(0);
        examination.setClinicRating(0);
        Examination e = examinationRepo.save(examination);

        assertEquals(1L, e.getId());

    }


}
