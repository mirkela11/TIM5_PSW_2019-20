package project_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project_backend.dtos.MedicamentsDTO;
import project_backend.model.Medicaments;
import project_backend.service.MedicamentService;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class MedicamentController {

    @Autowired
    private MedicamentService medicamentService;

    @PostMapping(value = "/medicaments/edit")
    public String editNurse(@RequestBody MedicamentsDTO m){

        Medicaments med = medicamentService.getMedicament(m.getId());

        if(med != null)
        {
            med.setId(m.getId());
            med.setTitle(m.getTitle());
            med.setDescription(m.getDescription());
            med.setStrenght(m.getStrenght());



            boolean uspesno = medicamentService.editMedicament(med);

            if(uspesno == true) {
                System.out.println("Medicament with id: " + med.getId() + " is edited");
                return "Uspesno";
            }

            else {
                System.out.println("Error with edit");
                return "Neuspesno";
            }

        }
        else
        {
            System.out.println("Error with edit else");
        }

        return "Greska";
    }

    @GetMapping(value = "/medicaments/getAllMedicaments")
    public ResponseEntity<List<Medicaments>> all() {
        return new ResponseEntity<>(medicamentService.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/medicaments/clinical-centre-admin/addMedicament")
    public String addMedicament(@RequestBody MedicamentsDTO m){

        Medicaments med = medicamentService.getMedicament(m.getId());
        if(med == null){
            Medicaments newMedicament = new Medicaments();
            newMedicament.setId(m.getId());
            newMedicament.setTitle(m.getTitle());
            newMedicament.setDescription(m.getDescription());
            newMedicament.setStrenght(m.getStrenght());


            boolean uspesno = medicamentService.addMedicament(newMedicament);
            if(uspesno == true){
                System.out.println("New medicament with id " + newMedicament.getId() + " is added.");
            }
            else
            {
                System.out.println("Medicament already exists: " + newMedicament.getId());
            }

            return "";
        }
        else
            return "Diagnose already exists";
    }
}
