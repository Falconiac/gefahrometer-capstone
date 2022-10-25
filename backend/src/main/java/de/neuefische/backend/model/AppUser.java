package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "user")
public class AppUser {

    @Id
    private String id;


    private String mail;
    private String accountName;
    private String password;
    private String manageFirstName;
    private String manageLastName;
    private String companyName;
    private String companyStreet;
    private String companyZip;
    private String companyLocation;
    private List<String> employees = new ArrayList<>();
    private String medicalCareName;
    private String medicalCareStreet;
    private String medicalCareZip;
    private String medicalCareLocation;


}
