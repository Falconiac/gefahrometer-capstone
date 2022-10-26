package de.neuefische.backend.service;

import de.neuefische.backend.model.AppUser;
import de.neuefische.backend.repository.UserRepo;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class AppUserServiceTest {

    UserRepo userRepo = mock(UserRepo.class);

    IdService idService = mock(IdService.class);

    private final UserService userService = new UserService(userRepo, idService);

    @Test
    void getAllUserTest() {
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
    void addUserTest() {
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

    @Test
    void deleteUserTest() throws Exception {

        AppUser user1 = AppUser.builder().id("1").companyName("Test1").build();

        //Given
        when(userRepo.findById("1")).thenReturn(Optional.ofNullable(user1));

        //When
        userService.deleteUser("1");

        //Then
        assert user1 != null;
        verify(userRepo).delete(user1);

    }
}