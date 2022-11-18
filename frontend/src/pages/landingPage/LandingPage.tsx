
import React, {useState} from "react";
import './LandingPageStyled.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import CreateUserForm from "../../components/createUserForm/CreateUserForm";
import 'react-toastify/dist/ReactToastify.css' ;
import {toast} from "react-toastify";
import {FiGithub} from "react-icons/fi";



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
            .then(()=>{toast.dark("Login war erfolgreich")})
            .then(()=>{navigate("/dangerZone")})
            .catch(() => toast.dark("Login fehlgeschlagen ! Benutzername oder Passwort falsch"));
    }

    return(
        <section className={"logger"}>


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
                            type={"password"}
                            name={"password"}
                            value={password}
                            placeholder={"Passwort"}
                            onChange={event => setPassword(event.target.value)}
                        />
                    </label>

                    <button className="regularBTN" onClick={()=>{handleLogin()}}>Login</button>


            </article>}
            {!toggleView && <CreateUserForm/>}

            <h3 onClick={()=>{setToggleView(!toggleView)}}>
                {toggleView ? "Jetzt registrieren" : "Direkt einloggen"}
            </h3>


                <a href={"https://github.com/Falconiac/gefahrometer-capstone"}><FiGithub className={"gitIcon"}/><p>Besuchen Sie dieses Projekt auf GitHub </p></a>



        </section>
    )
}