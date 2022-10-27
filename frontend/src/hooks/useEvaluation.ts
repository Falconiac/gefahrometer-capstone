import {useEffect, useState} from "react";
import axios from "axios";

export default function useEvaluation(){

    const [evaluationCatalog, setEvaluationCatalog] = useState([]);

    function getEvaluationCatalog() {
        axios.get("/api/evaluation")
            .then((response) => {return response.data})
            .then((evaluationCatalog)=>setEvaluationCatalog(evaluationCatalog))
            .catch(error => {console.log(error)})
    }

    useEffect(()=>{
        getEvaluationCatalog()
    },[])

    return ({evaluationCatalog, getEvaluationCatalog})

}