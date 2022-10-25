package de.neuefische.backend.service;
import java.util.UUID;

public class IdService {
    public String generateID(){
        return UUID.randomUUID().toString();
    }
}
