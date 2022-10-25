import User from "../../model/User";
import './UserComponentStyled.css';
import axios from "axios";


type UserComponentProps = {
    user : User
    reloadUsers : () => void;
}
export default function UserCard(props:UserComponentProps){

    const deleteString = "/api/user/" + props.user.id;

    function deleteUser(id:string){
        axios.delete(id).then(props.reloadUsers)
    }


    return(
        <article className={"userCard"}>
                <p>{props.user.companyName}</p>
                <p>{props.user.id}</p>
            <button onClick={()=>deleteUser(deleteString) }> Löschen</button>
        </article>
    )

}











