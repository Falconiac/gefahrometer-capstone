import User from "../../model/User";



type EvaUserProps ={
    thisUser : User;
}

export default function EvaUserArea(props: EvaUserProps){

    return(
        <main>
            <h2>Gespeicherte Eva's von {props.thisUser.accountName}</h2>

        </main>
    )
}