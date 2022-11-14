import User from "../../model/User";
import {NavLink} from "react-router-dom";
import Evaluation from "../../model/Evaluation";
import "./UserCreateNewEva2Styled.css";
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import axios from "axios";
import UsersEva from "../../model/UsersEva";

type UserCreateNewEva2Props ={
    thisUser : User;
    catalog : Map<number,Evaluation[]>;
}

export default function UserCreateNewEva2(props: UserCreateNewEva2Props){

    const [qList, setQList] = useState(Array<Evaluation>)

    useEffect(()=>{

       const eveArray = Array.from(props.catalog, ([name, value]) => ( value ));
        const flattenedEvas = eveArray.flatMap(eva => eva);
        setQList(flattenedEvas);
        setUserEva((prevUserEva)=>{return{...prevUserEva, evaCatalog:flattenedEvas}})
    },[])

    const emptyUserEva : UsersEva = {
        mail : props.thisUser.mail,
        accountName : props.thisUser.accountName,
        manageFirstName: props.thisUser.manageFirstName,
        manageLastName : props.thisUser.manageLastName,
        companyName : props.thisUser.companyName,
        companyStreet : props.thisUser.companyStreet,
        companyZip : props.thisUser.companyZip,
        companyLocation : props.thisUser.companyLocation,
        employee1: props.thisUser.employee1,
        employee2: props.thisUser.employee2,
        employee3: props.thisUser.employee3,
        employee4: props.thisUser.employee4,
        employee5: props.thisUser.employee5,
        medicalCareName : props.thisUser.medicalCareName,
        medicalCareStreet : props.thisUser.medicalCareStreet,
        medicalCareZip : props.thisUser.medicalCareZip,
        medicalCareLocation : props.thisUser.medicalCareLocation,
        evaName: "",
        forWhom:"",
        forWhomStreet:"",
        forWhomZip:"",
        forWhomLocation: "",
        evaCatalog: []
    }

    const [userEva, setUserEva] = useState(emptyUserEva);


    function handleChange(event : ChangeEvent<HTMLInputElement>){

        const name = event.target.name;
        const newValue = event.target.value;

       setUserEva((prevUsersEva) => ({...prevUsersEva,
            [name]: event.target.type === "checkbox" ? event.target.checked : newValue
       }))
    }

    function handleChangeOnEva(event : ChangeEvent<HTMLInputElement>){

        const name = event.target.name;
        const newValue = event.target.value;

        setUserEva((prevUsersEva) => ({...prevUsersEva,
            [name]: event.target.type === "checkbox" ? event.target.checked : newValue
        }))
    }


    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(userEva)
    }



    return(
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
            {qList.map((e)=>{
                return(
                    <article className={"question"} key={e.category+e.inCategoryNum}>
                        <p className={"text"}>{e.txtBlock}</p>
                        {e.subTxt && <p className={"subTXT"}>{e.subTxt}</p>}
                        <ul>
                            {e.subListItem1 && <li>{e.subListItem1}</li>}
                            {e.subListItem2 && <li>{e.subListItem2}</li>}
                            {e.subListItem3 && <li>{e.subListItem3}</li>}
                            {e.subListItem4 && <li>{e.subListItem4}</li>}
                            {e.subListItem5 && <li>{e.subListItem5}</li>}
                        </ul>

                        <div className={"userInteraction"}>

                        <label className={"labelValuePair"} htmlFor={"done"} >Wurden Die Maßnahmen umgesetzt ?
                            <input className={"checker"} onChange={handleChange} name="done" type={"checkbox"} checked={e.done}/></label>

                        <p>Sind Maßnahmen erforderlich ? Wenn ja:</p>

                                <label className={"labelValuePair"} htmlFor={"doneTil"}>Bis wann ?
                                    <input className={"dataInput"} onChange={handleChange} name="doneTil"  type={"date"}/></label>


                                <label className={"labelValuePair"} htmlFor={"who"}>Von wem ?
                                    <select name="respPerson" onSelect={()=>handleChange} className={"dataInput"} >
                                        <option value={props.thisUser.manageLastName}>{props.thisUser.manageLastName}</option>
                                        <option value={props.thisUser.employee1}>{props.thisUser.employee1}</option>
                                        <option value={props.thisUser.employee2}>{props.thisUser.employee2}</option>
                                        <option value={props.thisUser.employee3}>{props.thisUser.employee3}</option>
                                        <option value={props.thisUser.employee4}>{props.thisUser.employee4}</option>
                                        <option value={props.thisUser.employee5}>{props.thisUser.employee5}</option>

                                    </select></label>

                                <label className={"labelValuePair"} htmlFor={"controlDone"}>Kontrolle durch:
                                <select name="controlDone" onChange={ () => handleChange} className={"dataInput"} >
                                    <option value={props.thisUser.manageLastName}>{props.thisUser.manageLastName}</option>
                                    <option value={props.thisUser.employee1}>{props.thisUser.employee1}</option>
                                    <option value={props.thisUser.employee2}>{props.thisUser.employee2}</option>
                                    <option value={props.thisUser.employee3}>{props.thisUser.employee3}</option>
                                    <option value={props.thisUser.employee4}>{props.thisUser.employee4}</option>
                                    <option value={props.thisUser.employee5}>{props.thisUser.employee5}</option>

                                </select></label>

                            <label className={"labelValuePair"} htmlFor={"isDone"} >Maßnahmen erledigt ?
                                <input className={"checker"} onChange={handleChange} name="isDone" type={"checkbox"} checked={e.done}/></label>

                        </div>

                    </article>
                )
            })}
                <input type={"submit"}/>
                 <NavLink to={"/userCreateNewEva"}>Zurück...</NavLink>
        </form>

        </main>
)
}