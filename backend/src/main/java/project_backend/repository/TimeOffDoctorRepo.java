package project_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project_backend.model.TimeOffDoctor;

import java.util.List;

public interface TimeOffDoctorRepo extends JpaRepository<TimeOffDoctor, Long>{
    List<TimeOffDoctor> findAll();


}
