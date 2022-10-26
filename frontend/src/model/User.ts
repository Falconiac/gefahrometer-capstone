type User={
    id?:string;
    mail : string;
    accountName : string;
    password : string;
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