import './NavBarStyled.css';
import React from "react";
import SideBar from "./SideBar";
import ReactLogo from '../../img/Das-GefahrometerTransparent.svg';


export default function NavBar(){

    return (
        <nav>
        <div className="App" id="outer-container">
            <SideBar pageWrapID={"page-wrap"} outerContainerId={"outer-container"} />
        </div>
            <img className={"logo"} src={ReactLogo} alt={"Logo"} />
        </nav>


    );



}