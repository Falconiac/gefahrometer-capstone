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

    public String updateUser(AppUser appUser) {

        System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+ appUser.getAccountName()+"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

        Optional<AppUser> appUserOptional = uRepo.findById(appUser.getAccountName());
        if(appUserOptional.isPresent()) {
            AppUser foundAppUser = appUserOptional.get();

            foundAppUser.setManageFirstName(appUser.getManageFirstName());
            foundAppUser.setManageLastName(appUser.getManageLastName());
            foundAppUser.setCompanyName(appUser.getCompanyName());
            foundAppUser.setCompanyStreet(appUser.getCompanyStreet());
            foundAppUser.setCompanyZip(appUser.getCompanyZip());
            foundAppUser.setCompanyLocation(appUser.getCompanyLocation());
            foundAppUser.setEmployee1(appUser.getEmployee1());
            foundAppUser.setEmployee2(appUser.getEmployee2());
            foundAppUser.setEmployee3(appUser.getEmployee3());
            foundAppUser.setEmployee4(appUser.getEmployee4());
            foundAppUser.setEmployee5(appUser.getEmployee5());
            foundAppUser.setMedicalCareName(appUser.getMedicalCareName());
            foundAppUser.setMedicalCareStreet(appUser.getMedicalCareStreet());
            foundAppUser.setMedicalCareZip(appUser.getMedicalCareZip());
            foundAppUser.setMedicalCareLocation(appUser.getMedicalCareLocation());

            uRepo.save(foundAppUser);

            return foundAppUser.getAccountName() +" is updated";
        }else {
            throw new NoSuchElementException("User not found.");
        }
    }

    public AppUser getOneUserById(String id) {
        Optional<AppUser> optionalAppUser = uRepo.findById(id);
        if(optionalAppUser.isPresent()) {
            AppUser foundAppUser = optionalAppUser.get();
            return foundAppUser;
        }else {
            throw new NoSuchElementException("User not found.");
        }
    }
}


