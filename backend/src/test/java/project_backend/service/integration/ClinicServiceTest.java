package project_backend.service.integration;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import project_backend.model.Clinic;
import project_backend.repository.ClinicRepo;
import project_backend.service.ClinicService;

import javax.transaction.Transactional;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ClinicServiceTest{

    @Autowired
    private ClinicService clinicService;

    @Autowired
    private ClinicRepo clinicRepo;

    @BeforeEach
    void setUp() {

    }

    @Test
    void findAll() {
        List<Clinic> clinics =  clinicService.findAll();
        assertEquals(clinics.size(), 2);
    }

    @Test
    @Rollback
    void findOnyById() {
        Clinic c = clinicService.findOneById(102L);
        assertNotNull(c);

        assertEquals(c.getName(), "Bolnica");
        assertEquals(c.getAddress(), "Popa Karana 31 Sabac");
        assertEquals(c.getDescription(), "Super");
        assertEquals(c.getClinicRating(), 4.1);
    }

    // Pokusaj cuvanja izmene
    @Test
    @Rollback
    @Transactional
    void update() {
        Clinic c = clinicService.findOneById(102L);
        c.setName("Test");
        clinicRepo.save(c);

        Clinic c1 = clinicService.findOneById(102L);

        assertEquals(c1.getName(), c.getName());


    }

    @Test
    @Rollback
    @Transactional
    void createClinic() {
        Clinic c = new Clinic();
        c.setName("Test");
        c.setAddress("Novi sad 123");
        c.setDescription("Testiramo da li radi");
        c.setClinicRating(4.0);

        boolean flag = clinicService.addClinic(c);

        assertEquals(flag, true);

        Clinic c1 = clinicService.getClinic("Test");

        assertNotNull(c1);
        assertEquals(c1.getId(), c.getId());

    }

    @Test
    void findByName() {
        String name = "Bolnica";
        Clinic c = clinicService.getClinic(name);

        assertNotNull(c);
        assertEquals(c.getId(), 102);
    }


}
