
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


    @DirtiesContext
    @Test
    void getAllUserShouldReturnAllItemsFromDB() throws Exception {
        //GIVEN
        userRepo.save(new AppUser("Test1", "a@b.de",
                "$2a$10$gyY99R.acTIFTkdP7gw41OYBfgQPHvHV8kF8d9HMHOjGi4FbnGqaG",
                "Test1",
                "Test1",
                "Test1",
                "Test1",
                "Test1",
                "Test1",
                "Emp1",
                "Emp2",
                "Emp3",
                "Emp4",
                "Emp5",
                "Test1",
                "Test1",
                "Test1",
                "Test1",
                List.of("USER")
                ));

        String expectedJSON = """
                [
                {
                    "accountName":"Test1",
                    "mail":"a@b.de",
                    "passwordHash":"$2a$10$gyY99R.acTIFTkdP7gw41OYBfgQPHvHV8kF8d9HMHOjGi4FbnGqaG",
                    "manageFirstName":"Test1",
                    "manageLastName":"Test1",
                    "companyName":"Test1",
                    "companyStreet":"Test1",
                    "companyZip":"Test1",
                    "companyLocation":"Test1",
                    "employee1": "Emp1",
                    "employee2": "Emp2",
                    "employee3": "Emp3",
                    "employee4": "Emp4",
                    "employee5": "Emp5",
                    "medicalCareName":"Test1",
                    "medicalCareStreet":"Test1",
                    "medicalCareZip":"Test1",
                    "medicalCareLocation":"Test1",
                    "roles": ["USER"]
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
        String requestBody = """
                {
                "accountName":"Test2",
                "mail":"a@b.de",
                "passwordHash":"$2a$10$gyY99R.acTIFTkdP7gw41OYBfgQPHvHV8kF8d9HMHOjGi4FbnGqaG",
                "manageFirstName":"Test1",
                "manageLastName":"Test1",
                "companyName":"Test1",
                "companyStreet":"Test1",
                "companyZip":"Test1",
                "companyLocation":"Test1",
                "employee1": "Emp1",
                "employee2": "Emp2",
                "employee3": "Emp3",
                "employee4": "Emp4",
                "employee5": "Emp5",
                "medicalCareName":"Test1",
                "medicalCareStreet":"Test1",
                "medicalCareZip":"Test1",
                "medicalCareLocation":"Test1"
                }
                """;


        //WHEN & THEN
        mockMvc.perform(
                post("/api/user/register")
                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody))
                .andExpect(status().isOk())
                .andExpect(content().string("Test2"));

    }

    @DirtiesContext
    @Test
    void deleteUser() throws Exception{
        userRepo.save(new AppUser("Test1", "a@b.de",
                "$2a$10$gyY99R.acTIFTkdP7gw41OYBfgQPHvHV8kF8d9HMHOjGi4FbnGqaG",
                "Test1",
                "Test1",
                "Test1",
                "Test1",
                "Test1",
                "Test1",
                "Test1",
                "Emp2",
                "Emp3",
                "Emp4",
                "Emp5",
                "Test1",
                "Test1",
                "Test1",
                "Test1",
                List.of("USER")
        ));

        this.mockMvc.perform(MockMvcRequestBuilders
                .delete("/api/user/Test1","Test1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }
}
