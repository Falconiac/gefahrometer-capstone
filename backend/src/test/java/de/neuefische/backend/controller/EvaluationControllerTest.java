package de.neuefische.backend.controller;

import de.neuefische.backend.model.Evaluation;
import de.neuefische.backend.repository.EvaluationRepo;
import de.neuefische.backend.service.IdService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class EvaluationControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private EvaluationRepo evaluationRepo;

    @MockBean
    private IdService idService;


    @DirtiesContext
    @Test
    void getAllEvaluationsFromDB() throws Exception {

        //GIVEN
        evaluationRepo.save(new Evaluation(
                "1",
                "test",
                1,
                "test",
                "test",
                "test",
                "test",
                List.of(),
                false,
                "test",
                "test",
                "test",
                false,
                "test"));

        String expectedJSON = """
                [
                {
                    "id":"1",
                    "category":"test",
                    "inCategoryNum":1,
                    "categoryImg":"test",
                    "title":"test",
                    "txtBlock":"test",
                    "subTxt":"test",
                    "subList":[],
                    "done":false,
                    "respPerson":"test",
                    "doneTil": "test",
                    "controlDone":"test",
                    "control": false,
                    "comments":"test"
                }
                ]
                """;

        //WHEN & THEN
        mockMvc.perform(get("/api/evaluation"))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));
    }

    @DirtiesContext
    @Test
    void addNewEvaluation() throws Exception{
        //GIVEN
        when(idService.generateID()).thenReturn("1");

        String requestBody = """
                {
                    "category":"test",
                    "inCategoryNum":1,
                    "categoryImg":"test",
                    "title":"test",
                    "txtBlock":"test",
                    "subTxt":"test",
                    "subList":[],
                    "done":false,
                    "respPerson":"test",
                    "doneTil": "test",
                    "controlDone":"test",
                    "control": false,
                    "comments":"test"
                }
                """;
        String expectedJSON = """
                {
                    "id":"1",
                    "category":"test",
                    "inCategoryNum":1,
                    "categoryImg":"test",
                    "title":"test",
                    "txtBlock":"test",
                    "subTxt":"test",
                    "subList":[],
                    "done":false,
                    "respPerson":"test",
                    "doneTil": "test",
                    "controlDone":"test",
                    "control": false,
                    "comments":"test"
                }
                """;
        //WHEN
        mockMvc.perform(
                post("/api/evaluation")
                        .header(HttpHeaders.CONTENT_TYPE,MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));

        //THEN
    }

    @DirtiesContext
    @Test
    void deleteEvaluation() throws Exception{

        evaluationRepo.save(new Evaluation(
                "1",
                "test",
                1,
                "test",
                "test",
                "test",
                "test",
                List.of(),
                false,
                "test",
                "test",
                "test",
                false,
                "test"));

        this.mockMvc.perform(MockMvcRequestBuilders
                .delete("/api/evaluation/{id}","1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

    }
}