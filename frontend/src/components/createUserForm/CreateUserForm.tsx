import "./CreateUserFormStyled.css";
import {ChangeEvent, FormEvent, useState} from "react";
import User from "../../model/User";
import axios from "axios";


const url = "/api/user"


export default function CreateUserForm(){

    const [formNum, setFormNum] = useState(0);

    const emptyNewUser : User = {
        mail : "",
        accountName : "",
        passwordHash : "",
        manageFirstName : "",
        manageLastName : "",
        companyName : "",
        companyStreet : "",
        companyZip : "",
        companyLocation : "",
        employee1 : "",
        employee2 : "",
        employee3 : "",
        employee4 : "",
        employee5 : "",
        medicalCareName : "",
        medicalCareStreet : "",
        medicalCareZip : "",
        medicalCareLocation : ""
    }


    const [newUser, setNewUser] = useState(emptyNewUser);

    function handleChange(event : ChangeEvent<HTMLInputElement>){

        const name = event.target.name;
        const newValue = event.target.value;

        setNewUser((prevUser) => ({...prevUser,
            [name]:newValue}))

    }

    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios.post(url + "/register", {...newUser})
    }

    return(
        <section className={"formSection"}>

            <form className={"userForm"} onSubmit={handleSubmit}>

                {formNum === 0 && <article>
                    <h2>Registrierung</h2>
                    <label htmlFor={"mail"}>Mail:
                        <input
                            type={"email"}
                            name={"mail"}
                            onChange={handleChange}
                            value={newUser.mail}
                            placeholder={"zum@beispiel.de"}
                        />
                    </label>
                    <button onClick={(event)=>{
                        event.preventDefault();
                        setFormNum(formNum+1)
                    }}>Weiter</button>
                </article>}

                {formNum === 1 && <article>
                    <label htmlFor={"accountName"}>Benutzername:
                        <input
                            type={"text"}
                            name={"accountName"}
                            onChange={handleChange}
                            value={newUser.accountName}
                            placeholder={"Benutzername"}
                        />
                    </label>

                    <label htmlFor={"passwordHash"}>Passwort:
                        <input
                            type={"password"}
                            name={"passwordHash"}
                            onChange={handleChange}
                            value={newUser.passwordHash}

                        />
                    </label>
                    <button onClick={(event)=>{
                        event.preventDefault();
                        setFormNum(formNum-1)
                    }}>Zur??ck</button>
                    <button onClick={(event)=>{
                        event.preventDefault();
                        setFormNum(formNum+1)
                    }}>Weiter</button>
                </article>}

                {formNum === 2 && <article>
                    <label htmlFor={"manageFirstName"}>Vorname:
                        <input
                            type={"text"}
                            name={"manageFirstName"}
                            onChange={handleChange}
                            value={newUser.manageFirstName}
                            placeholder={"Max"}
                        />
                    </label>
                    <label htmlFor={"manageLastName"}>Nachname:
                        <input
                            type={"text"}
                            name={"manageLastName"}
                            onChange={handleChange}
                            value={newUser.manageLastName}
                            placeholder={"Mustermann"}
                        />
                    </label>
                    <label htmlFor={"companyName"}>Firmenname:
                        <input
                            type={"text"}
                            name={"companyName"}
                            onChange={handleChange}
                            value={newUser.companyName}
                            placeholder={"Musterfirma"}
                        />
                    </label>
                    <label htmlFor={"companyStreet"}>Stra??e und Hausnummer:
                        <input
                            type={"text"}
                            name={"companyStreet"}
                            onChange={handleChange}
                            value={newUser.companyStreet}
                            placeholder={"Musterstra??e 1"}
                        />
                    </label>
                    <label htmlFor={"companyZip"}>Plz:
                        <input
                            type={"text"}
                            name={"companyZip"}
                            onChange={handleChange}
                            value={newUser.companyZip}
                            placeholder={"12345"}
                        />
                    </label>
                    <label htmlFor={"companyLocation"}>Ort:
                        <input
                            type={"text"}
                            name={"companyLocation"}
                            onChange={handleChange}
                            value={newUser.companyLocation}
                            placeholder={"Musterhausen"}
                        />
                    </label>
                    <button onClick={(event)=>{
                        event.preventDefault();
                        setFormNum(formNum-1)
                    }}>Zur??ck</button>
                    <button onClick={(event)=>{
                        event.preventDefault();
                        setFormNum(formNum+1)
                    }}>Weiter</button>

                </article>}

                {formNum === 3 && <article>
                    <label htmlFor={"medicalCareName"}>Betriebsarzt:
                        <input
                            type={"text"}
                            name={"medicalCareName"}
                            onChange={handleChange}
                            value={newUser.medicalCareName}
                            placeholder={"Dr. Zufall"}
                        />
                    </label>
                    <label htmlFor={"medicalCareStreet"}>Stra??e und Hausnummer:
                        <input
                            type={"text"}
                            name={"medicalCareStreet"}
                            onChange={handleChange}
                            value={newUser.medicalCareStreet}
                            placeholder={"Zufallsplatz 2"}
                        />
                    </label>
                    <label htmlFor={"medicalCareZip"}>Plz:
                        <input
                            type={"text"}
                            name={"medicalCareZip"}
                            onChange={handleChange}
                            value={newUser.medicalCareZip}
                            placeholder={"54321"}
                        />
                    </label>
                    <label htmlFor={"medicalCareLocation"}>Ort:
                        <input
                            type={"text"}
                            name={"medicalCareLocation"}
                            onChange={handleChange}
                            value={newUser.medicalCareLocation}
                            placeholder={"Zufallhausen"}
                        />
                    </label>
                    <button onClick={(event)=>{
                        event.preventDefault();
                        setFormNum(formNum-1)
                    }}>Zur??ck</button>
                    <label htmlFor={"submit"}><input name={"submit"} type="submit"/></label>
                </article>}

            </form>
        </section>
    )

}