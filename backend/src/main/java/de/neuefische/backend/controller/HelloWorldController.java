package de.neuefische.backend.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//DELETE LATER ON !!! ONLY FOR TEST REASONS
@RestController
@RequestMapping("/api/hello")
public class HelloWorldController {


    @GetMapping
    public String sayHello(){
        return "Hello World";
    }
}
