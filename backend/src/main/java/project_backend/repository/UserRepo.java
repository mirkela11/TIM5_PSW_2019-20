package project_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project_backend.model.User;

import java.util.List;

public interface UserRepo extends JpaRepository<User, Long>{

    User findByEmail(String email);
    List<User> findAll();
}
