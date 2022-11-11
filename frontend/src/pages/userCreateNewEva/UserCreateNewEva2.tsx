import User from "../../model/User";
import {NavLink} from "react-router-dom";
import Evaluation from "../../model/Evatuation";

type UserCreateNewEva2Props ={
    thisUser : User;
    catalog : Map<number,Evaluation[]>;
}

export default function UserCreateNewEva2(props: UserCreateNewEva2Props){

    console.log(props.thisUser);
    console.log("Catalog: "+props.catalog);

    return(
        <>
        <h2>User Create new Eva 2</h2>
            {<p>{props.catalog.size}</p>}

    <NavLink to={"/userCreateNewEva"}>Zurück...</NavLink>
        </>
)
}