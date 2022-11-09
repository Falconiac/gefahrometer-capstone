package de.neuefische.backend.repository;

import de.neuefische.backend.model.Evaluation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EvaluationRepo extends MongoRepository<Evaluation, String> {

    Optional<Evaluation> findEvaluationByCategoryAndInCategoryNum(String category, Integer number);
    Optional<List<Evaluation>> findEvaluationsByCategory(String category);

}
