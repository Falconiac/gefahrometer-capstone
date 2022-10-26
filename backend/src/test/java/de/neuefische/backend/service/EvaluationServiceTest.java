package de.neuefische.backend.service;

import de.neuefische.backend.model.Evaluation;
import de.neuefische.backend.repository.EvaluationRepo;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class EvaluationServiceTest {

    EvaluationRepo evaluationRepo = mock(EvaluationRepo.class);

    IdService idService = mock(IdService.class);

    private final EvaluationService evaluationService = new EvaluationService(evaluationRepo, idService);

    @Test
    void getAllEvaluations() {
        //GIVEN
        when(evaluationRepo.findAll())
                .thenReturn(List.of(
                        Evaluation.builder()
                                .category("Category1")
                                .build()
                ));
        //WHEN
        List<Evaluation> actual = evaluationService.getAllEvaluations();
        //THEN
        List<Evaluation> expected = List.of(Evaluation.builder()
                                                        .category("Category1")
                                                        .build());

        verify(evaluationRepo).findAll();
        assertEquals(expected, actual);
    }

    @Test
    void addEvaluation() {
        // GIVEN

        Evaluation evaluation1 = Evaluation.builder()
                .category("Category1")
                .build();

        Evaluation evaluationExpected = Evaluation.builder()
                .category("Category1")
                .build();

        when(evaluationRepo.save(any())).thenReturn(Evaluation.builder()
                .category("Category1")
                .build());

        //WHEN
        Evaluation actual = evaluationService.addEvaluation(evaluation1);

        //THEN
        assertEquals(evaluationExpected,actual);
    }

    @Test
    void deleteEvaluation() throws Exception{
        Evaluation evaluation1 = Evaluation.builder().id("1").category("Category1").build();

        //GIVEN
        when(evaluationRepo.findById("1")).thenReturn(Optional.ofNullable(evaluation1));

        //WHEN
        evaluationService.deleteEvaluation("1");

        //THEN
        assert evaluation1 != null;
        verify(evaluationRepo).delete(evaluation1);
    }
}