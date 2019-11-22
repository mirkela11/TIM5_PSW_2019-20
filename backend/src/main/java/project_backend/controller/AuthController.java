package project_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;
import project_backend.dtos.PatientDTO;
import project_backend.model.Patient;
import project_backend.model.UserTokenState;
import project_backend.security.LoginAuthRequest;
import project_backend.service.AuthService;

import javax.validation.Valid;
import java.io.IOException;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/auth", produces = MediaType.APPLICATION_JSON_VALUE)
public class AuthController{

    private AuthService authService;

    @PostMapping(value = "/register")
    public ResponseEntity<Patient> registerPatient(@RequestBody PatientDTO patientDTO) {
        Patient patient = authService.patientRegister(patientDTO);
        if (patient == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<Patient>(patient, HttpStatus.CREATED);
    }

    @PostMapping(value = "/login")
    public ResponseEntity<UserTokenState> login(@RequestBody LoginAuthRequest authenticationRequest){

            UserTokenState userTokenState = authService.login(authenticationRequest);
            if (userTokenState == null) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<UserTokenState>(userTokenState, HttpStatus.OK);

    }
}
