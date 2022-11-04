package de.neuefische.backend.controller;

import de.neuefische.backend.model.AppUser;
import de.neuefische.backend.model.Employee;
import de.neuefische.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;


import javax.servlet.http.HttpSession;
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

    @GetMapping("/login")
    public String login(){
        return SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();
    }

    @GetMapping("/logout")
    public void logout(HttpSession session){
        session.invalidate();
    }


    @PostMapping("/register")
    public String addNewUser(@RequestBody AppUser appUser){
        return userService.addUser(appUser);
    }

    @PostMapping("/update")
    public String addEmployee(@RequestBody AppUser updated){
        return userService.updateUser(updated);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable String id){
        userService.deleteUser(id);
    }

}
