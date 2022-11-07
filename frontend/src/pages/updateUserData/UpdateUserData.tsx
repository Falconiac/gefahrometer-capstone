import User from "../../model/User";
import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";

type updateUserDataProps = {
    thisUser : User;
}

export default function UpdateUserData(props: updateUserDataProps){


    const [toUpdateUser, setToUpdateUser] = useState(props.thisUser)

    function handleChange(event : ChangeEvent<HTMLInputElement>){

        const name = event.target.name;
        const newValue = event.target.value;

        setToUpdateUser((toUpdateUser) => ({...toUpdateUser,
            [name]:newValue}))
    }

    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(toUpdateUser);
        axios.post('/api/user/update', toUpdateUser)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        
    }

    return(
        <section className={"formSection"}>
            <form className={"userForm"} onSubmit={handleSubmit}>


                    <h2>Hallo {props.thisUser.accountName}</h2>
                <p>Hier können Sie Ihre Daten aktualisieren:</p>



                    <label htmlFor={"manageFirstName"}>Vorname:
                        <input
                            type={"text"}
                            name={"manageFirstName"}
                            onChange={handleChange}
                            value={toUpdateUser.manageFirstName}
                        />
                    </label>
                    <label htmlFor={"manageLastName"}>Nachname:
                        <input
                            type={"text"}
                            name={"manageLastName"}
                            onChange={handleChange}
                            value={toUpdateUser.manageLastName}
                        />
                    </label>
                    <label htmlFor={"companyName"}>Firmenname:
                        <input
                            type={"text"}
                            name={"companyName"}
                            onChange={handleChange}
                            value={toUpdateUser.companyName}
                        />
                    </label>
                    <label htmlFor={"companyStreet"}>Straße und Hausnummer:
                        <input
                            type={"text"}
                            name={"companyStreet"}
                            onChange={handleChange}
                            value={toUpdateUser.companyStreet}
                        />
                    </label>
                    <label htmlFor={"companyZip"}>Plz:
                        <input
                            type={"text"}
                            name={"companyZip"}
                            onChange={handleChange}
                            value={toUpdateUser.companyZip}
                        />
                    </label>
                    <label htmlFor={"companyLocation"}>Ort:
                        <input
                            type={"text"}
                            name={"companyLocation"}
                            onChange={handleChange}
                            value={toUpdateUser.companyLocation}
                        />
                    </label>

                <label htmlFor={"employee1"}>Mitarbeiter 1:
                    <input
                        type={"text"}
                        name={"employee1"}
                        onChange={handleChange}
                        value={toUpdateUser.employee1}
                    />
                </label>

                <label htmlFor={"employee2"}>Mitarbeiter 2:
                    <input
                        type={"text"}
                        name={"employee2"}
                        onChange={handleChange}
                        value={toUpdateUser.employee2}
                    />
                </label>

                <label htmlFor={"employee3"}>Mitarbeiter 3:
                    <input
                        type={"text"}
                        name={"employee3"}
                        onChange={handleChange}
                        value={toUpdateUser.employee3}
                    />
                </label>

                <label htmlFor={"employee4"}>Mitarbeiter 4:
                    <input
                        type={"text"}
                        name={"employee4"}
                        onChange={handleChange}
                        value={toUpdateUser.employee4}
                    />
                </label>

                <label htmlFor={"employee5"}>Mitarbeiter 5:
                    <input
                        type={"text"}
                        name={"employee5"}
                        onChange={handleChange}
                        value={toUpdateUser.employee5}
                    />
                </label>

                    <label htmlFor={"medicalCareName"}>Betriebsarzt:
                        <input
                            type={"text"}
                            name={"medicalCareName"}
                            onChange={handleChange}
                            value={toUpdateUser.medicalCareName}
                        />
                    </label>
                    <label htmlFor={"medicalCareStreet"}>Straße und Hausnummer:
                        <input
                            type={"text"}
                            name={"medicalCareStreet"}
                            onChange={handleChange}
                            value={toUpdateUser.medicalCareStreet}
                        />
                    </label>
                    <label htmlFor={"medicalCareZip"}>Plz:
                        <input
                            type={"text"}
                            name={"medicalCareZip"}
                            onChange={handleChange}
                            value={toUpdateUser.medicalCareZip}
                        />
                    </label>
                    <label htmlFor={"medicalCareLocation"}>Ort:
                        <input
                            type={"text"}
                            name={"medicalCareLocation"}
                            onChange={handleChange}
                            value={toUpdateUser.medicalCareLocation}
                        />
                    </label>

                <input type={"submit"}/>
            </form>
        </section>
    )
}