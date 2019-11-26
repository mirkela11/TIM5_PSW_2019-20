package project_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project_backend.model.User;
import project_backend.repository.UserRepo;

@Service
public class UserService{

    @Autowired
    UserRepo userRepo;

    public User findOneByemail(String email) {
        return userRepo.findByEmail(email);
    }

    public User save(User user) {
        return userRepo.save(user);
    }
}
