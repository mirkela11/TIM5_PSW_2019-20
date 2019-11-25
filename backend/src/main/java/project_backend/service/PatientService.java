package project_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import project_backend.dtos.PatientDTO;
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

    public void addPatient(Patient p){
        repo.save(p);
    }

    public Patient getPatient(String email){
        List<Patient> tmp = findall();
        if(tmp.size() == 0)
            return null;

        for(Patient asd : tmp)
        {
            if(asd.getEmail() == email)
                return asd;
        }

        return null;
    }


}
