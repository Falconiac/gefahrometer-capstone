import User from "../../model/User";
import Evaluation from "../../model/Evatuation";


type EvaluationCardProps = {
    eva : Evaluation
    reloadEvaluations : () => void;
}


export default function EvaluationCard(props:EvaluationCardProps){

    return(
        <article className={"evaCard"}>
            <h2>{props.eva.headCategory}</h2>
            <p>{props.eva.category}</p>
            <p>{props.eva.inCategoryNum}</p>
            <img src={props.eva.categoryImg} alt={"Category-Image"}/>
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