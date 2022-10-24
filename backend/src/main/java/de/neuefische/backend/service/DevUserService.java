package de.neuefische.backend.service;

import de.neuefische.backend.model.User;
import de.neuefische.backend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DevUserService {

    private final UserRepo uRepo;
    private final IdService idService;

@Autowired
    public DevUserService(UserRepo uRepo, IdService idService) {
        this.uRepo = uRepo;
        this.idService = idService;
    }

    public List<User> getAllUser(){return uRepo.findAll();}

    public User addUser(User user){
    user.setId(idService.generateID());
    return  uRepo.save(user);
    }
}
