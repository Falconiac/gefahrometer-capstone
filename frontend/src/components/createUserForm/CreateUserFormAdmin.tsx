import "./CreateUserFormStyled.css";
import {ChangeEvent, FormEvent, useState} from "react";
import User from "../../model/User";
import axios from "axios";


const url = "/api/user"

type CreateUserFormProps = {
    reloadUsers : () => void;
}

export default function CreateUserFormAdmin(props: CreateUserFormProps){

    const [formSite, setFormSite] = useState(0);

    const emptyUser : User = {
        mail : "",
        accountName : "",
        password : "",
        manageFirstName : "",
        manageLastName : "",
        companyName : "",
        companyStreet : "",
        companyZip : "",
        companyLocation : "",
        employees : [],
        medicalCareName : "",
        medicalCareStreet : "",
        medicalCareZip : "",
        medicalCareLocation : ""
    }

    const [user, setUser] = useState(emptyUser);

    function handleChange(event : ChangeEvent<HTMLInputElement>){

    const name = event.target.name;
    const newValue = event.target.value;

    setUser((prevUser) => ({...prevUser,
    [name]:newValue}))

    }

    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios.post(url, {...user})
            .then(props.reloadUsers)
        }


        return(
        <section className={"formSection"}>

        <form className={"userForm"} onSubmit={handleSubmit}>

            {formSite === 0 && <article>
            <label htmlFor={"mail"}>Mail:
                <input
                type={"email"}
                name={"mail"}
                onChange={handleChange}
                value={user.mail}
                placeholder={"zum@beispiel.de"}
                />
            </label>
                    <p>{formSite}</p>
                <button onClick={(event)=>{
                    event.preventDefault();
                    setFormSite(formSite+1)
                }}>Weiter</button>
            </article>}

            {formSite === 1 && <article>
            <label htmlFor={"accountName"}>Benutzername:
                <input
                    type={"text"}
                    name={"accountName"}
                    onChange={handleChange}
                    value={user.accountName}
                    placeholder={"Benutzername"}
                />
            </label>

                <label htmlFor={"password"}>Passwort:
                    <input
                        type={"password"}
                        name={"password"}
                        onChange={handleChange}
                        value={user.password}
                        placeholder={"XxXxXxXxX"}
                    />
                </label>
                <button onClick={(event)=>{
                    event.preventDefault();
                    setFormSite(formSite-1)
                }}>Zurück</button>
                <button onClick={(event)=>{
                    event.preventDefault();
                    setFormSite(formSite+1)
                }}>Weiter</button>
            </article>}

            {formSite === 2 && <article>
            <label htmlFor={"manageFirstName"}>Vorname:
                <input
                    type={"text"}
                    name={"manageFirstName"}
                    onChange={handleChange}
                    value={user.manageFirstName}
                    placeholder={"Max"}
                />
            </label>
            <label htmlFor={"manageLastName"}>Nachname:
                <input
                    type={"text"}
                    name={"manageLastName"}
                    onChange={handleChange}
                    value={user.manageLastName}
                    placeholder={"Mustermann"}
                />
            </label>
            <label htmlFor={"companyName"}>Firmenname:
                <input
                    type={"text"}
                    name={"companyName"}
                    onChange={handleChange}
                    value={user.companyName}
                    placeholder={"Musterfirma"}
                />
            </label>
            <label htmlFor={"companyStreet"}>Straße und Hausnummer:
                <input
                    type={"text"}
                    name={"companyStreet"}
                    onChange={handleChange}
                    value={user.companyStreet}
                    placeholder={"Musterstraße 1"}
                />
            </label>
            <label htmlFor={"companyZip"}>Plz:
                <input
                    type={"text"}
                    name={"companyZip"}
                    onChange={handleChange}
                    value={user.companyZip}
                    placeholder={"12345"}
                />
            </label>
            <label htmlFor={"companyLocation"}>Ort:
                <input
                    type={"text"}
                    name={"companyLocation"}
                    onChange={handleChange}
                    value={user.companyLocation}
                    placeholder={"Musterhausen"}
                />
            </label>
                <button onClick={(event)=>{
                    event.preventDefault();
                    setFormSite(formSite-1)
                }}>Zurück</button>
                <button onClick={(event)=>{
                    event.preventDefault();
                    setFormSite(formSite+1)
                }}>Weiter</button>

            </article>}

            {formSite === 3 && <article>
            <label htmlFor={"medicalCareName"}>Betriebsarzt:
                <input
                    type={"text"}
                    name={"medicalCareName"}
                    onChange={handleChange}
                    value={user.medicalCareName}
                    placeholder={"Dr. Zufall"}
                />
            </label>
            <label htmlFor={"medicalCareStreet"}>Straße und Hausnummer:
                <input
                    type={"text"}
                    name={"medicalCareStreet"}
                    onChange={handleChange}
                    value={user.medicalCareStreet}
                    placeholder={"Zufallsplatz 2"}
                />
            </label>
            <label htmlFor={"medicalCareZip"}>Plz:
                <input
                    type={"text"}
                    name={"medicalCareZip"}
                    onChange={handleChange}
                    value={user.medicalCareZip}
                    placeholder={"54321"}
                />
            </label>
            <label htmlFor={"medicalCareLocation"}>Ort:
                <input
                    type={"text"}
                    name={"medicalCareLocation"}
                    onChange={handleChange}
                    value={user.medicalCareLocation}
                    placeholder={"Zufallhausen"}
                />
            </label>
            <button onClick={(event)=>{
                    event.preventDefault();
                    setFormSite(formSite-1)
                }}>Zurück</button>
                <input type="submit"/>
            </article>}

        </form>
        </section>
        )

}