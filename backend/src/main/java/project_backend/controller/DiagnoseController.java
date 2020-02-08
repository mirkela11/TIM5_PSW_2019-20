package project_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project_backend.dtos.DiagnoseDTO;
import project_backend.model.Diagnose;
import project_backend.service.DiagnoseService;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class DiagnoseController {


    @Autowired
    private DiagnoseService diagnoseService;

    @PostMapping(value = "/diagnose/edit")
    public String editDiagnose(@RequestBody DiagnoseDTO d){
        Diagnose diag = diagnoseService.getDiagnose(d.getId());

        if(diag != null){
            diag.setId(d.getId());
            diag.setTitle(d.getTitle());
            diag.setDescription(d.getDescription());

            boolean uspesno = diagnoseService.editDiagnose(diag);

            if(uspesno == true) {
                System.out.println("Diagnose with email: " + diag.getId() + " is edited");
                return "Uspesno";
            }

            else {
                System.out.println("Error with edit");
                return "Neuspesno";
            }
        }
        else {
            System.out.println("Error with edit else");
        }

        return "Greska";
    }

    @GetMapping(value = "/diagnose/all")
    public ResponseEntity<List<Diagnose>> getAllDiagnoses() {
        return new ResponseEntity<>(diagnoseService.findall(), HttpStatus.OK);
    }

    @PostMapping(value = "/diagnose/clinical-centre-admin/addDiagnose")
    public String addDiagnose(@RequestBody DiagnoseDTO diag){

        Diagnose diagnose = diagnoseService.getDiagnose(diag.getId());
        if(diagnose == null){
            Diagnose newDiagnose = new Diagnose();
            newDiagnose.setId(diag.getId());
            newDiagnose.setTitle(diag.getTitle());
            newDiagnose.setDescription(diag.getDescription());


            boolean uspesno = diagnoseService.addDiagnose(newDiagnose);
            if(uspesno == true){
                System.out.println("New diagnose with id " + newDiagnose.getId() + " is added.");
            }
            else
            {
                System.out.println("Diagnose already exists: " + newDiagnose.getId());
            }

            return "";
        }
        else
            return "Diagnose already exists";
    }
}
