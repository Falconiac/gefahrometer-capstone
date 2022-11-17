package de.neuefische.backend.repository;

import de.neuefische.backend.model.UsersEva;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UsersEvaRepo extends MongoRepository<UsersEva,String> {
    Optional<List<UsersEva>> findByAccountName(String accountName);
}
