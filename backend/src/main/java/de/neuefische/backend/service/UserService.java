package de.neuefische.backend.service;

import de.neuefische.backend.model.AppUser;
import de.neuefische.backend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepo uRepo;
    private final IdService idService;

@Autowired
    public UserService(UserRepo uRepo, IdService idService) {
        this.uRepo = uRepo;
        this.idService = idService;
    }

    public List<AppUser> getAllUser(){return uRepo.findAll();}

    public AppUser addUser(AppUser appUser){
    appUser.setId(idService.generateID());
    return  uRepo.save(appUser);
    }

    public void deleteUser(String id) throws Exception {
    Optional<AppUser> appUserOptional = uRepo.findById(id);

    if(appUserOptional.isPresent()) {
        AppUser foundAppUser = appUserOptional.get();
        uRepo.delete(foundAppUser);
    }else {
        throw new NoSuchElementException("User not found.");
    }

    }

}


