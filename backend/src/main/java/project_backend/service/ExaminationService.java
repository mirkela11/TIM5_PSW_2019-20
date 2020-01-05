package project_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project_backend.model.Examination;
import project_backend.repository.ExaminationRepo;

import java.util.List;

@Service
public class ExaminationService {

    @Autowired
    private ExaminationRepo examinationRepo;

    public List<Examination> findAll()
    {
        return examinationRepo.findAll();
    }
    public Examination findOneById(Long id) {
        return examinationRepo.findOneById(id);
    }

}
