import User from "../../model/User";


type EvaUserProps ={
    thisUser : User;
}

export default function EvaUserArea(props: EvaUserProps){
    return(
        <main>
            <h2>Eva User Area</h2>
            <p>FOR: {props.thisUser.accountName}</p>

        </main>
    )
}