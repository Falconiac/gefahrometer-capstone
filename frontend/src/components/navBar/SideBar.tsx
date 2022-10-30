import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";
import { FiLogOut } from "react-icons/fi";




type SideBarProps = {
    pageWrapID : string;
    outerContainerId : string;
}



export default function SideBar(props:SideBarProps){

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

            <a id={"logout"} className="menu-item" href="#/">
                Logout <FiLogOut />
            </a>

        </Menu>
    );
}