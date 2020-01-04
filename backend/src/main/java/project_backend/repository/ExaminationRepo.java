package project_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project_backend.model.Examination;
import project_backend.model.User;

import java.util.List;

public interface ExaminationRepo extends JpaRepository<Examination, Long> {

    List<Examination> findAll();
    Examination findOneById(Long id);
}
