package de.neuefische.backend.service;

import de.neuefische.backend.model.AppUser;
import de.neuefische.backend.model.UserDTO;
import de.neuefische.backend.repository.UserRepo;
import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class AppUserServiceTest {

    UserRepo userRepo = mock(UserRepo.class);

//    IdService idService = mock(IdService.class);
    PasswordEncoder passwordEncoder;

    private final UserService userService = new UserService(userRepo, passwordEncoder);

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
        UserDTO appUser1 = UserDTO.builder()
                .accountName("Test")
                .build();

        String expected = "Test";

        when(userRepo.save(any())).thenReturn(AppUser.builder()
                .accountName("Test")
                .build());

        //WHEN
        String actual = (appUser1.getAccountName());

        //THEN
        assertEquals(expected, actual);

    }

    @Test
    void deleteUserTest() throws Exception {

        AppUser user1 = AppUser.builder().accountName("1").companyName("Test1").build();

        //Given
        when(userRepo.findById("1")).thenReturn(Optional.ofNullable(user1));

        //When
        userService.deleteUser("1");

        //Then
        assert user1 != null;
        verify(userRepo).delete(user1);

    }
}