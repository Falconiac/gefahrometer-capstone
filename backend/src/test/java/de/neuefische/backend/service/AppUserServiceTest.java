package de.neuefische.backend.service;

import de.neuefische.backend.model.AppUser;
import de.neuefische.backend.repository.UserRepo;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class AppUserServiceTest {

    UserRepo userRepo = mock(UserRepo.class);

    IdService idService = mock(IdService.class);

    UserService userService = new UserService(userRepo, idService);


    @Test
    void getAllUser() {
        //GIVEN
        when(userRepo.findAll())
                .thenReturn(List.of(
                        AppUser.builder()
                                .mail("a@b.de")
                                .build()
                ));


        //WHEN
        List<AppUser> actual = userService.getAllUser();
        //Then
        List<AppUser> expected = List.of(
                AppUser.builder()
                        .mail("a@b.de")
                        .build()
        );

        verify(userRepo).findAll();
        assertEquals(expected, actual);
    }

    @Test
    void addUser() {
        AppUser appUser1 = AppUser.builder()
                .accountName("Test")
                .password("test")
                .build();

        AppUser expectedAppUser = AppUser.builder()
                .accountName("Test")
                .password("test")
                .build();

        when(userRepo.save(any())).thenReturn(AppUser.builder()
                .accountName("Test")
                .password("test")
                .build());

        //WHEN
        AppUser actual = userService.addUser(appUser1);

        //THEN
        assertEquals(expectedAppUser, actual);

    }
}