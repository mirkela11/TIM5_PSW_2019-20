package project_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project_backend.model.Doctor;
import project_backend.model.TimeOffDoctor;

import project_backend.repository.TimeOffDoctorRepo;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TimeOffDoctorService{

    @Autowired
    TimeOffDoctorRepo repo;

    public List<TimeOffDoctor> findAll() {
        return repo.findAll();
    }

    public boolean DoctorOff(LocalDateTime date, Doctor d) {

        List<TimeOffDoctor> tmp = findAll();
        for(TimeOffDoctor t : tmp) {
            if(t.getDoctor().getEmail().equals(d.getEmail())) {
                LocalDateTime pocetni = t.getInterval().getStartTime();
                LocalDateTime krajnji = t.getInterval().getEndTime();
                if(date.isAfter(pocetni) && date.isBefore(krajnji)) {
                    return false;
                }
            }

        }


        return true;
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
