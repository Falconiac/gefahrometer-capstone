package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    private String mail;
    private String accountName;
    private String password;
    private String manageFirstName;
    private String manageLastName;
    private String companyName;
    private String companyStreet;
    private String companyZip;
    private String companyLocation;
    private List<String> employees;
    private String medicalCareName;
    private String medicalCareStreet;
    private String medicalCareZip;
    private String medicalCareLocation;


}
