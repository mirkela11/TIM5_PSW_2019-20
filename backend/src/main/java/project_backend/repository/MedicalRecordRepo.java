package project_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project_backend.model.MedicalRecord;

import java.util.List;

public interface MedicalRecordRepo extends JpaRepository<MedicalRecord, Long> {

    List<MedicalRecord> findAll();
    MedicalRecord findOneById(Long id);
}
