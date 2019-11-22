package project_backend.service;

import project_backend.dtos.PatientDTO;
import project_backend.model.Authority;
import project_backend.model.Patient;
import project_backend.model.UserTokenState;
import project_backend.security.LoginAuthRequest;

import java.util.List;

public interface AuthService{
    Patient patientRegister(PatientDTO patientDTO);

    UserTokenState login(LoginAuthRequest loginAuthRequest);

    List<Authority> findByName(String name);

    List<Authority> findById(Long id);
}
