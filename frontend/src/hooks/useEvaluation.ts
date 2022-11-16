import {useEffect, useState} from "react";
import axios from "axios";
import Evaluation from "../model/Evaluation";

export default function useEvaluation(){


    const [evaluationCatalog, setEvaluationCatalog] = useState([]);
    const [arbeitsschutzOrganisationCatalog, setArbeitsschutzOrganisationCatalog] = useState([]);
    const [arbeitsschutzBaustelleCatalog, setArbeitsschutzBaustelleCatalog] = useState([]);
    const [aUbvArbUVerk, setaUbvArbUVerk] = useState([]);
    const [nutzGerue, setnutzGerue] = useState([]);
    const [nutzMobGerue, setnutzMobGerue] = useState([]);
    const [nutzLeit, setnutzLeit] = useState([]);
    const [hoArbpl, sethoArbpl] = useState([]);
    const [strom, setstrom] = useState([]);
    const [matTrans, setmatTrans] = useState([]);
    const [gefLager, setgefLager] = useState([]);
    const [arbKoerpBel, setarbKoerpBel] = useState([]);
    const [arbHndMas, setarbHndMas] = useState([]);
    const [vibr, setvibr] = useState([]);
    const [hochdWass, sethochdWass] = useState([]);
    const [taetGef, settaetGef] = useState([]);
    const [umgStaub, setumgStaub] = useState([]);
    const [klBesSpa, setklBesSpa] = useState([]);
    const [entfUnterg, setentfUnterg] = useState([]);
    const [bhf, setbhf] = useState([]);
    const [office, setoffice] = useState([]);
    const [loud, setloud] = useState([]);
    const [arbHndMas2, setarbHndMas2] = useState([]);
    const [taetGef2, settaetGef2] = useState([]);
    const [sprLack, setsprLack] = useState([]);
    const [tfnstrahl, settfnstrahl] = useState([]);
    const [gefLager2, setgefLager2] = useState([]);
    const [tauchLack, settauchLack] = useState([]);
    const [arbVK, setarbVK] = useState([]);
    const [userCatalog, setUserCatalog] = useState(new Map<number,Evaluation[]>());



    function getEvaluationCatalog() {
        axios.get("/api/evaluation")
            .then((response) => {return response.data})
            .then((evaluationCatalog)=>setEvaluationCatalog(evaluationCatalog))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        getEvaluationCatalog()
    },[])

    function getArbeitsschutzOrganisation() {
        axios.get("/api/evaluation/arbSchOrga")
            .then((response) => {return response.data})
            .then((arbeitsschutzOrganisationCatalog)=>setArbeitsschutzOrganisationCatalog(arbeitsschutzOrganisationCatalog))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        getArbeitsschutzOrganisation()
    },[])

    function getArbeitsschutzOrganisationBaustelle() {
        axios.get("/api/evaluation/arbSchOrgaBau")
            .then((response) => {return response.data})
            .then((arbeitsschutzBaustelleCatalog)=>setArbeitsschutzBaustelleCatalog(arbeitsschutzBaustelleCatalog))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        getArbeitsschutzOrganisationBaustelle()
    },[])

    function getaUbvArbUVerk() {
        axios.get("/api/evaluation/aUbvArbUVerk")
            .then((response) => {return response.data})
            .then((aUbvArbUVerk)=>setaUbvArbUVerk(aUbvArbUVerk))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        getaUbvArbUVerk()
    },[])

    function getnutzGerue() {
        axios.get("/api/evaluation/nutzGerue")
            .then((response) => {return response.data})
            .then((nutzGerue)=>setnutzGerue(nutzGerue))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        getnutzGerue()
    },[])

    function getnutzMobGerue() {
        axios.get("/api/evaluation/nutzMobGerue")
            .then((response) => {return response.data})
            .then((nutzMobGerue)=>setnutzMobGerue(nutzMobGerue))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        getnutzMobGerue()
    },[])

    function getnutzLeit() {
        axios.get("/api/evaluation/nutzLeit")
            .then((response) => {return response.data})
            .then((nutzLeit)=>setnutzLeit(nutzLeit))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        getnutzLeit()
    },[])

    function gethoArbpl() {
        axios.get("/api/evaluation/hoArbpl")
            .then((response) => {return response.data})
            .then((hoArbpl)=>sethoArbpl(hoArbpl))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        gethoArbpl()
    },[])

    function getstrom() {
        axios.get("/api/evaluation/strom")
            .then((response) => {return response.data})
            .then((strom)=>setstrom(strom))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        getstrom()
    },[])

    function getmatTrans() {
        axios.get("/api/evaluation/matTrans")
            .then((response) => {return response.data})
            .then((matTrans)=>setmatTrans(matTrans))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        getmatTrans()
    },[])

    function getgefLager() {
        axios.get("/api/evaluation/gefLager")
            .then((response) => {return response.data})
            .then((gefLager)=>setgefLager(gefLager))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        getgefLager()
    },[])

    function getarbKoerpBel() {
        axios.get("/api/evaluation/arbKoerpBel")
            .then((response) => {return response.data})
            .then((arbKoerpBel)=>setarbKoerpBel(arbKoerpBel))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        getarbKoerpBel()
    },[])

    function getarbHndMas() {
        axios.get("/api/evaluation/arbHndMas")
            .then((response) => {return response.data})
            .then((arbHndMas)=>setarbHndMas(arbHndMas))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        getarbHndMas()
    },[])

    function getvibr() {
        axios.get("/api/evaluation/vibr")
            .then((response) => {return response.data})
            .then((vibr)=>setvibr(vibr))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        getvibr()
    },[])

    function gethochdWass() {
        axios.get("/api/evaluation/hochdWass")
            .then((response) => {return response.data})
            .then((hochdWass)=>sethochdWass(hochdWass))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        gethochdWass()
    },[])

    function gettaetGef() {
        axios.get("/api/evaluation/taetGef")
            .then((response) => {return response.data})
            .then((taetGef)=>settaetGef(taetGef))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        gettaetGef()
    },[])

    function getumgStaub() {
        axios.get("/api/evaluation/umgStaub")
            .then((response) => {return response.data})
            .then((umgStaub)=>setumgStaub(umgStaub))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        getumgStaub()
    },[])

    function getklBesSpa() {
        axios.get("/api/evaluation/klBesSpa")
            .then((response) => {return response.data})
            .then((klBesSpa)=>setklBesSpa(klBesSpa))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        getklBesSpa()
    },[])

    function getentfUnterg() {
        axios.get("/api/evaluation/entfUnterg")
            .then((response) => {return response.data})
            .then((entfUnterg)=>setentfUnterg(entfUnterg))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        getentfUnterg()
    },[])

    function getbhf() {
        axios.get("/api/evaluation/bhf")
            .then((response) => {return response.data})
            .then((bhf)=>setbhf(bhf))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        getbhf()
    },[])

    function getoffice() {
        axios.get("/api/evaluation/office")
            .then((response) => {return response.data})
            .then((office)=>setoffice(office))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        getoffice()
    },[])

    function getloud() {
        axios.get("/api/evaluation/loud")
            .then((response) => {return response.data})
            .then((loud)=>setloud(loud))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        getloud()
    },[])

    function getarbHndMas2() {
        axios.get("/api/evaluation/arbHndMas2")
            .then((response) => {return response.data})
            .then((arbHndMas2)=>setarbHndMas2(arbHndMas2))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        getarbHndMas2()
    },[])

    function gettaetGef2() {
        axios.get("/api/evaluation/taetGef2")
            .then((response) => {return response.data})
            .then((taetGef2)=>settaetGef2(taetGef2))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        gettaetGef2()
    },[])

    function getsprLack() {
        axios.get("/api/evaluation/sprLack")
            .then((response) => {return response.data})
            .then((sprLack)=>setsprLack(sprLack))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        getsprLack()
    },[])

    function gettfnstrahl() {
        axios.get("/api/evaluation/tfnstrahl")
            .then((response) => {return response.data})
            .then((tfnstrahl)=>settfnstrahl(tfnstrahl))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        gettfnstrahl()
    },[])

    function getgefLager2() {
        axios.get("/api/evaluation/gefLager2")
            .then((response) => {return response.data})
            .then((gefLager2)=>setgefLager2(gefLager2))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        getgefLager2()
    },[])

    function gettauchLack() {
        axios.get("/api/evaluation/tauchLack")
            .then((response) => {return response.data})
            .then((tauchLack)=>settauchLack(tauchLack))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        gettauchLack()
    },[])

    function getarbVK() {
        axios.get("/api/evaluation/arbVK")
            .then((response) => {return response.data})
            .then((arbVK)=>setarbVK(arbVK))
            .catch(error => {console.log(error)})
    }
    useEffect(()=>{
        getarbVK()
    },[])

    return {evaluationCatalog,arbeitsschutzOrganisationCatalog,arbeitsschutzBaustelleCatalog,
            aUbvArbUVerk,nutzGerue ,nutzMobGerue,nutzLeit ,hoArbpl, strom,matTrans,gefLager,arbKoerpBel,
            arbHndMas,vibr,hochdWass,taetGef,umgStaub,klBesSpa,entfUnterg,bhf,office,loud,arbHndMas2,
            taetGef2,sprLack,tfnstrahl,gefLager2,tauchLack,arbVK, getEvaluationCatalog, userCatalog, setUserCatalog};

}