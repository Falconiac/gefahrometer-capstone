import './userCreateNewEvaStyled.css'
import User from "../../model/User";


type UserCreateNewEvaProps ={
    thisUser : User;
}

export default function UserCreateNewEva(props: UserCreateNewEvaProps){
    return(
        <main>
            <h2>User Create New Eva Site</h2>
            <p>FOR: {props.thisUser.accountName}</p>

        </main>
    )
}