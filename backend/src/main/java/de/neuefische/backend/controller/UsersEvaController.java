package de.neuefische.backend.controller;


import de.neuefische.backend.model.*;
import de.neuefische.backend.service.UsersEvaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/userseva")
public class UsersEvaController {

    private final UsersEvaService usersEvaService;

    @Autowired
    public UsersEvaController(UsersEvaService usersEvaService) {
        this.usersEvaService = usersEvaService;
    }

    @GetMapping
    public List<UsersEva> getAllUsersEvas(){
        return usersEvaService.getAllUsersEva();
    }

    @GetMapping("{accountname}")
    public List<UsersEva> getAllUsersEvasByAccountname(@PathVariable String accountname){
        return usersEvaService.getAllUsersEvaOfOneUser(accountname);
    }

    @GetMapping("{id}")
    public UsersEva getOneUsersEvaById(@PathVariable String id){
        return usersEvaService.getOneUsersEvaById(id);
    }

    @PostMapping("/addneweva")
    public String addNewUsersEva(@RequestBody UsersEvaDTO usersEvaDTO){
        return usersEvaService.addNewUserEva(usersEvaDTO);
    }

    @PostMapping("/update")
    public String updateUsersEva(@RequestBody UsersEvaDTO usersEvaDTO){
        return usersEvaService.updateUsersEva(usersEvaDTO);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable String id){
        usersEvaService.deleteUsersEvaluation(id);
    }



}
