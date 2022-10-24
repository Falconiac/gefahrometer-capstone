package de.neuefische.backend.service;

import de.neuefische.backend.model.User;
import de.neuefische.backend.repository.UserRepo;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class UserServiceTest {

    UserRepo userRepo = mock(UserRepo.class);

    IdService idService = mock(IdService.class);

    UserService userService = new UserService(userRepo, idService);


    @Test
    void getAllUser() {
        //GIVEN
        when(userRepo.findAll())
                .thenReturn(List.of(
                        new User("1", "a@b.de",
                                "Test",
                                "Test",
                                "Test",
                                "Test",
                                "Test",
                                "Test",
                                "Test",
                                "Test",
                                "Test",
                                "Test",
                                "Test",
                                "Test")
                ));


        //WHEN
        List<User> actual = userService.getAllUser();
        //Then
        List<User> expected = List.of(
                new User("1", "a@b.de",
                        "Test",
                        "Test",
                        "Test",
                        "Test",
                        "Test",
                        "Test",
                        "Test",
                        "Test",
                        "Test",
                        "Test",
                        "Test",
                        "Test")
        );

        verify(userRepo).findAll();
        assertEquals(expected, actual);
    }

    @Test
    void addUser() {
        User user1 = User.builder()
                .accountName("Test")
                .password("test")
                .build();

        User expectedUser = User.builder()
                .accountName("Test")
                .password("test")
                .build();

        when(userRepo.save(any())).thenReturn(User.builder()
                .accountName("Test")
                .password("test")
                .build());

        //WHEN
        User actual = userService.addUser(user1);

        //THEN
        assertEquals(expectedUser, actual);

    }
}