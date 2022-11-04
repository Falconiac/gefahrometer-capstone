
import React, {useState} from "react";
import './LandingPageStyled.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import CreateUserForm from "../../components/createUserForm/CreateUserForm";

type LandingPageProps = {
    setUser : (me : string) => void;
}

export default function Landingpage(props : LandingPageProps){

    const navigate = useNavigate();

    const [toggleView, setToggleView ] = useState(true);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(){
        axios.get("api/user/login", {auth: {username, password}})
            .then(response => response.data)
            .then((data) => props.setUser(data))
            .then(() => setUsername(""))
            .then(() => setPassword(""))
            .then(()=>{navigate("/dangerZone")})
            .catch((error) => console.log(error));
    }

    return(
        <section>
            {toggleView && <article className={"loginField"}>
                <h2>Login</h2>

                    <label htmlFor={"username"}>Benutzername:
                        <input
                            type={"text"}
                            name={"username"}
                            value={username}
                            placeholder={"mustermax123"}
                            onChange={event => setUsername(event.target.value)}
                        />
                    </label>

                    <label htmlFor={"password"}>Passwort:
                        <input
                            type={"text"}
                            name={"password"}
                            value={password}
                            placeholder={"Passwort"}
                            onChange={event => setPassword(event.target.value)}
                        />
                    </label>

                    <button onClick={()=>{handleLogin()}}>Login</button>


            </article>}
            {!toggleView && <CreateUserForm/>}

            <h3 onClick={()=>{setToggleView(!toggleView)}}>
                {toggleView ? "Jetzt registrieren" : "Direkt einloggen"}
            </h3>
        </section>
    )
}