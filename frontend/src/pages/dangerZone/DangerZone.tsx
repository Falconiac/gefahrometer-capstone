import {NavLink} from "react-router-dom";

export default function DangerZone(){
    return (
        <>
        <h2>Welcome to hell !!!</h2>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/admin"}>Zentrum der Macht</NavLink>

        </>
    )
}