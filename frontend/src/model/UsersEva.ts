import Evaluation from "./Evaluation";

type UserEva={
    mail : string;
    accountName : string;
    manageFirstName : string;
    manageLastName : string;
    companyName : string;
    companyStreet : string;
    companyZip : string;
    companyLocation : string;
    employee1: string;
    employee2: string;
    employee3: string;
    employee4: string;
    employee5: string;
    medicalCareName : string;
    medicalCareStreet : string;
    medicalCareZip : string;
    medicalCareLocation : string;
    evaName: string;
    forWhom:string;
    forWhomStreet:string;
    forWhomZip:string;
    forWhomLocation: string;
    evaCatalog:Array<Evaluation>;
}

export default UserEva;