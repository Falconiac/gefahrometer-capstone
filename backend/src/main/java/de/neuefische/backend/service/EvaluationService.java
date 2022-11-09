package de.neuefische.backend.service;
import de.neuefische.backend.model.Evaluation;
import de.neuefische.backend.repository.EvaluationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class EvaluationService {

    private final EvaluationRepo evaluationRepo;

    private final IdService idService;

    @Autowired
    public EvaluationService(EvaluationRepo evaluationRepo, IdService idService) {
        this.evaluationRepo = evaluationRepo;
        this.idService = idService;
    }

    public List<Evaluation> getAllEvaluations(){
        return evaluationRepo.findAll();
    }

    public Evaluation findEvaluationByCategoryAndInCategoryNum(String category, Integer number ){
        return evaluationRepo.findEvaluationByCategoryAndInCategoryNum(category,number)
                .orElseThrow(NoSuchElementException::new);
    }

    public List<Evaluation> findEvaluationsByCategory(String category){
        return evaluationRepo.findEvaluationsByCategory(category)
                .orElseThrow(NoSuchElementException::new);
    }

    public Evaluation addEvaluation(Evaluation eva){
        eva.setId(idService.generateID());
        return  evaluationRepo.save(eva);
    }



    public void deleteEvaluation(String id){
        Optional<Evaluation> evaluationOptional = evaluationRepo.findById(id);

        if(evaluationOptional.isPresent()){
            Evaluation foundEvaluation = evaluationOptional.get();
            evaluationRepo.delete(foundEvaluation);
        }else {
            throw new NoSuchElementException("Beurteilung nicht gefunden");
        }

    }
}
