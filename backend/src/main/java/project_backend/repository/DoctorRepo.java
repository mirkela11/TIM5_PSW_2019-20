package project_backend.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import project_backend.model.Doctor;
import project_backend.model.DoctorStatus;

import java.util.List;

public interface DoctorRepo extends JpaRepository<Doctor, Long> {
    List<Doctor> findByStatus(DoctorStatus status);
    List<Doctor> findAllByEmail(String email);
    Doctor findByEmail(String email);
    Page<Doctor> findAll(Pageable pageable);
    Doctor findOneById(Long id);
}
