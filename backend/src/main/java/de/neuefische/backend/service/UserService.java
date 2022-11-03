package de.neuefische.backend.service;

import de.neuefische.backend.model.AppUser;
import de.neuefische.backend.model.UserDTO;
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

    public String addUser(UserDTO newAppUser){

    String hashPassword = passwordEncoder.encode(newAppUser.getAccountName());

    AppUser appUser = new AppUser();
    appUser.setAccountName(newAppUser.getAccountName());
    appUser.setMail(newAppUser.getMail());
    appUser.setPasswordHash(hashPassword);
    appUser.setManageFirstName(newAppUser.getManageFirstName());
    appUser.setManageLastName(newAppUser.getManageLastName());
    appUser.setCompanyName(newAppUser.getCompanyName());
    appUser.setCompanyStreet(newAppUser.getCompanyStreet());
    appUser.setCompanyZip(newAppUser.getCompanyZip());
    appUser.setCompanyLocation(newAppUser.getCompanyLocation());
    appUser.setEmployee1(newAppUser.getEmployee1());
    appUser.setEmployee2(newAppUser.getEmployee2());
    appUser.setEmployee3(newAppUser.getEmployee3());
    appUser.setEmployee4(newAppUser.getEmployee4());
    appUser.setEmployee5(newAppUser.getEmployee5());
    appUser.setMedicalCareName(newAppUser.getMedicalCareName());
    appUser.setMedicalCareStreet(newAppUser.getMedicalCareStreet());
    appUser.setMedicalCareZip(newAppUser.getMedicalCareZip());
    appUser.setMedicalCareLocation(newAppUser.getMedicalCareLocation());
    appUser.setRoles(List.of("USER"));

     AppUser persistedAppUser = uRepo.save(appUser);

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


