package de.neuefische.backend.service;

import de.neuefische.backend.model.AppUser;
import de.neuefische.backend.model.Employee;
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

    public String updateUser(AppUser updated) {

        Optional<AppUser> appUserOptional = uRepo.findById(updated.getAccountName());

        if(appUserOptional.isPresent()) {
            AppUser foundAppUser = appUserOptional.get();
            foundAppUser.setMail(updated.getMail());
            foundAppUser.setManageFirstName(updated.getManageFirstName());
            foundAppUser.setManageLastName(updated.getManageLastName());
            foundAppUser.setCompanyName(updated.getCompanyName());
            foundAppUser.setCompanyStreet(updated.getCompanyStreet());
            foundAppUser.setCompanyZip(updated.getCompanyZip());
            foundAppUser.setCompanyLocation(updated.getCompanyLocation());
            foundAppUser.setEmployee1(updated.getEmployee1());
            foundAppUser.setEmployee2(updated.getEmployee2());
            foundAppUser.setEmployee3(updated.getEmployee3());
            foundAppUser.setEmployee4(updated.getEmployee4());
            foundAppUser.setEmployee5(updated.getEmployee5());
            foundAppUser.setMedicalCareName(updated.getMedicalCareName());
            foundAppUser.setMedicalCareStreet(updated.getMedicalCareStreet());
            foundAppUser.setMedicalCareZip(updated.getMedicalCareZip());
            foundAppUser.setMedicalCareLocation(updated.getMedicalCareLocation());

            uRepo.save(foundAppUser);

            return foundAppUser.getAccountName() + " updated";
        }else {
            throw new NoSuchElementException("User not found.");
        }
    }
}


