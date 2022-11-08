import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";
import {FiLogOut, FiSettings, FiPlus, FiDatabase} from "react-icons/fi";
import axios from "axios";
import useUsers from "../../hooks/useUsers";

type SideBarProps = {
    pageWrapID : string;
    outerContainerId : string;
    loggedIn: string;
}

export default function SideBar(props:SideBarProps){

    const {setMe} = useUsers();

    let isMe : boolean;

    isMe = props.loggedIn === "admin";

    function handleLogout(){
        axios.get("api/user/logout")
            .then(() => setMe(""))
    }

    return (
        <Menu>

            {isMe && <a className="menu-item" href="#/admin">
                Admin
            </a>}

            <a className="menu-item" href="#/dangerZone">
                Hauptseite
            </a>

            <a className="menu-item" href="#/evaUserArea">
                <FiDatabase/> Beurteilungen
            </a>

            <a className="menu-item" href="#/userCreateNewEva">
                <FiPlus/> Neue Beurteilung
            </a>

            <a className="menu-item" href="#/updateUser">
                <FiSettings/> Ihre Daten
            </a>

            <a href={"/"} id={"logout"} className="menu-item" onClick={()=>{
                handleLogout();
                window.location.reload();
            }}>
                <FiLogOut /> Logout
            </a>

        </Menu>
    );
}