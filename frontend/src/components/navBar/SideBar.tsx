import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";
import { FiLogOut } from "react-icons/fi";
import axios from "axios";
import useUsers from "../../hooks/useUsers";

type SideBarProps = {
    pageWrapID : string;
    outerContainerId : string;
}

export default function SideBar(props:SideBarProps){

    const {setMe} = useUsers();

    function handleLogout(){
        axios.get("api/user/logout")
            .then(() => setMe(""))
    }

    return (
        <Menu>

            <a className="menu-item" href="#/">
                Home
            </a>
            <a className="menu-item" href="#/admin">
                Admin
            </a>
            <a className="menu-item" href="#/dangerZone">
                DangerZone
            </a>

            <a href={"/"} id={"logout"} className="menu-item" onClick={()=>{
                handleLogout();
                window.location.reload();
            }}>
                Logout <FiLogOut />
            </a>

        </Menu>
    );
}