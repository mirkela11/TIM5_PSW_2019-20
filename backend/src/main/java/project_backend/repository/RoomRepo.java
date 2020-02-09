package project_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project_backend.model.Clinic;
import project_backend.model.Room;

import java.util.List;

public interface RoomRepo  extends JpaRepository<Room, Long> {

    Room findOneById(Long id);
    List<Room> findAll();
}
