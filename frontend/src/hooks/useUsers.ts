import {useEffect, useState} from "react";
import axios from "axios";
import User from "../model/User";

export default function useUsers(){

    const thisUser : User = {
        mail : "",
        accountName : "",
        passwordHash : "",
        manageFirstName : "",
        manageLastName : "",
        companyName : "",
        companyStreet : "",
        companyZip : "",
        companyLocation : "",
        employee1 : "",
        employee2 : "",
        employee3 : "",
        employee4 : "",
        employee5 : "",
        medicalCareName : "",
        medicalCareStreet : "",
        medicalCareZip : "",
        medicalCareLocation : ""
    }


    const [me, setMe] = useState("")

    const [user, setUser] = useState(thisUser);

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getAllUsers()
    },[])

    useEffect(()=>{
        getOneUser()
    },[me])

    const getAllUsers = () =>{
        axios.get("/api/user")
            .then((response )=>{return response.data})
            .then((users)=> setUsers(users))
            .catch(error => {console.log(error)})
    }

    const getOneUser = () =>{
        axios.get("/api/user/" + me)
            .then((response )=>{return response.data})
            .then((user)=> setUser(user))
            .catch(error => {console.log(error)})
        console.log(user);
    }

    return(
        {users, getAllUsers, me, setMe, user}
        )

}