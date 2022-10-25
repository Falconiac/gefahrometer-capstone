import {useEffect, useState} from "react";
import axios from "axios";

export default function useUsers(){

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers()
    },[])

    const getUsers = () =>{
        axios.get("/api/user")
            .then((response )=>{return response.data})
            .then((users)=> setUsers(users))
            .catch(error => {console.log(error)})

    }

    return(
        {users, getUsers}
        )

}