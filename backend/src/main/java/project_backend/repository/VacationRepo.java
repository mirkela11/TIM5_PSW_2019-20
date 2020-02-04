package project_backend.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import project_backend.model.Vacation;
import project_backend.model.VacationStatus;

import java.util.List;

public interface VacationRepo extends JpaRepository<Vacation, Long> {
    List<Vacation> findByStatus(VacationStatus status);
    List<Vacation> findAllByEmail(String email);
    Vacation findByEmail(String email);
    Page<Vacation> findAll(Pageable pageable);
}
