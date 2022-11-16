package de.neuefische.backend.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "usersEva")
public class UsersEva {

    @Id
    private String id;

    private String accountName;
    private String mail;
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
    private String evaName;
    private String forWhom;
    private String forWhomStreet;
    private String forWhomZip;
    private String forWhomLocation;
    private List<Evaluation> evaCatalog;

}
