
package de.neuefische.backend.controller;

import de.neuefische.backend.model.AppUser;
import de.neuefische.backend.repository.UserRepo;
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
class AppUserControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private UserRepo userRepo;

    @MockBean
    private IdService idService;


    @DirtiesContext
    @Test
    void getAllUserShouldReturnAllItemsFromDB() throws Exception {
        //GIVEN
        userRepo.save(new AppUser("1", "a@b.de",
                "Test1",
                "Test1",
                "Test1",
                "Test1",
                "Test1",
                "Test1",
                "Test1",
                "Test1",
                List.of(),
                "Test1",
                "Test1",
                "Test1",
                "Test1"));

        String expectedJSON = """
                [
                {
                    "id":"1",
                    "mail":"a@b.de",
                    "accountName":"Test1",
                    "password":"Test1",
                    "manageFirstName":"Test1",
                    "manageLastName":"Test1",
                    "companyName":"Test1",
                    "companyStreet":"Test1",
                    "companyZip":"Test1",
                    "companyLocation":"Test1",
                    "employees": [],
                    "medicalCareName":"Test1",
                    "medicalCareStreet":"Test1",
                    "medicalCareZip":"Test1",
                    "medicalCareLocation":"Test1"
                }
                ]
                """;

        //WHEN & THEN
        mockMvc.perform(get("/api/user"))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));

    }

    @DirtiesContext
    @Test
    void addNewUser() throws Exception {
        //GIVEN
        when(idService.generateID()).thenReturn("1");

        String requestBody = """
                {
                    "mail":"a@b.de",
                    "accountName":"Test1",
                    "password":"Test1",
                    "manageFirstName":"Test1",
                    "manageLastName":"Test1",
                    "companyName":"Test1",
                    "companyStreet":"Test1",
                    "companyZip":"Test1",
                    "companyLocation":"Test1",
                    "employees":["Herbert"],
                    "medicalCareName":"Test1",
                    "medicalCareStreet":"Test1",
                    "medicalCareZip":"Test1",
                    "medicalCareLocation":"Test1"
                }
                """;

        String expectedJSON = """
                {
                    "id":"1",
                    "mail":"a@b.de",
                    "accountName":"Test1",
                    "password":"Test1",
                    "manageFirstName":"Test1",
                    "manageLastName":"Test1",
                    "companyName":"Test1",
                    "companyStreet":"Test1",
                    "companyZip":"Test1",
                    "companyLocation":"Test1",
                    "employees": ["Herbert"],
                    "medicalCareName":"Test1",
                    "medicalCareStreet":"Test1",
                    "medicalCareZip":"Test1",
                    "medicalCareLocation":"Test1"
                }
                """;

        //WHEN & THEN
        mockMvc.perform(
                post("/api/user")
                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));

    }

    @DirtiesContext
    @Test
    void deleteUser() throws Exception{
        userRepo.save(new AppUser("1", "a@b.de",
                "Test1",
                "Test1",
                "Test1",
                "Test1",
                "Test1",
                "Test1",
                "Test1",
                "Test1",
                List.of(),
                "Test1",
                "Test1",
                "Test1",
                "Test1"));

        this.mockMvc.perform(MockMvcRequestBuilders
                .delete("/api/user/{id}","1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }
}
