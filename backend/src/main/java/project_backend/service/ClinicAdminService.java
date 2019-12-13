package project_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import project_backend.dtos.ClinicalAdministratorDTO;
import project_backend.model.ClinicAdministrator;
import project_backend.repository.AdminClinicRepo;

import java.util.List;

@Service
public class ClinicAdminService {

    @Autowired
    private AdminClinicRepo repo;

    public List<ClinicAdministrator> findall()
    {
        return repo.findAll();
    }

    public List<ClinicAdministrator> findAllByEmail(String email){
        return repo.findAllByEmail(email);
    }

    public Page<ClinicAdministrator> findAll(Pageable page) {
        return repo.findAll(page);
    }

    public ClinicAdministrator getClinicalAdministrator(String email){
        List<ClinicAdministrator> tmp = findall();
        if(tmp.size() == 0)
            return null;

        for(ClinicAdministrator d : tmp)
        {
            if(d.getEmail().equals(email))
                return d;
        }

        return null;
    }

    public boolean editClinicalAdministrator(ClinicAdministrator d){
        List<ClinicAdministrator> tmp = findall();
        if(tmp.size() == 0)
            return false;

        for(ClinicAdministrator d1 : tmp)
        {
            if(d.getEmail().equals(d1.getEmail())) {
                d1 = d;
                repo.save(d1);
                return true;
            }
        }

        return false;
    }

    public boolean addClinicAdmin(ClinicAdministrator ca){

        List<ClinicAdministrator> tmp = findall();
        if(tmp.size() == 0)
        {
            repo.save(ca);
            return true;
        }
        for(ClinicAdministrator c1 : tmp)
            if(c1.getName().equals(ca.getName()))
            {
                return  false;
            }
            else
            {
                repo.save(ca);
                return true;
            }

        return false;

    }
}
