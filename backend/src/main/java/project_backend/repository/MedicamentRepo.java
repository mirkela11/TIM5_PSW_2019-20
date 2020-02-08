package project_backend.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import project_backend.model.Medicaments;

public interface MedicamentRepo extends JpaRepository<Medicaments, Long> {

    Medicaments findOneById(Long id);
    Page<Medicaments> findAll(Pageable pageable);

    
}
