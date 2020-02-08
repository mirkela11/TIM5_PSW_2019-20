package project_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project_backend.model.Medicaments;
import project_backend.repository.MedicamentRepo;

import java.util.List;
@Service
public class MedicamentService {

    @Autowired
    MedicamentRepo repo;

    public List<Medicaments> findAll() {
        return  repo.findAll();
    }

    public Medicaments save(Medicaments m)
    {
        return  repo.save(m);
    }

    public Medicaments findOneById(Long id)
    {
        return repo.findOneById(id);
    }

    public boolean addMedicament(Medicaments m){
        List<Medicaments> tmp = findAll();
        if(tmp.size() == 0)
        {
            repo.save(m);
            return true;
        }
        for(Medicaments p1 : tmp)
            if(p1.getId() == m.getId())
            {
                return  false;
            }
            else
            {
                repo.save(m);
                return true;
            }

        return false;

    }

    public Medicaments getMedicament(Long id){
        List<Medicaments> tmp = findAll();
        if(tmp.size() == 0)
            return null;

        for(Medicaments p : tmp)
        {
            if(p.getId() == id)
                return p;
        }

        return null;
    }

    public boolean editMedicament(Medicaments m) {
        List<Medicaments> tmp = findAll();
        if(tmp.size() == 0)
            return false;

        for(Medicaments p1 : tmp)
        {
            if(m.getId() == (p1.getId())) {
                p1 = m;
                repo.save(p1);
                return true;
            }
        }

        return false;
    }
}
