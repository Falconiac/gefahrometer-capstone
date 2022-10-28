import {NavLink} from "react-router-dom";

export default function Landingpage(){
    return(
        <>

        <h1>Gefahrometer</h1>

            <NavLink to={"/admin"}>Zentrum der Macht</NavLink>
            <NavLink to={"/dangerZone"}>Beurteilungsverwaltung</NavLink>
        </>
    )
}