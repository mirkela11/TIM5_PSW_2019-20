package project_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project_backend.model.Patient;
import project_backend.model.PatientStatus;

import java.util.List;

public interface PatientRepo extends JpaRepository<Patient, Long> {

    List<Patient> findByStatus(PatientStatus status);
    Patient findByEmail(String email);

}
