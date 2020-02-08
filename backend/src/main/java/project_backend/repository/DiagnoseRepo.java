package project_backend.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import project_backend.model.Diagnose;

public interface DiagnoseRepo extends JpaRepository<Diagnose, Long> {

    Diagnose findOneById(Long id);
    Page<Diagnose> findAll(Pageable pageable);
}
