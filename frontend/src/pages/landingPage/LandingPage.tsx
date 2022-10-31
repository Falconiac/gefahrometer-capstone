import LoginField from "../../components/loginField/LoginField";
import CreateUserForm from "../../components/createUserForm/CreateUserForm";
import {useState} from "react";
import './LandingPageStyled.css';

export default function Landingpage(){

    const [screen, setScreen]=useState(true);

    return(
        <section>

            <h2 className={"toggle"} onClick={()=>{
                setScreen(!screen);}}>{screen? "Registrieren" : "Abbrechen"}</h2>


            {screen && <LoginField/>}
            {!screen && <CreateUserForm/>}

        </section>
    )
}