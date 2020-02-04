package project_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project_backend.model.TimeOffDoctor;
import project_backend.repository.TimeOffDoctorRepo;

import java.util.List;

@Service
public class TimeOffDoctorService{

    @Autowired
    TimeOffDoctorRepo repo;

    public List<TimeOffDoctor> findAll() {
        return repo.findAll();
    }
}
