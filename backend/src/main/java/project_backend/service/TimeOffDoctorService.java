package project_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project_backend.model.Doctor;
import project_backend.model.TimeOffDoctor;
import project_backend.repository.TimeOffDoctorRepo;

import javax.persistence.criteria.CriteriaBuilder;
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
}
