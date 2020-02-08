package project_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import project_backend.model.Diagnose;
import project_backend.repository.DiagnoseRepo;

import java.util.List;

@Service
public class DiagnoseService {

    @Autowired
    private DiagnoseRepo repo;

    public List<Diagnose> findall(){return repo.findAll();}

    public Diagnose findOneById(Long id) {
        return repo.findOneById(id);
    }

    public Page<Diagnose> findAll(Pageable page) {
        return repo.findAll(page);
    }


    public Diagnose getDiagnose(Long id){
        List<Diagnose> tmp = findall();
        if(tmp.size() == 0)
            return null;

        for(Diagnose d : tmp)
        {
            if(d.getId().equals(id))
                return d;
        }

        return null;
    }

    public boolean editDiagnose(Diagnose d){
        List<Diagnose> tmp = findall();
        if(tmp.size() == 0)
            return false;

        for(Diagnose d1 : tmp)
        {
            if(d.getId() == d1.getId()) {
                d1 = d;
                repo.save(d1);
                return true;
            }
        }

        return false;
    }

    public boolean addDiagnose(Diagnose d){

        List<Diagnose> tmp = findall();
        if(tmp.size() == 0)
        {
            repo.save(d);
            return true;
        }
        for(Diagnose d1 : tmp)
            if(d1.getId() == d.getId())
            {
                return  false;
            }
            else
            {
                repo.save(d);
                return true;
            }

        return false;

    }
}
