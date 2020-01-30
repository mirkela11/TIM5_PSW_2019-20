package project_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project_backend.model.ExaminationType;
import project_backend.repository.ExaminationTypeRepo;

import java.util.List;

@Service
public class ExaminationTypeService{

    @Autowired
    private ExaminationTypeRepo examinationTypeRepo;

    public List<ExaminationType> findAll()
    {
        return examinationTypeRepo.findAll();
    }
    public ExaminationType findOneById(Long id) {
        return examinationTypeRepo.findOneById(id);
    }

}
