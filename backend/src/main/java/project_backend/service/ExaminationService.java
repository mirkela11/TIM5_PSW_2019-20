package project_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project_backend.model.*;
import project_backend.repository.ExaminationRepo;

import java.time.LocalDateTime;
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
            if(e1.getId() == e.getId() && e.getStatus() == ExaminationStatus.PREDEF_AVAILABLE) {
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

    public void awaitingExaminationForAdmin(Examination examination, ClinicAdministrator clinicAdministrator) {
        String subject = "Examination is on pending approval";
        String text = "You have a " + examination.getKind().toString() + " with name " + "'" + examination.getExaminationType().getLabel() + "' "  + "to approval.";
        mailService.Send(clinicAdministrator.getEmail(), subject, text);
    }

    public void predefExaminationMail(Examination examination, Patient patient) {
        String subject = "Examination is booked";
        String text = "You successfully booked examination with:" + System.lineSeparator();
        text = text + "Kind: Examination" + System.lineSeparator();
        text = text + "Clinic: " + examination.getClinic().getName() + System.lineSeparator();
        text = text + "Type: " + examination.getExaminationType().getLabel() + System.lineSeparator();
        text = text + "Date: " + examination.getInterval().getStartTime().toLocalDate().toString() + System.lineSeparator();
        text = text + "Start time: " + examination.getInterval().getStartTime().toLocalTime().toString() + System.lineSeparator();
        text = text + "End time: " + examination.getInterval().getEndTime().toLocalTime().toString();
         mailService.Send(patient.getEmail(), subject, text);
    }

}
