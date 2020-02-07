package project_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project_backend.model.*;
import project_backend.repository.TimeOffDoctorRepo;

import java.util.List;

@Service
public class TimeOffDoctorService{

    @Autowired
    TimeOffDoctorRepo repo;

    public List<TimeOffDoctor> findAll() {
        return repo.findAll();
    }

    public void addTimeOffDoctor(TimeOffDoctor t){
        repo.save(t);
    }

        public boolean editTimeOffDoctor(TimeOffDoctor d){
            List<TimeOffDoctor> tmp = findAll();
            if(tmp.size() == 0)
                return false;

            for(TimeOffDoctor d1 : tmp)
            {
                if(d.getId().equals(d1.getId())) {
                    d1 = d;
                    repo.save(d1);
                    return true;
                }
            }

            return false;
    }

    public TimeOffDoctor getTimeOffDoctor(String email){
        List<TimeOffDoctor> tmp = findAll();
        if(tmp.size() == 0)
            return null;

        for(TimeOffDoctor p : tmp)
        {
            if(p.getDoctor().getEmail().equals(email))
                return p;
        }

        return null;
    }

}
