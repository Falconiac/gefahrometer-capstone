package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.util.List;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AppUserDTO {


    @Id
    private String accountName;

    private String mail;
    private String passwordHash;
    private String manageFirstName;
    private String manageLastName;
    private String companyName;
    private String companyStreet;
    private String companyZip;
    private String companyLocation;
    private String employee1;
    private String employee2;
    private String employee3;
    private String employee4;
    private String employee5;
    private String medicalCareName;
    private String medicalCareStreet;
    private String medicalCareZip;
    private String medicalCareLocation;
    private List<String> roles;

}
