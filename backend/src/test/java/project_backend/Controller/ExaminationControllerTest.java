package project_backend.Controller;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;
import org.springframework.test.annotation.Rollback;
import project_backend.model.Examination;
import project_backend.model.ExaminationStatus;
import project_backend.model.Patient;
import project_backend.service.ExaminationService;
import project_backend.service.PatientService;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ExaminationControllerTest {

    @Autowired
    private ExaminationService examinationService;

    @Autowired
    private PatientService patientService;

    @Autowired
    private TestRestTemplate testRestTemplate;


    @Test
    void getExaminations() {
        ResponseEntity<List> responseEntity =
                testRestTemplate.getForEntity("/examination/all", List.class);

        List<Examination> tmp = responseEntity.getBody();
        assertEquals(tmp.size(), 12);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
    }

    @Test
    void getExaminationsForDoctor() {
       ResponseEntity<List> responseEntity =
                testRestTemplate.getForEntity("/examination/allExaminationsForDoctor?email=doctor@email.com", List.class);

        List<Examination> tmp = responseEntity.getBody();
        assertEquals(tmp.size(), 2);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertNotNull(tmp);
    }

    @Test
    void getAllPredefExaminations() {
        ResponseEntity<List> responseEntity =
                testRestTemplate.getForEntity("/examination/allPredefExaminations", List.class);

        List<Examination> tmp = responseEntity.getBody();
        assertEquals(tmp.size(), 8);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertNotNull(tmp);
    }


    @Test
    void makePredefExamination() throws Exception {

        Patient p = patientService.getPatient("weca997@gmail.com");
        Examination examination = examinationService.findOneById(206L);
        HttpHeaders headers = new HttpHeaders();
        //headers.add("id", "206");
        //headers.set("email","weca997@gmail.com");
        HttpEntity<String> request = new HttpEntity<>(null,headers);

        ResponseEntity<Boolean> responseEntity =
            testRestTemplate.postForEntity("/examination/makePredefExamination?id=206&email=weca997@gmail.com", null ,Boolean.class);

        Boolean e = responseEntity.getBody();
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(e, true);

    }

    //Prosledjen los id
    @Test
    void makeBadPredefExamination() throws Exception {

        Patient p = patientService.getPatient("weca997@gmail.com");
        Examination examination = examinationService.findOneById(100L);
        HttpHeaders headers = new HttpHeaders();
        //headers.add("id", "206");
        //headers.set("email","weca997@gmail.com");
        HttpEntity<String> request = new HttpEntity<>(null,headers);

        ResponseEntity<Boolean> responseEntity =
                testRestTemplate.postForEntity("/examination/makePredefExamination?id=100&email=weca997@gmail.com", null ,Boolean.class);

        Boolean e = responseEntity.getBody();
        assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
        assertEquals(e, false);

    }


    @Test
    void getMedicelHistoryForPatient() {
        ResponseEntity<List> responseEntity =
                testRestTemplate.getForEntity("/examination/getMHforP?email=weca997@gmail.com",List.class);

        List<Examination> tmp = responseEntity.getBody();
        assertEquals(tmp.size(), 4);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertNotNull(tmp);
    }

    @Test
    void makeExamination() throws Exception {


        HttpHeaders headers = new HttpHeaders();
        HttpEntity<String> request = new HttpEntity<>(null,headers);

        ResponseEntity<Boolean> responseEntity =
                testRestTemplate.postForEntity("/examination/addExaminationPatient?date=2020-03-31 15:00&patientEmail=weca997@gmail.com&doctorEmail=test@email.com&type=Pregled sluha&clinicId=102&kind=Examination&adminsClinic=asmirkovic97@gmail.com", null ,Boolean.class);

        Boolean e = responseEntity.getBody();
        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        assertEquals(e, true);

    }

    @Test
    void makeBadExamination() throws Exception {


        HttpHeaders headers = new HttpHeaders();
        HttpEntity<String> request = new HttpEntity<>(null,headers);

        ResponseEntity<Boolean> responseEntity =
                testRestTemplate.postForEntity("/examination/addExaminationPatient?date=2020-03-31 15:00&patientEmail=weca997@gmail.com&doctorEmail=test@email.com&type=Pregled sluha&clinicId=300&kind=Examination&adminsClinic=asmirkovic97@gmail.com", null ,Boolean.class);

        Boolean e = responseEntity.getBody();
        assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
        assertEquals(e, false);

    }



}
