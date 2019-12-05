package project_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project_backend.model.Patient;
import project_backend.model.User;
import project_backend.repository.UserRepo;

import java.util.List;

@Service
public class UserService{

    @Autowired
    UserRepo userRepo;

    public List<User> findall()
    {
        return userRepo.findAll();
    }

    public User findOneByemail(String email) {
        return userRepo.findByEmail(email);
    }

    public User save(User user) {
        return userRepo.save(user);
    }

    public User getUser(String email){
        List<User> tmp = findall();
        if(tmp.size() == 0)
            return null;

        for(User u : tmp)
        {
            if(u.getEmail().equals(email))
                return u;
        }

        return null;
    }

    public boolean editUser(User u) {
        List<User> tmp = findall();
        if(tmp.size() == 0)
            return false;

        for(User u1 : tmp)
        {
            if(u.getEmail().equals(u1.getEmail())) {
                u1 = u;
                userRepo.save(u1);
                return true;
            }
        }

        return false;
    }
}
