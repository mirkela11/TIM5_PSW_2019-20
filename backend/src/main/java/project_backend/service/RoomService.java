package project_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project_backend.model.Room;
import project_backend.repository.RoomRepo;

import java.util.List;
@Service
public class RoomService {

    @Autowired
    RoomRepo repo;

    public List<Room> findAll() {
        return  repo.findAll();
    }

    public Room save(Room c)
    {
        return  repo.save(c);
    }

    public Room findOneById(Long id)
    {
        return repo.findOneById(id);
    }
}
