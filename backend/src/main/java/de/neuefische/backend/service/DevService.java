package de.neuefische.backend.service;

import de.neuefische.backend.repository.UserRepo;
import org.springframework.stereotype.Service;

@Service
public class DevService {

    private final UserRepo uRepo;


    public DevService(UserRepo uRepo) {
        this.uRepo = uRepo;
    }
}
