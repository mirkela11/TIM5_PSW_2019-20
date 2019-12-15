package project_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project_backend.model.Clinic;
import project_backend.repository.ClinicRepo;

import java.util.List;

@Service
public class ClinicService{

    @Autowired
    ClinicRepo clinicRepo;

    public List<Clinic> findAll() {
        return  clinicRepo.findAll();
    }

    public Clinic save(Clinic c)
    {
        return  clinicRepo.save(c);
    }

    public Clinic findByName(String name) {
        List<Clinic> tmp = findAll();
        if(tmp.size() == 0)
            return null;

        for(Clinic u : tmp)
        {
            if(u.getName().equals(name))
                return u;
        }

        return null;
    }

    public Clinic findOneById(Long id)
    {
        return clinicRepo.findOneById(id);
    }
}
