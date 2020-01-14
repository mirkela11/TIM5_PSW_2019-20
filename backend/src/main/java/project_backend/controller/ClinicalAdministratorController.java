package project_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project_backend.dtos.ClinicalAdministratorDTO;
import project_backend.model.ClinicAdministrator;
import project_backend.model.Patient;
import project_backend.model.PatientStatus;
import project_backend.model.User;
import project_backend.service.ClinicAdminService;
import project_backend.service.UserService;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class ClinicalAdministratorController {

    @Autowired
    private ClinicAdminService clinicAdminService;

    @Autowired
    private UserService userService;

    @PostMapping(value = "admin_clinic/edit")
    public String editDoctor(@RequestBody ClinicalAdministratorDTO d){
        ClinicAdministrator doct = clinicAdminService.getClinicalAdministrator(d.getEmail());
        User u = userService.getUser(d.getEmail());

        if(doct != null){
            doct.setEmail(d.getEmail());
            doct.setPassword(d.getPassword());
            doct.setName(d.getName());
            doct.setSurname(d.getSurname());
            doct.setNumber(d.getNumber());
            u.setPassword(d.getPassword());

            boolean uspesno = clinicAdminService.editClinicalAdministrator(doct);
            boolean uspesno2 = userService.editUser(u);

            if(uspesno == true || uspesno2 == true) {
                System.out.println("User with email: " + doct.getEmail() + " is edited");
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

    @GetMapping(value = "/admin_clinic/all")
    public ResponseEntity<List<ClinicAdministrator>> all() {
        return new ResponseEntity<>(clinicAdminService.findall(), HttpStatus.OK);
    }

    @PostMapping(value = "admin_clinic/clinical-centre-admin/addAdmins")
    public String AddAdministrator(@RequestBody ClinicalAdministratorDTO clinicAdmins){

        ClinicAdministrator clinicAdmin = clinicAdminService.getClinicalAdministrator(clinicAdmins.getName());
        if(clinicAdmin == null){
            ClinicAdministrator newClinicAdministrator = new ClinicAdministrator();
            newClinicAdministrator.setEmail(clinicAdmins.getEmail());
            newClinicAdministrator.setPassword(clinicAdmins.getPassword());
            newClinicAdministrator.setName(clinicAdmins.getName());
            newClinicAdministrator.setSurname(clinicAdmins.getSurname());
            newClinicAdministrator.setNumber(clinicAdmins.getNumber());


            boolean uspesno = clinicAdminService.addClinicAdmin(newClinicAdministrator);
            if(uspesno == true){
                System.out.println("New administrator of clinic with name " + newClinicAdministrator.getName() + " is added.");
            }
            else
            {
                System.out.println("Name already exists: " + newClinicAdministrator.getName());
            }

            return "";
        }
        else
            return "Name already exists";
    }


}
