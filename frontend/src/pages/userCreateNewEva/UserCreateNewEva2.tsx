import User from "../../model/User";
import {NavLink} from "react-router-dom";
import Evaluation from "../../model/Evatuation";
import "./UserCreateNewEva2Styled.css";

type UserCreateNewEva2Props ={
    thisUser : User;
    catalog : Map<number,Evaluation[]>;
}

export default function UserCreateNewEva2(props: UserCreateNewEva2Props){



    function mapCatalog(map:Map<number,Evaluation[]>, arr : Evaluation[]){
        map.forEach((value) => {
            value.map((e:Evaluation)=>{
            arr.push(e);
            })
        })
    }

    let list:Array<Evaluation> = Array();

    mapCatalog(props.catalog,list);



    return(
        <main>
        <h2>Sie dürfen {list.length} fragen beantworten.</h2>

            {list.map((e)=>{
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

                        <form className={"userInteraction"}>

                        <label className={"labelValuePair"} htmlFor={"done"} >Wurden Die Maßnahmen umgesetzt ?
                            <input className={"checker"} name="done" type={"checkbox"} checked={e.done}/></label>

                        <p>Sind Maßnahmen erforderlich ? Wenn ja:</p>

                                <label className={"labelValuePair"} htmlFor={"doneDate"}>Bis wann ?
                                    <input className={"dataInput"} name="doneDate"  type={"date"}/></label>


                                <label className={"labelValuePair"} htmlFor={"who"}>Von wem ?
                                    <select name="who" className={"dataInput"} >
                                        <option value={props.thisUser.manageLastName}>{props.thisUser.manageLastName}</option>
                                        <option value={props.thisUser.employee1}>{props.thisUser.employee1}</option>
                                        <option value={props.thisUser.employee2}>{props.thisUser.employee2}</option>
                                        <option value={props.thisUser.employee3}>{props.thisUser.employee3}</option>
                                        <option value={props.thisUser.employee4}>{props.thisUser.employee4}</option>
                                        <option value={props.thisUser.employee5}>{props.thisUser.employee5}</option>

                                    </select></label>

                                <label className={"labelValuePair"} htmlFor={"control"}>Kontrolliert durch:
                                <select name="control" className={"dataInput"} >
                                    <option value={props.thisUser.manageLastName}>{props.thisUser.manageLastName}</option>
                                    <option value={props.thisUser.employee1}>{props.thisUser.employee1}</option>
                                    <option value={props.thisUser.employee2}>{props.thisUser.employee2}</option>
                                    <option value={props.thisUser.employee3}>{props.thisUser.employee3}</option>
                                    <option value={props.thisUser.employee4}>{props.thisUser.employee4}</option>
                                    <option value={props.thisUser.employee5}>{props.thisUser.employee5}</option>

                                </select></label>

                            <label className={"labelValuePair"} htmlFor={"isDone"} >Maßnahmen erledigt ?
                                <input className={"checker"} name="isDone" type={"checkbox"} checked={e.done}/></label>



                        </form>

                    </article>
                )
            })}


    <NavLink to={"/userCreateNewEva"}>Zurück...</NavLink>
        </main>
)
}