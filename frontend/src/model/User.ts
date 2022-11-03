type User={
    mail : string;
    accountName : string;
    passwordHash : string;
    manageFirstName : string;
    manageLastName : string;
    companyName : string;
    companyStreet : string;
    companyZip : string;
    companyLocation : string;
    employees : Array<string>;
    medicalCareName : string;
    medicalCareStreet : string;
    medicalCareZip : string;
    medicalCareLocation : string;
}

export default User;