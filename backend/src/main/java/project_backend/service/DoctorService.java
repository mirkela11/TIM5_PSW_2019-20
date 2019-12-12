package project_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import project_backend.model.Doctor;
import project_backend.repository.DoctorRepo;

import java.util.List;
@Service
public class DoctorService {

    @Autowired
    private DoctorRepo repo;

    public List<Doctor> findall()
    {
        return repo.findAll();
    }

    public List<Doctor> findAllByEmail(String email){
        return repo.findAllByEmail(email);
    }

    public Page<Doctor> findAll(Pageable page) {
        return repo.findAll(page);
    }


    public Doctor getDoctor(String email){
        List<Doctor> tmp = findall();
        if(tmp.size() == 0)
            return null;

        for(Doctor d : tmp)
        {
            if(d.getEmail().equals(email))
                return d;
        }

        return null;
    }

    public boolean editDoctor(Doctor d) {
        List<Doctor> tmp = findall();
        if(tmp.size() == 0)
            return false;

        for(Doctor d1 : tmp)
        {
            if(d.getEmail().equals(d1.getEmail())) {
                d1 = d;
                repo.save(d1);
                return true;
            }
        }

        return false;
    }
}
