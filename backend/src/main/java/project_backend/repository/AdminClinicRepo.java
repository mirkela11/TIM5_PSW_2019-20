package project_backend.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import project_backend.model.ClinicAdminStatus;
import project_backend.model.ClinicAdministrator;

import java.util.List;

public interface AdminClinicRepo extends JpaRepository<ClinicAdministrator, Long> {

    List<ClinicAdministrator> findByStatus(ClinicAdminStatus status);
    List<ClinicAdministrator> findAllByEmail(String email);
    ClinicAdministrator findByEmail(String email);
    Page<ClinicAdministrator> findAll(Pageable pageable);
    ClinicAdministrator findOneById(Long id);
}
