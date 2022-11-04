package de.neuefische.backend.service;

import de.neuefische.backend.model.AppUser;
import de.neuefische.backend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepo uRepo;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepo uRepo, PasswordEncoder passwordEncoder) {
        this.uRepo = uRepo;
        this.passwordEncoder = passwordEncoder;
    }


    public List<AppUser> getAllUser(){return uRepo.findAll();}

    public String addUser(AppUser newAppUser){

    String hashPassword = passwordEncoder.encode(newAppUser.getPasswordHash());

    newAppUser.setPasswordHash(hashPassword);
    newAppUser.setRoles(List.of("USER"));

     AppUser persistedAppUser = uRepo.save(newAppUser);

     return persistedAppUser.getAccountName();
    }

    public void deleteUser(String id){
    Optional<AppUser> appUserOptional = uRepo.findById(id);

    if(appUserOptional.isPresent()) {
        AppUser foundAppUser = appUserOptional.get();
        uRepo.delete(foundAppUser);
    }else {
        throw new NoSuchElementException("User not found.");
    }

    }

}


