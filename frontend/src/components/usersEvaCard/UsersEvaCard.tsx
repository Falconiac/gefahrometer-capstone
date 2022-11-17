import './usersEvaCardStyled.css';
import UsersEva from "../../model/UsersEva";
import {ChangeEvent, SyntheticEvent, useState} from "react";
import axios from "axios";
import { FiCheckSquare,FiTrash2,FiEye,FiEyeOff,FiEdit2,FiPrinter,FiAlertTriangle,FiSave} from "react-icons/fi";
import User from "../../model/User";



type UsersEvaCardProps ={
    eva : UsersEva;
    user : User;
}


export default function UsersEvaCard(props: UsersEvaCardProps){



    const [thisEva, setThisEva] = useState(props.eva);
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);

    const id = thisEva.accountName + thisEva.evaName;

    function findOutIndexOfEva(key: string) {
        for (let i = 0; i < thisEva.evaCatalog.length; i++) {
            const categoryKey = thisEva.evaCatalog[i].category + thisEva.evaCatalog[i].inCategoryNum;
            if (categoryKey === key) {
                return i;
            }
        }
        return 0;
    }

    function handleCatalogChange( key: string,event: ChangeEvent<HTMLInputElement>) {

        const name = event.target.name;
        const value = event.target.value;


        setThisEva((prevUserEva) => {

            const evaIndexToUpdate: number = findOutIndexOfEva(key);


            const updatedEva = {
                ...prevUserEva.evaCatalog[evaIndexToUpdate],
                [name]: event.target.type === "checkbox" ? event.target.checked : value
            };


            prevUserEva.evaCatalog[evaIndexToUpdate] = updatedEva;

            console.log(prevUserEva)

            return { ...prevUserEva };
        });

    }

    function handleSelectChange( key: string,event: SyntheticEvent<HTMLSelectElement>) {

        const name = event.currentTarget.name;
        const value = event.currentTarget.value;


        setThisEva((prevUserEva) => {

            const evaIndexToUpdate: number = findOutIndexOfEva(key);


            const updatedEva = {
                ...prevUserEva.evaCatalog[evaIndexToUpdate],
                [name]: value
            };


            prevUserEva.evaCatalog[evaIndexToUpdate] = updatedEva;

            console.log(prevUserEva)

            return { ...prevUserEva };
        });

    }

    const handleSubmit = () => {
        axios.post("/api/userseva/update",{...thisEva})
            .then(()=>{setEdit(!edit)})
            .then(()=>{setShow(!show)})

    }


    function deleteUsersEva(id:string){
        axios.delete("/api/userseva/"+id)
            .then(()=>alert("Delete sucessfully"))

    }

    return(
        <article className={"usersEvaCard"}>

            <section className={"cardHead"}>

                    <section className={"leftArea"}>
                         <h2 onClick={()=>{}}>{props.eva.evaName}</h2>
                    </section>

                    <section className={"buttonArea"}>
                        <button className={"btnDelete"} onClick={()=>{deleteUsersEva(id)}}><FiTrash2/></button>
                        {!show && <button className={"btnInterAction"} onClick={()=>setShow(!show)}><FiEye/></button>}

                        {show && <>
                        <button className={"btnInterAction"} onClick={()=>setShow(!show)}><FiEyeOff/></button>
                        {!edit && <button className={"btnInterAction"} onClick={()=>{setEdit(!edit);console.log("Editieren: " + edit)}}><FiEdit2/></button>}
                        </>
                        }

                        <button className={"btnInterAction"} onClick={()=>{console.log(thisEva)}}><FiPrinter/></button>
                    </section>

            </section>

            {show && <article>

                <p>Für das Bauvorhaben:</p>
                <p>{props.eva.forWhom}</p>
                <p>{props.eva.forWhomStreet}</p>
                <p>{props.eva.forWhomZip} {props.eva.forWhomLocation}</p>


                {thisEva.evaCatalog.map((e)=>{

                    return(

                        <article key={e.category+e.inCategoryNum} className={"evaDetail"}>
                    <p>{e.txtBlock}</p>
                    <p>{e.done}</p>
                        {e.done && <p className={"checkDone"}><FiCheckSquare/></p> }
                        {!e.done && <article className={"articleFrameless"}>
                            {!edit && <>  <p className={"alarm"}><FiAlertTriangle/></p>
                                <p>Zu erledigen bis: {e.doneTil}</p>
                                <p>Zu erledigen von: {e.respPerson}</p>
                                <p>Zu kontrollieren von:  {e.controlDone}</p>
                            </>}


                            {edit && <form>  <p className={"alarm"}><FiAlertTriangle/></p>

                                <label>Zu erledigen bis:
                                    <input type={"date"}
                                           name={"doneTil"}
                                           onChange={(event)=>{handleCatalogChange(e.category+e.inCategoryNum,event)}}
                                           value={e.doneTil}/>
                                </label>

                                <label>Zu erledigen von:

                                    <select name="respPerson"
                                            value={e.respPerson}
                                            onChange={(event) => {handleSelectChange(e.category+e.inCategoryNum,event)}}
                                            className={"dataInput"}>
                                        <option value={props.user.manageLastName}>{props.user.manageLastName}</option>
                                        <option value={props.user.employee1}>{props.user.employee1}</option>
                                        <option value={props.user.employee2}>{props.user.employee2}</option>
                                        <option value={props.user.employee3}>{props.user.employee3}</option>
                                        <option value={props.user.employee4}>{props.user.employee4}</option>
                                        <option value={props.user.employee5}>{props.user.employee5}</option>
                                    </select>
                                </label>

                                <label>Zu kontrollieren von:
                                    <select name="respPerson"
                                            value={e.controlDone}
                                            onChange={(event) => {handleSelectChange(e.category+e.inCategoryNum,event)}}
                                            className={"dataInput"}>
                                        <option
                                            value={props.user.manageLastName}>{props.user.manageLastName}</option>
                                        <option value={props.user.employee1}>{props.user.employee1}</option>
                                        <option value={props.user.employee2}>{props.user.employee2}</option>
                                        <option value={props.user.employee3}>{props.user.employee3}</option>
                                        <option value={props.user.employee4}>{props.user.employee4}</option>
                                        <option value={props.user.employee5}>{props.user.employee5}</option>
                                    </select>
                                </label>
                                <label>Kontrolliert und erledigt: <input
                                                                        type={"checkbox"}
                                                                        name={"done"}
                                                                         onChange={(event)=>
                                                                        {handleCatalogChange(e.category+e.inCategoryNum,event)}}
                                                                         checked={e.done}  /></label>
                            </form>}
                        </article>}
                    </article>)
                })}
            </article>}

            <section className={"buttonArea"}>

                {show && <button className={"btnInterAction"} onClick={()=>setShow(!show)}><FiEyeOff/></button>}
                {show && <button className={"btnInterAction"} onClick={()=>{console.log(thisEva)}}><FiPrinter/></button>}
                {show && <button className={"btnInterAction"} onClick={handleSubmit}><FiSave/></button>}
            </section>
        </article>
    )
}