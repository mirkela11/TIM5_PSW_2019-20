package project_backend.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import project_backend.dtos.PatientDTO;
import project_backend.model.Patient;
import project_backend.model.PatientStatus;

import java.util.List;

public interface PatientRepo extends JpaRepository<Patient, Long> {

    List<Patient> findByStatus(PatientStatus status);
    List<Patient> findAllByEmail(String email);
    Patient findByEmail(String email);
    Page<Patient> findAll(Pageable   pageable);


}
