package de.neuefische.backend.repository;

import de.neuefische.backend.model.AppUser;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UserRepo extends MongoRepository<AppUser, String> {

    Optional<AppUser> findByAccountName(String accountName);
}
