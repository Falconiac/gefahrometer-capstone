import User from "../../model/User";
import './DangerZoneStyled.css';
import {FiPlus,FiDatabase} from "react-icons/fi";
import React from "react";

type DangerZoneProps = {
    thisUser : User;
}

export default function DangerZone(props: DangerZoneProps){


    return (
        <main className={"main"}>

            <article className={"greeting"}>
        <h2>Hallo {props.thisUser.accountName} !</h2>
            </article>

            <article className={"addEvaArea"}>
                <p>Hier können Sie eine neue Gefährdungsbeurteilung erstellen:</p>
                <a className="regularBTN" href="#/userCreateNewEva">
                    <FiPlus/> Neue Beurteilung
                </a>
            </article>

            <article className={"seeEvaArea"}>
                <p>Hier kommen Sie zu Ihren bereits erstellten Gefährdungsbeurteilungen:</p>
                <a className="regularBTN" href="#/evaUserArea">
                    <FiDatabase/> Beurteilungen
                </a>
            </article>


        </main>
    )
}