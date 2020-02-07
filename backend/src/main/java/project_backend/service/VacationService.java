package project_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import project_backend.model.Vacation;
import project_backend.repository.VacationRepo;

import java.util.List;
@Service
public class VacationService {


    @Autowired
    private VacationRepo repo;

    public List<Vacation> findall()
    {
        return repo.findAll();
    }

    public List<Vacation> findAllByEmail(String ID){
        return repo.findAllByEmail(ID);
    }

    public Page<Vacation> findAll(Pageable page) {
        return repo.findAll(page);
    }

    public boolean addVacation(Vacation p){
        List<Vacation> tmp = findall();
        if(tmp.size() == 0)
        {
            repo.save(p);
            return true;
        }
        for(Vacation p1 : tmp)
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

    public Vacation getVacation(String email){
        List<Vacation> tmp = findall();
        if(tmp.size() == 0)
            return null;

        for(Vacation p : tmp)
        {
            if(p.getEmail().equals(email))
                return p;
        }

        return null;
    }

    public Vacation getVacation1(String email){
        List<Vacation> tmp = findall();
        if(tmp.size() == 0)
            return null;

        for(Vacation p : tmp)
        {
            if(p.getEmail().equals(email))
                return p;
        }

        return null;
    }

    public boolean editVacation(Vacation p) {
        List<Vacation> tmp = findall();
        if(tmp.size() == 0)
            return false;

        for(Vacation p1 : tmp)
        {
            if(p.getEmail().equals(p1.getEmail())) {
                p1 = p;
                repo.save(p1);
                return true;
            }
        }

        return false;
    }

    public boolean editVacation1(Vacation p) {
        List<Vacation> tmp = findall();
        if(tmp.size() == 0)
            return false;

        for(Vacation p1 : tmp)
        {
            if(p.getEmail().equals(p1.getEmail())) {
                p1 = p;
                repo.save(p1);
                return true;
            }
        }

        return false;
    }
}
