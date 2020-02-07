package project_backend.Controller;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.request.RequestAttributes;
import project_backend.model.Examination;
import project_backend.model.ExaminationStatus;
import project_backend.model.Patient;
import project_backend.service.ExaminationService;
import project_backend.service.PatientService;
import sun.misc.Request;

import javax.transaction.Transactional;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

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
        assertEquals(tmp.size(), 11);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
    }

    @Test
    void getExaminationsForDoctor() {
       ResponseEntity<List> responseEntity =
                testRestTemplate.getForEntity("/examination/allExaminationsForDoctor?email=doctor@email.com", List.class);

        List<Examination> tmp = responseEntity.getBody();
        assertEquals(tmp.size(), 4);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertNotNull(tmp);
    }

    @Test
    void getAllPredefExaminations() {
        ResponseEntity<List> responseEntity =
                testRestTemplate.getForEntity("/examination/allPredefExaminations", List.class);

        List<Examination> tmp = responseEntity.getBody();
        assertEquals(tmp.size(), 9);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertNotNull(tmp);
    }

    /*
    @Test
    void makePredefExamination() throws Exception {

        Patient p = patientService.getPatient("weca997@gmail.com");
        Examination examination = examinationService.findOneById(206L);
        HttpHeaders headers = new HttpHeaders();
        headers.add("id", "206");
        headers.set("email","weca997@gmail.com");
        HttpEntity<String> request = new HttpEntity<>(null,headers);

        ResponseEntity<Examination> responseEntity =
            testRestTemplate.postForEntity("/examination/makePredefExamination?id=206&email=weca997@gmail.com", headers ,Examination.class);

        Examination e = responseEntity.getBody();
        assertEquals(e.getStatus(), ExaminationStatus.PREDEF_BOOKED);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertNotNull(e);


    }

    */


    @Test
    void getMedicelHistoryForPatient() {
        ResponseEntity<List> responseEntity =
                testRestTemplate.getForEntity("/examination/getMHforP?email=weca997@gmail.com",List.class);

        List<Examination> tmp = responseEntity.getBody();
        assertEquals(tmp.size(), 1);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertNotNull(tmp);
    }

}
