package project_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project_backend.model.ExaminationType;

import java.util.List;

public interface ExaminationTypeRepo extends JpaRepository<ExaminationType, Long>{
    List<ExaminationType> findAll();
    ExaminationType findOneById(Long id);
}
