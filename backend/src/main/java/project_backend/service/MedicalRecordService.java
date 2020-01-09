package project_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project_backend.model.MedicalRecord;
import project_backend.repository.MedicalRecordRepo;

import java.util.List;

@Service
public class MedicalRecordService {

    @Autowired
    private MedicalRecordRepo medicalRecordRepo;

    public List<MedicalRecord> findAll()
    {
        return medicalRecordRepo.findAll();
    }
    public MedicalRecord findOneById(Long id) {

        return medicalRecordRepo.findOneById(id);
    }

}
