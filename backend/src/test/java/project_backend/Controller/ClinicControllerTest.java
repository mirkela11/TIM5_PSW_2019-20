package project_backend.Controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import project_backend.model.Clinic;
import project_backend.service.ClinicService;
import project_backend.service.ExaminationTypeService;
import project_backend.service.TimeOffDoctorService;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest(webEnvironment = SpringBootTest .WebEnvironment.RANDOM_PORT)
public class ClinicControllerTest{

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private ClinicService clinicService;

    @Autowired
    private ExaminationTypeService examinationTypeService;

    @Autowired
    private TimeOffDoctorService timeOffDoctorService;

    @Test
    void getAllClinics() {
        ResponseEntity<List> responseEntity =
                testRestTemplate.getForEntity("/clinic/all", List.class);

        List<Clinic> tmp = responseEntity.getBody();
        assertEquals(tmp.size(), 2);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
    }

    @Test
    void getWithTypeAndDate() {
        String date = "3/27/2020";
        String type = "Pregled sluha";
        ResponseEntity<List> responseEntity =
                testRestTemplate.getForEntity("/clinic/allWithTypes?type=Pregled sluha&date=3/27/2020" , List.class);

        List<Clinic> tmp = responseEntity.getBody();
        assertEquals(tmp.size(), 1);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
    }

    //stavicemo jedan od dva parametra da budu prazni
    @Test
    void getWithTypeAndDateBadParameter() {
        String date = "3/27/2020";
        String type = "Pregled sluha";
        ResponseEntity<List> responseEntity =
                testRestTemplate.getForEntity("/clinic/allWithTypes?type=Pregled sluha&date=" , List.class);

        List<Clinic> tmp = responseEntity.getBody();
        assertEquals(tmp.size(), 0);
        assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
    }
}
