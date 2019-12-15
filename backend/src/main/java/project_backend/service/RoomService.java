package project_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project_backend.model.Room;
import project_backend.repository.RoomRepo;

import java.util.List;

@Service
public class RoomService {

    @Autowired
    RoomRepo roomRepo;

    public List<Room> findAll() {
        return  roomRepo.findAll();
    }

    public Room save(Room r)
    {
        return  roomRepo.save(r);
    }

    public Room findOneById(Long id)
    {
        return roomRepo.findOneById(id);
    }

    public boolean addRoom(Room r){

        List<Room> tmp = findAll();
        if(tmp.size() == 0)
        {
            roomRepo.save(r);
            return true;
        }
        for(Room c1 : tmp)
            if(c1.getName().equals(r.getName()))
            {
                return  false;
            }
            else
            {
                roomRepo.save(r);
                return true;
            }

        return false;

    }

    public Room getRoom(String name){
        List<Room> tmp = findAll();
        if(tmp.size() == 0)
            return null;

        for(Room c : tmp)
        {
            if(c.getName().equals(name))
                return c;
        }

        return null;
    }
}
