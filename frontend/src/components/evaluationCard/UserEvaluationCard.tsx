import './EvaluationCardStyled.css';
import Evaluation from "../../model/Evatuation";
import User from "../../model/User";


type UserEvaluationCardProps = {
    eva : Evaluation
    user : User;
}


export default function UserEvaluationCard(props:UserEvaluationCardProps){

    return(
        <article className={"evaCard"}>
            <h2>{props.eva.headCategory}</h2>
            <p>{props.eva.category}</p>
            <p>{props.eva.inCategoryNum}</p>
            <img src={props.eva.categoryImg} alt={"Category"}/>
            <p>{props.eva.title}</p>
            <p>{props.eva.txtBlock}</p>
            <p>{props.eva.subTxt}</p>
            <ul>
                {props.eva.subListItem1 ? <li>{props.eva.subListItem1}</li>:''}
                {props.eva.subListItem2 ? <li>{props.eva.subListItem2}</li>:''}
                {props.eva.subListItem3 ? <li>{props.eva.subListItem3}</li>:''}
                {props.eva.subListItem4 ? <li>{props.eva.subListItem4}</li>:''}
                {props.eva.subListItem5 ? <li>{props.eva.subListItem5}</li>:''}
            </ul>
        </article>
    )

}