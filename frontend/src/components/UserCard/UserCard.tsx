import User from "../../model/User";
import './UserComponentStyled.css';
import axios from "axios";


type UserComponentProps = {
    user : User
}
export default function UserCard(props:UserComponentProps){

    const deleteString = "/api/user/" + props.user.id;

    function deleteUser(id:string){
        axios.delete(id).then(()=>{window.location.reload()})
    }


    return(
        <article>
            <h2>{props.user.companyName}</h2>
            <button onClick={()=>deleteUser(deleteString) }> Löschen</button>
            <p>{props.user.id}</p>
            <p>Straße: {props.user.companyStreet}</p>
            <p>PLZ Ort{props.user.companyZip +" "+props.user.companyLocation}</p>
            <p>Verantwortlicher: {props.user.manageFirstName +" "+ props.user.manageLastName}</p>
            <p>Benutzername: {props.user.accountName}</p>
            <p>Mailadresse: {props.user.mail}</p>
            <p>{props.user.password}</p>
            <p>Betriebsarzt: {props.user.medicalCareName}</p>
            <p>Anschrift:</p>
            <p>{props.user.medicalCareStreet}</p>
            <p>{props.user.medicalCareZip + " " + props.user.medicalCareLocation}</p>
            <p>{props.user.companyStreet}</p>
        </article>
    )

}











