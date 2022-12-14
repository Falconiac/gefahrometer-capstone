package de.neuefische.backend.controller;

import de.neuefische.backend.model.Evaluation;
import de.neuefische.backend.service.EvaluationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/evaluation")
public class EvaluationController {

    private final EvaluationService evaluationService;

    @Autowired
    public EvaluationController(EvaluationService evaluationService) {
        this.evaluationService = evaluationService;
    }

    @GetMapping
    public List<Evaluation> getAllEvaluations(){
        return evaluationService.getAllEvaluations();
    }

    @GetMapping("/{category}")
    public List<Evaluation> getEvaluationByCategoryAndNumber(@PathVariable String category){
        return evaluationService.findEvaluationsByCategory(category);
    }

    @GetMapping("/{category}/{number}")
    public Evaluation getEvaluationByCategoryAndNumber(@PathVariable String category,@PathVariable Integer number){
        return evaluationService.findEvaluationByCategoryAndInCategoryNum(category,number);
    }

    @PostMapping
    public Evaluation addNewEvaluation(@RequestBody Evaluation eva){
        return evaluationService.addEvaluation(eva);
    }

    @DeleteMapping("{id}")
    public void deleteEvaluation(@PathVariable String id){
        evaluationService.deleteEvaluation(id);
    }

}
