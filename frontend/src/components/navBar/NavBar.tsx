import './NavBarStyled.css';
import React from "react";
import SideBar from "./SideBar";
import ReactLogo from '../../img/Das-GefahrometerTransparent.svg';

type NavBarProps ={
    loggedIn :string;
}
export default function NavBar(props: NavBarProps){

    return (
        <nav>
            {props.loggedIn && <div className="App" id="outer-container">
                <SideBar pageWrapID={"page-wrap"} outerContainerId={"outer-container"} />
            </div>}
            <img className={"logo"} src={ReactLogo} alt={"Logo"} />
        </nav>


    );



}