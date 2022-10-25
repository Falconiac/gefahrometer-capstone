package de.neuefische.backend.controller;

import de.neuefische.backend.model.AppUser;
import de.neuefische.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }



    @GetMapping
    public List<AppUser> getAllUser(){
        return userService.getAllUser();
    }

    @PostMapping
    public AppUser addNewUser(@RequestBody AppUser appUser){
        return userService.addUser(appUser);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable String id) throws Exception {
        userService.deleteUser(id);
    }

}
