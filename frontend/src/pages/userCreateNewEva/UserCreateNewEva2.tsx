import User from "../../model/User";
import {NavLink} from "react-router-dom";
import Evaluation from "../../model/Evaluation";
import "./UserCreateNewEva2Styled.css";
import {ChangeEvent, FormEvent, SyntheticEvent, useEffect, useState} from "react";
import UsersEva from "../../model/UsersEva";

type UserCreateNewEva2Props ={
    thisUser : User;
    catalog : Map<number,Evaluation[]>;
}

export default function UserCreateNewEva2(props: UserCreateNewEva2Props) {

    const emptyUserEva: UsersEva = {
        mail: props.thisUser.mail,
        accountName: props.thisUser.accountName,
        manageFirstName: props.thisUser.manageFirstName,
        manageLastName: props.thisUser.manageLastName,
        companyName: props.thisUser.companyName,
        companyStreet: props.thisUser.companyStreet,
        companyZip: props.thisUser.companyZip,
        companyLocation: props.thisUser.companyLocation,
        employee1: props.thisUser.employee1,
        employee2: props.thisUser.employee2,
        employee3: props.thisUser.employee3,
        employee4: props.thisUser.employee4,
        employee5: props.thisUser.employee5,
        medicalCareName: props.thisUser.medicalCareName,
        medicalCareStreet: props.thisUser.medicalCareStreet,
        medicalCareZip: props.thisUser.medicalCareZip,
        medicalCareLocation: props.thisUser.medicalCareLocation,
        evaName: "",
        forWhom: "",
        forWhomStreet: "",
        forWhomZip: "",
        forWhomLocation: "",
        evaCatalog: []
    }

    const [userEva, setUserEva] = useState<UsersEva>(emptyUserEva);

    const [qList, setQList] = useState(Array<Evaluation>)

    function findOutIndexOfEva(key: string) {
        for (let i = 0; i < qList.length; i++) {
            const categoryKey = userEva.evaCatalog[i].category + userEva.evaCatalog[i].inCategoryNum;
            if (categoryKey === key) {
                return i;
            }
        }
        return 0;
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const name = event.target.name;
        const newValue = event.target.value;

        setUserEva((prevUsersEva) => ({
            ...prevUsersEva,
            [name]: event.target.type === "checkbox" ? event.target.checked : newValue
        }))
    }

    function handleCatalogChange( key: string,event: ChangeEvent<HTMLInputElement>) {

        const name = event.target.name;
        const value = event.target.value;


        setUserEva((prevUserEva) => {

            const evaIndexToUpdate: number = findOutIndexOfEva(key);


            const updatedEva = {
                ...prevUserEva.evaCatalog[evaIndexToUpdate],
                [name]: event.target.type === "checkbox" ? event.target.checked : value
            };


            prevUserEva.evaCatalog[evaIndexToUpdate] = updatedEva;

            return { ...prevUserEva };
        });

    }

    function handleSelectChange( key: string,event: SyntheticEvent<HTMLSelectElement>) {

        const name = event.currentTarget.name;
        const value = event.currentTarget.value;


        setUserEva((prevUserEva) => {

            const evaIndexToUpdate: number = findOutIndexOfEva(key);


            const updatedEva = {
                ...prevUserEva.evaCatalog[evaIndexToUpdate],
                [name]: value
            };


            prevUserEva.evaCatalog[evaIndexToUpdate] = updatedEva;


            return { ...prevUserEva };
        });

    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(userEva)
    }

    useEffect(() => {

        const eveArray = Array.from(props.catalog, ([name, value]) => (value));
        const flattenedEvas = eveArray.flatMap(eva => eva);
        setQList(flattenedEvas);
        setUserEva((prevUserEva) => {
            return {...prevUserEva, evaCatalog: flattenedEvas}
        })
    }, [props.catalog])

    return (
        <main>

            <form className={"forWhomForm"} onSubmit={handleSubmit}>
                <label htmlFor={"evaName"}>Name der Gefährdungsbeurteilung:</label>
                <input
                    type={"text"}
                    name={"evaName"}
                    onChange={handleChange}
                    placeholder={`Beurteilungsname`}
                />
                <h2>Gefährdungsbeurteilung für:</h2>
                <label htmlFor={"forWhom"}>Name:</label>
                <input
                    type={"text"}
                    name={"forWhom"}
                    onChange={handleChange}
                    placeholder={`${props.thisUser.companyName}`}
                />
                <label htmlFor={"forWhomStreet"}>Straße Hausnummer:</label>
                <input
                    type={"text"}
                    name={"forWhomStreet"}
                    onChange={handleChange}
                    placeholder={`${props.thisUser.companyStreet}`}
                />
                <label htmlFor={"forWhomZip"}>Postleitzahl:</label>
                <input
                    type={"text"}
                    name={"forWhomZip"}
                    onChange={handleChange}
                    placeholder={`${props.thisUser.companyZip}`}
                />
                <label htmlFor={"forWhomLocation"}>Ort:</label>

                <input
                    type={"text"}
                    name={"forWhomLocation"}
                    onChange={handleChange}
                    placeholder={`${props.thisUser.companyLocation}`}
                />

                {qList.map((e: Evaluation) => {

                    return (
                        <article key={e.category + e.inCategoryNum} className={"question"} >

                            <p className={"text"}>{e.txtBlock}</p>
                            {e.subTxt && <p className={"subTXT"}>{e.subTxt}</p>}
                            <ul>
                                {e.subListItem1 && <li>{e.subListItem1}</li>}
                                {e.subListItem2 && <li>{e.subListItem2}</li>}
                                {e.subListItem3 && <li>{e.subListItem3}</li>}
                                {e.subListItem4 && <li>{e.subListItem4}</li>}
                                {e.subListItem5 && <li>{e.subListItem5}</li>}
                            </ul>

                            <div className={"userInteraction"} key={e.category+e.inCategoryNum}>

                                <label className={"labelValuePair"} htmlFor={"done"}>Erledigt ?
                                    <input className={"dataInput"}  name="done"
                                           checked={e.done}
                                           onChange={(event)=>
                                           {handleCatalogChange(e.category+e.inCategoryNum,event)}
                                           }
                                           type={"checkbox"}/></label>

                                <p>Sind Maßnahmen erforderlich ? Wenn ja:</p>

                                <label className={"labelValuePair"} htmlFor={"doneTil"}>Bis wann ?
                                    <input className={"dataInput"}  name="doneTil"
                                           value={e.doneTil}
                                           onChange={(event)=>
                                               {handleCatalogChange(e.category+e.inCategoryNum,event)}
                                           }
                                           type={"date"}/></label>

                                <label className={"labelValuePair"} htmlFor={"who"}>Von wem ?
                                    <select name="respPerson"
                                            value={e.respPerson}
                                            onChange={(event) => {handleSelectChange(e.category+e.inCategoryNum,event)}} className={"dataInput"}>
                                        <option
                                            value={props.thisUser.manageLastName}>{props.thisUser.manageLastName}</option>
                                        <option value={props.thisUser.employee1}>{props.thisUser.employee1}</option>
                                        <option value={props.thisUser.employee2}>{props.thisUser.employee2}</option>
                                        <option value={props.thisUser.employee3}>{props.thisUser.employee3}</option>
                                        <option value={props.thisUser.employee4}>{props.thisUser.employee4}</option>
                                        <option value={props.thisUser.employee5}>{props.thisUser.employee5}</option>

                                    </select></label>

                                <label className={"labelValuePair"} htmlFor={"who"}>Kontrolle durch:
                                    <select name="controlDone"
                                            value={e.controlDone}
                                            onChange={(event) => {handleSelectChange(e.category+e.inCategoryNum,event)}} className={"dataInput"}>
                                        <option
                                            value={props.thisUser.manageLastName}>{props.thisUser.manageLastName}</option>
                                        <option value={props.thisUser.employee1}>{props.thisUser.employee1}</option>
                                        <option value={props.thisUser.employee2}>{props.thisUser.employee2}</option>
                                        <option value={props.thisUser.employee3}>{props.thisUser.employee3}</option>
                                        <option value={props.thisUser.employee4}>{props.thisUser.employee4}</option>
                                        <option value={props.thisUser.employee5}>{props.thisUser.employee5}</option>

                                    </select></label>

                                <label className={"labelValuePair"} htmlFor={"control"}>Erledigt ?
                                    <input className={"dataInput"}  name="control"
                                           checked={e.control}
                                           onChange={(event)=>
                                           {handleCatalogChange(e.category+e.inCategoryNum,event)}
                                           }
                                           type={"checkbox"}/></label>

                            </div>

                        </article>
                    )

                })}

                <NavLink to={"/userCreateNewEva"}>Zurück...</NavLink>
                <input type="submit"/>
            </form>

        </main>
    )
}