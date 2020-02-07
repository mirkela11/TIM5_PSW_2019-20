package project_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project_backend.model.ClinicAdministrator;
import project_backend.model.MedicalRecord;
import project_backend.model.Patient;
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

    public MedicalRecord getMedicalRecord(Long id){
        List<MedicalRecord> tmp = findAll();
        if(tmp.size() == 0)
            return null;

        for(MedicalRecord d : tmp)
        {
            if(d.getId() == id)
                return d;
        }

        return null;
    }

    public boolean editMedicalRecord(MedicalRecord d){
        List<MedicalRecord> tmp = findAll();
        if(tmp.size() == 0)
            return false;

        for(MedicalRecord d1 : tmp)
        {
            if(d.getId().equals(d1.getId())) {
                d1 = d;
                medicalRecordRepo.save(d1);
                return true;
            }
        }

        return false;
    }



}
