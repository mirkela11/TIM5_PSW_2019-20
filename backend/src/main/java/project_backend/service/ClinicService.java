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

    public Clinic findOneById(Long id)
    {
        return clinicRepo.findOneById(id);
    }

    public boolean addClinic(Clinic c){

        List<Clinic> tmp = findAll();
        if(tmp.size() == 0)
        {
            clinicRepo.save(c);
            return true;
        }
        for(Clinic c1 : tmp)
            if(c1.getName().equals(c.getName()))
            {
                return  false;
            }
            else
            {
                clinicRepo.save(c);
                return true;
            }

        return false;

    }

    public Clinic getClinic(String name){
        List<Clinic> tmp = findAll();
        if(tmp.size() == 0)
            return null;

        for(Clinic c : tmp)
        {
            if(c.getName().equals(name))
                return c;
        }

        return null;
    }
}
