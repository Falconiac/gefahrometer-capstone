import'./LoginFieldStyled.css';

export default function LoginField(){
    return(
        <article className={"loginField"}>
            <h2>Login</h2>
            <form>
                <label htmlFor={"username"}>Benutzername:
                    <input
                        type={"test"}
                        name={"username"}
                        value={""}
                        placeholder={"max@mustermann.de"}
                    />
                </label>

                <label htmlFor={"password"}>Passwort:
                    <input
                        type={"password"}
                        name={"password"}
                        value={""}
                        placeholder={"Passwort"}
                    />
                </label>

                <input type={"submit"}/>

            </form>
        </article>
    )
}