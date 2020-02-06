package project_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project_backend.model.Doctor;
import project_backend.model.Examination;
import project_backend.model.ExaminationStatus;
import project_backend.model.Patient;
import project_backend.repository.ExaminationRepo;

import java.util.List;

@Service
public class ExaminationService {

    @Autowired
    private ExaminationRepo examinationRepo;

    @Autowired
    private MailService mailService;

    public List<Examination> findAll()
    {
        return examinationRepo.findAll();
    }
    public Examination findOneById(Long id) {
        return examinationRepo.findOneById(id);
    }
    public void save(Examination e) {
        examinationRepo.save(e);
    }

    public boolean editPredefBooked(Examination e, Patient p) {
        List<Examination> tmp = findAll();
        if(tmp.size() == 0)
            return false;

        for(Examination e1 : tmp) {
            if(e1.getId() == e.getId()) {
                e1.setPatient(p);
                e1.setStatus(ExaminationStatus.PREDEF_BOOKED);
                examinationRepo.save(e1);
                return true;
            }
        }
        return false;
    }
    public void addExamination(Examination e){
        examinationRepo.save(e);
    }

    public void awaitingExamination(Examination examination, Patient patient) {
        String subject = "Examination is on pending approval";
        String text = "Your " + examination.getKind().toString() + " with name " + "'" + examination.getExaminationType().getLabel() + "' "  + "is on the waiting list for approval.";
        mailService.Send(patient.getEmail(), subject, text);
    }

}
