import Evaluation from "../../model/Evatuation";
import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";


const url = "/api/evaluation";

type CreateEvaluationFormProps = {
    reloadEvaluations : () => void;
}

export default function CreateEvaluationForm(props : CreateEvaluationFormProps){

    const emptyEvaluation : Evaluation = {
        category : "",
        inCategoryNum : 0,
        categoryImg : "",
        title: "",
        txtBlock : "",
        subTxt : "",
        subList : [],
        done : false,
        respPerson : "",
        doneTil : "",
        controlDone : "",
        control : false,
        comments : "",
    }

    const [evaluation, setEvaluation] = useState(emptyEvaluation);

    function handleChange(event : ChangeEvent<HTMLInputElement>){

        const name = event.target.name;
        const newValue = event.target.value;

        setEvaluation((prevEvaluation) => ({...prevEvaluation,
            [name]: event.target.type === "checkbox" ? event.target.checked : newValue}))

    }

    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios.post(url, {...evaluation})
            .then(props.reloadEvaluations)
    }

    return(
        <form>

            <label htmlFor={"category"}>Kategorie:
                <input
                    type={"text"}
                    name={"category"}
                    onChange={handleChange}
                    value={evaluation.category}
                    placeholder={"Kategorie"}
                />
            </label>

            <label htmlFor={"inCategoryNum"}>Nummerierung:
                <input
                    type={"number"}
                    name={"inCategoryNum"}
                    onChange={handleChange}
                    value={evaluation.inCategoryNum}
                    placeholder={"1-100"}
                />
            </label>

            <label htmlFor={"categoryImg"}>Bild:
                <input
                    type={"text"}
                    name={"categoryImg"}
                    onChange={handleChange}
                    value={evaluation.categoryImg}
                    placeholder={"Image-URL"}
                />
            </label>

            <label htmlFor={"title"}>Titel:
                <input
                    type={"text"}
                    name={"title"}
                    onChange={handleChange}
                    value={evaluation.title}
                    placeholder={"Titel"}
                />
            </label>

            <label htmlFor={"txtBlock"}>Text:
                <input
                    type={"text"}
                    name={"txtBlock"}
                    onChange={handleChange}
                    value={evaluation.txtBlock}
                    placeholder={"Text"}
                />
            </label>

            <label htmlFor={"subTxt"}>Untertext:
                <input
                    type={"text"}
                    name={"subTxt"}
                    onChange={handleChange}
                    value={evaluation.subTxt}
                    placeholder={"Sub-Text"}
                />
            </label>

            <label htmlFor={"subList"}>Unterpunkt 1:
                <input
                    type={"text"}
                    name={"subList"}
                    onChange={handleChange}
                    value={evaluation.subList[0]}
                    placeholder={"Sub-List 1"}
                />
            </label>

            <label htmlFor={"subList"}>Unterpunkt 2:
                <input
                    type={"text"}
                    name={"subList"}
                    onChange={handleChange}
                    value={evaluation.subList[1]}
                    placeholder={"Sub-List 2"}
                />
            </label>

            <label htmlFor={"subList"}>Unterpunkt 3:
                <input
                    type={"text"}
                    name={"subList"}
                    onChange={handleChange}
                    value={evaluation.subList[2]}
                    placeholder={"Sub-List 3"}
                />
            </label>

            <label htmlFor={"subList"}>Unterpunkt 4:
                <input
                    type={"text"}
                    name={"subList"}
                    onChange={handleChange}
                    value={evaluation.subList[3]}
                    placeholder={"Sub-List 4"}
                />
            </label>

            <label htmlFor={"done"}>Erledigt:
                <input
                    type={"checkbox"}
                    name={"done"}
                    onChange={handleChange}
                    checked={evaluation.done}

                />
            </label>

            <label htmlFor={"respPerson"}>Beauftragte Person:
                <input
                    type={"text"}
                    name={"respPerson"}
                    onChange={handleChange}
                    value={evaluation.respPerson}
                    placeholder={"Vor- und Nachname"}
                />
            </label>

            <label htmlFor={"doneTil"}>Zu erledigen bis:
                <input
                    type={"text"}
                    name={"doneTil"}
                    onChange={handleChange}
                    value={evaluation.doneTil}
                    placeholder={"Datum"}
                />
            </label>

            <label htmlFor={"controlDone"}>Kontrolle durch:
                <input
                    type={"text"}
                    name={"controlDone"}
                    onChange={handleChange}
                    value={evaluation.controlDone}
                    placeholder={"Vor- und Nachname"}
                />
            </label>

            <label htmlFor={"control"}>Wurde kontrolliert:
                <input
                    type={"checkbox"}
                    name={"control"}
                    onChange={handleChange}
                    checked={evaluation.control}

                />
            </label>

            <label htmlFor={"comments"}>Kommentar:
                <input
                    type={"text"}
                    name={"comments"}
                    onChange={handleChange}
                    value={evaluation.comments}
                    placeholder={"Kommentar"}
                />
            </label>

            <input type={"submit"} onClick={()=>handleSubmit}/>
        </form>
    )

}