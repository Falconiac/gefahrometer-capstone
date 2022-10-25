package de.neuefische.backend.repository;

import de.neuefische.backend.model.Evaluation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EvaluationRepo extends MongoRepository<Evaluation, String> {}
