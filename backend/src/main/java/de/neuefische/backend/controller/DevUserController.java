package de.neuefische.backend.controller;

import de.neuefische.backend.model.User;
import de.neuefische.backend.model.UserDTO;
import de.neuefische.backend.service.DevUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/dev/user")
public class DevUserController {

    private final DevUserService userService;

    @Autowired
    public DevUserController(DevUserService userService) {
        this.userService = userService;
    }



    @GetMapping
    public List<User> getAllUser(){
        return userService.getAllUser();
    }

    @PostMapping
    public User addNewUser(@RequestBody User user){
        return userService.addUser(user);
    }
}
