package project_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project_backend.model.Clinic;

import java.util.List;

public interface ClinicRepo extends JpaRepository<Clinic, Long>{

    public Clinic findOneById(Long id);
    public List<Clinic> findAll();
}
