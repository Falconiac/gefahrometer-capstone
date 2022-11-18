import User from "../../model/User";
import {useEffect, useState} from "react";
import useUsers from "../../hooks/useUsers";
import axios from "axios";
import UsersEva from "../../model/UsersEva";
import UsersEvaCard from "../../components/usersEvaCard/UsersEvaCard";
import './EvaUserAreaStyled.css';



type EvaUserProps ={
    thisUser : User;
}

export default function EvaUserArea(props: EvaUserProps){

    const [userEvas, setUserEvas] = useState([]);
    const{me} = useUsers();

    useEffect(()=>{
        getAllUserEvasForThisUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userEvas])

    const getAllUserEvasForThisUser = () =>{
        axios.get("/api/userseva/"+me)
            .then((response )=>{return response.data})
            .then((userEvas)=> setUserEvas(userEvas))
            .catch(error => {console.log(error)})
    }

    return(
        <main className={"evaUserAreaMain"}>
            <h2>Gespeicherte Gefährdungsbeurteilungen</h2>

            {userEvas.map((ue:UsersEva)=>{
                return(
                   <UsersEvaCard key={ue.evaName} eva={ue} user={props.thisUser}/>
                )
            })}

        </main>
    )
}