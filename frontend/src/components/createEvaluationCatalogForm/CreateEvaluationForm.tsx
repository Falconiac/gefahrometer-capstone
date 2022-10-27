import Evaluation from "../../model/Evatuation";
import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";
import './createEvaluationFormStyled.css';

const url = "/api/evaluation";

type CreateEvaluationFormProps = {
    reloadEvaluations : () => void;
}

export default function CreateEvaluationForm(props : CreateEvaluationFormProps){


    const emptyEvaluation : Evaluation = {
        headCategory : "",
        category : "",
        inCategoryNum : 0,
        categoryImg : "",
        title: "",
        txtBlock : "",
        subTxt : "",
        subListItem1: "",
        subListItem2: "",
        subListItem3: "",
        subListItem4: "",
        subListItem5: "",
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
        <section>


        <form className={"form"} onSubmit={handleSubmit}>

            <label htmlFor={"headCategory"}>Kategorie:
                <input
                    type={"text"}
                    name={"headCategory"}
                    onChange={handleChange}
                    value={evaluation.headCategory}
                    placeholder={"Kategorie"}
                />
            </label>

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

           <label htmlFor={"subList1"}>Unterpunkt 1:
                <input
                    type={"text"}
                    name={"subListItem1"}
                    onChange={handleChange}
                    value={evaluation.subListItem1}
                    placeholder={"Unterpunkt1"}
                />
            </label>

           <label htmlFor={"subList2"}>Unterpunkt 2:
                <input
                    type={"text"}
                    name={"subListItem2"}
                    onChange={handleChange}
                    value={evaluation.subListItem2}
                    placeholder={"Unterpunkt2"}
                />
            </label>

            <label htmlFor={"subList3"}>Unterpunkt 3:
                <input
                    type={"text"}
                    name={"subListItem3"}
                    onChange={handleChange}
                    value={evaluation.subListItem3}
                    placeholder={"Unterpunkt3"}
                />
            </label>

            <label htmlFor={"subList4"}>Unterpunkt 4:
                <input
                    type={"text"}
                    name={"subListItem4"}
                    onChange={handleChange}
                    value={evaluation.subListItem4}
                    placeholder={"Unterpunkt4"}
                />
            </label>

            <label htmlFor={"subList5"}>Unterpunkt 5:
                <input
                    type={"text"}
                    name={"subListItem5"}
                    onChange={handleChange}
                    value={evaluation.subListItem5}
                    placeholder={"Unterpunkt5"}
                />
            </label>

            <label htmlFor={"submit"}>Absenden:
            <input type={"submit"}/>
            </label>
        </form>
        </section>
    )

}