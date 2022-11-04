import User from "../../model/User";

type updateUserDataProps = {
    thisUser : User;
}

export default function UpdateUserData(props: updateUserDataProps){


    return(
        <section>
        <h2>Hallo {props.thisUser.accountName}</h2>
            <p>Hier können Sie Ihre Daten aktualisieren:</p>
        </section>

    )
}