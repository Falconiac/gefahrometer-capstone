package de.neuefische.backend.service;

import de.neuefische.backend.model.AppUser;
import de.neuefische.backend.model.AppUserDTO;
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

    private void createAppUserFromDTO(AppUserDTO appUserDTO, AppUser newAppUser) {
        newAppUser.setManageFirstName(appUserDTO.getManageFirstName());
        newAppUser.setManageLastName(appUserDTO.getManageLastName());
        newAppUser.setCompanyName(appUserDTO.getCompanyName());
        newAppUser.setCompanyStreet(appUserDTO.getCompanyStreet());
        newAppUser.setCompanyZip(appUserDTO.getCompanyZip());
        newAppUser.setCompanyLocation(appUserDTO.getCompanyLocation());
        newAppUser.setEmployee1(appUserDTO.getEmployee1());
        newAppUser.setEmployee2(appUserDTO.getEmployee2());
        newAppUser.setEmployee3(appUserDTO.getEmployee3());
        newAppUser.setEmployee4(appUserDTO.getEmployee4());
        newAppUser.setEmployee5(appUserDTO.getEmployee5());
        newAppUser.setMedicalCareName(appUserDTO.getMedicalCareName());
        newAppUser.setMedicalCareStreet(appUserDTO.getMedicalCareStreet());
        newAppUser.setMedicalCareZip(appUserDTO.getMedicalCareZip());
        newAppUser.setMedicalCareLocation(appUserDTO.getMedicalCareLocation());
    }


    public List<AppUser> getAllUser(){return uRepo.findAll();}

    public String addUser(AppUserDTO appUserDTO){

    String hashPassword = passwordEncoder.encode(appUserDTO.getPasswordHash());

        AppUser newAppUser = new AppUser();

        newAppUser.setAccountName(appUserDTO.getAccountName());
        newAppUser.setMail(appUserDTO.getMail());
        newAppUser.setPasswordHash(hashPassword);
        createAppUserFromDTO(appUserDTO, newAppUser);
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

    public String updateUser(AppUserDTO updated) {

        Optional<AppUser> appUserOptional = uRepo.findById(updated.getAccountName());

        if(appUserOptional.isPresent()) {
            AppUser foundAppUser = appUserOptional.get();
            foundAppUser.setMail(updated.getMail());
            createAppUserFromDTO(updated, foundAppUser);

            uRepo.save(foundAppUser);

            return foundAppUser.getAccountName() + " updated";
        }else {
            throw new NoSuchElementException("User not found.");
        }
    }


}


