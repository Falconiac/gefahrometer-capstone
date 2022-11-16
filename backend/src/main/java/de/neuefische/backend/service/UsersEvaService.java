package de.neuefische.backend.service;

import de.neuefische.backend.model.*;
import de.neuefische.backend.repository.UsersEvaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class UsersEvaService {
    private final UsersEvaRepo usersEvaRepo;


    @Autowired
    public UsersEvaService(UsersEvaRepo usersEvaRepo, IdService idService) {
        this.usersEvaRepo = usersEvaRepo;
    }

    private void createUsersEvaFromDTO(UsersEvaDTO usersEvaDTO, UsersEva usersEva){
        usersEva.setId(usersEvaDTO.getAccountName()+usersEva.getEvaName());
        usersEva.setAccountName(usersEvaDTO.getAccountName());
        usersEva.setMail(usersEvaDTO.getMail());
        usersEva.setManageFirstName(usersEvaDTO.getManageFirstName());
        usersEva.setManageLastName(usersEvaDTO.getManageLastName());
        usersEva.setCompanyName(usersEvaDTO.getCompanyName());
        usersEva.setCompanyStreet(usersEvaDTO.getCompanyStreet());
        usersEva.setCompanyZip(usersEvaDTO.getCompanyZip());
        usersEva.setCompanyLocation(usersEvaDTO.getCompanyLocation());
        usersEva.setEmployee1(usersEvaDTO.getEmployee1());
        usersEva.setEmployee2(usersEvaDTO.getEmployee2());
        usersEva.setEmployee3(usersEvaDTO.getEmployee3());
        usersEva.setEmployee4(usersEvaDTO.getEmployee4());
        usersEva.setEmployee5(usersEvaDTO.getEmployee5());
        usersEva.setMedicalCareName(usersEvaDTO.getMedicalCareName());
        usersEva.setMedicalCareStreet(usersEvaDTO.getMedicalCareStreet());
        usersEva.setMedicalCareZip(usersEvaDTO.getMedicalCareZip());
        usersEva.setMedicalCareLocation(usersEvaDTO.getMedicalCareLocation());
        usersEva.setEvaName(usersEvaDTO.getEvaName());
        usersEva.setForWhom(usersEvaDTO.getForWhom());
        usersEva.setForWhomStreet(usersEvaDTO.getForWhomStreet());
        usersEva.setForWhomZip(usersEvaDTO.getForWhomZip());
        usersEva.setForWhomLocation(usersEvaDTO.getForWhomLocation());
        usersEva.setEvaCatalog(usersEvaDTO.getEvaCatalog());
    }

    public List<UsersEva> getAllUsersEva(){
        return usersEvaRepo.findAll();
    }

    public UsersEva getAllUsersEvaOfOneUser(String accountName){
        return usersEvaRepo.findByAccountName(accountName)
                .orElseThrow(NoSuchElementException::new);
    }

    public String addNewUserEva(UsersEvaDTO usersEvaDTO){
        UsersEva newUsersEva = new UsersEva();
        createUsersEvaFromDTO(usersEvaDTO,newUsersEva);
        UsersEva persistedUsersEva = usersEvaRepo.save(newUsersEva);
        return  persistedUsersEva.getEvaName() +" successfully added to " + persistedUsersEva.getAccountName() + " account.";

    }

    public void deleteUsersEvaluation(String id){
        Optional<UsersEva> usersEvaOptional = usersEvaRepo.findById(id);

        if(usersEvaOptional.isPresent()){
            UsersEva foundUsersEva = usersEvaOptional.get();
            usersEvaRepo.delete(foundUsersEva);
        }else {
            throw new NoSuchElementException("Beurteilung nicht gefunden");
        }
    }

    public String updateUsersEva(UsersEvaDTO usersEvaDTO) {

        Optional<UsersEva> usersEvaOptional = usersEvaRepo.findById(usersEvaDTO.getId());
        if(usersEvaOptional.isPresent()) {
            UsersEva foundUsersEva = usersEvaOptional.get();
            createUsersEvaFromDTO(usersEvaDTO, foundUsersEva);

            usersEvaRepo.save(foundUsersEva);

            return foundUsersEva.getAccountName() +" is updated";
        }else {
            throw new NoSuchElementException("User not found.");
        }
    }

    public UsersEva getOneUsersEvaById(String id) {
        Optional<UsersEva> usersEvaOptional = usersEvaRepo.findById(id);
        if(usersEvaOptional.isPresent()) {
            return usersEvaOptional.get();
        }else {
            throw new NoSuchElementException("User not found.");
        }
    }
}
