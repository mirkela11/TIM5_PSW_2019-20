package project_backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import project_backend.model.Clinic;
import project_backend.model.User;
import project_backend.service.UserService;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class UserController{

    @Autowired
    UserService userService;

    @GetMapping(value = "user/all")
    public ResponseEntity<List<User>> all() {
        return new ResponseEntity<>(userService.findall(), HttpStatus.OK);
    }
}
