package project_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import project_backend.model.Patient;
import project_backend.model.PatientStatus;
import project_backend.repository.PatientRepo;

import java.util.List;


@Service
public class PatientService {

    @Autowired
    private PatientRepo repo;

    @Autowired
    private MailService mailService;

    public List<Patient> findall()
    {
        return repo.findAll();
    }

    public Patient findById(Long id) {
        return repo.findOneById(id);
    }

    public List<Patient> findAllByEmail(String email){
        return repo.findAllByEmail(email);
    }

    public Page<Patient> findAll(Pageable page) {
        return repo.findAll(page);
    }

    public void acitvatePatient(Patient patient) {
        List<Patient> tmp = findall();
        for(Patient p1 : tmp) {
            if(p1.getEmail().equals(patient.getEmail())) {
                p1.setStatus(PatientStatus.ACTIVATED);
                repo.save(p1);
                break;
            }
        }
    }

    public boolean addPatient(Patient p){
       List<Patient> tmp = findall();
       if(tmp.size() == 0)
       {
           repo.save(p);
           return true;
       }
       for(Patient p1 : tmp)
           if(p1.getEmail().equals(p.getEmail()))
           {
               return  false;
           }
           else
           {
               repo.save(p);
               return true;
           }

           return false;

    }

    public Patient getPatient(String email){
        List<Patient> tmp = findall();
        if(tmp.size() == 0)
            return null;

        for(Patient p : tmp)
        {
            if(p.getEmail().equals(email))
                return p;
        }

        return null;
    }

    public boolean editPatient(Patient p) {
        List<Patient> tmp = findall();
        if(tmp.size() == 0)
            return false;

        for(Patient p1 : tmp)
        {
            if(p.getEmail().equals(p1.getEmail())) {
                p1 = p;
                repo.save(p1);
                return true;
            }
        }

        return false;
    }

    public void SendApprovedEmail(String patientEmail, Long patientId) {
        String subject = "Request to register approved";
        String text = "Your request to reqister is approved by a clinical centre adminsistrator." + System.lineSeparator() +
                "To activate your account click the following link:" + System.lineSeparator() +
                "http://localhost:4200/patient/activatedAccount/" + patientId;

        mailService.Send(patientEmail, subject, text);
    }


}
