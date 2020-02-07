package project_backend.repository;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import project_backend.model.Nurse;

import java.util.List;

public interface NurseRepo extends JpaRepository<Nurse, Long> {

    //List<Nurse> findByStatus(NurseStatus status);
    List<Nurse> findAllByEmail(String email);
    Nurse findByEmail(String email);
    Page<Nurse> findAll(Pageable pageable);
    Nurse findOnyById(Long Id);
}
