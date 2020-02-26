package project_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import project_backend.model.MedicalRecord;
import project_backend.model.Patient;
import project_backend.repository.PatientRepo;

import java.util.List;


@Service
public class PatientService {

    @Autowired
    private PatientRepo repo;

    public List<Patient> findall()
    {
        return repo.findAll();
    }

    public List<Patient> findAllByEmail(String email){
        return repo.findAllByEmail(email);
    }

    public Page<Patient> findAll(Pageable page) {
        return repo.findAll(page);
    }

    public boolean addPatient(Patient p){
       List<Patient> tmp = findall();
       if(tmp.size() == 0)
       {
           repo.save(p);
           return true;
       }
       for(Patient p1 : tmp)
           if(p1.getEmail().equals(p.getEmail()))
           {
               return  false;
           }
           else
           {
               repo.save(p);
               return true;
           }

           return false;

    }

    public Patient getPatient(String email){
        List<Patient> tmp = findall();
        if(tmp.size() == 0)
            return null;

        for(Patient p : tmp)
        {
            if(p.getEmail().equals(email))
                return p;
        }

        return null;
    }

    public boolean editPatient(Patient p) {
        List<Patient> tmp = findall();
        if(tmp.size() == 0)
            return false;

        for(Patient p1 : tmp)
        {
            if(p.getEmail().equals(p1.getEmail())) {
                p1 = p;
                repo.save(p1);
                return true;
            }
        }

        return false;
    }

    public boolean editMedicalRecord(Patient p) {
        List<Patient> tmp = findall();
        if(tmp.size() == 0)
            return false;

        for(Patient p1 : tmp)
        {
            if(p.getEmail().equals(p1.getEmail())) {
                p1.setMedialRecord(p.getMedialRecord());
                repo.save(p1);
                return true;
            }
        }

        return false;
    }




}
