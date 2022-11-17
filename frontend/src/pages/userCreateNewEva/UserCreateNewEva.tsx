import './userCreateNewEvaStyled.css'
import User from "../../model/User";
import useEvaluation from "../../hooks/useEvaluation";
import {useState} from "react";
import {FiArrowRight} from "react-icons/fi";
import {NavLink} from "react-router-dom";
import Evaluation from "../../model/Evaluation";


type UserCreateNewEvaProps ={
    thisUser : User;
    setUserCatalog : (userCatalog : Map<number,Evaluation[]>) => void;

}

export default function UserCreateNewEva(props: UserCreateNewEvaProps){

    const {arbeitsschutzOrganisationCatalog,arbeitsschutzBaustelleCatalog,
        aUbvArbUVerk,nutzGerue ,nutzMobGerue,nutzLeit ,hoArbpl, strom,matTrans,gefLager,arbKoerpBel,
        arbHndMas,vibr,hochdWass,taetGef,umgStaub,klBesSpa,entfUnterg,bhf,office,loud,arbHndMas2,
        taetGef2,sprLack,tfnstrahl,gefLager2,tauchLack,arbVK} = useEvaluation();

    const [newUserList, setNewUserList]  = useState(new Map<number,Evaluation[]>()) ;

    function toggleCategory(num:number, catalog:Evaluation[]) {
        return () => {
            if (newUserList.has(num)) {
                setNewUserList((oldUserList) => {
                    oldUserList.delete(num);
                    return oldUserList
                });
            } else {
                setNewUserList((oldUserList) => oldUserList.set(num, catalog));
            }
        };
    }

    return(
        <main>
                <p>Hier können Sie auswählen, welche Themen und Unterkategorien für Sie relevant sind:</p>

            <article>
                <p>Organisation im Betrieb</p>
                <button className={ "addBTN" }
                        onClick={toggleCategory(1,arbeitsschutzOrganisationCatalog)
                        }>Arbeitsschutzorganisation</button>
            </article>

            <article>
                <p>Organisation auf der Baustelle</p>

                <button className={ "addBTN" }
                        onClick={toggleCategory(2,arbeitsschutzBaustelleCatalog)
                        }>Arbeitsschutzorganisation der Baustelle
                </button>
            </article>

            <article>
                <p>Verkehrswege, Arbeitsplätze und Transport</p>

                <button className={ "addBTN" }
                        onClick={toggleCategory(3,aUbvArbUVerk)
                        }>Anlegen / Benutzen von Arbeitsplätzen und Verkehrswegen
                </button>

                <button className={ "addBTN" }
                        onClick={toggleCategory(4,nutzGerue)
                        }>Benutzung von Gerüsten
                </button>

                <button className={ "addBTN" }
                        onClick={toggleCategory(5,nutzMobGerue)
                        }>Benutzung von Bühnen und Kleingerüsten
                </button>

                <button className={ "addBTN" }
                        onClick={toggleCategory(6,nutzLeit)
                        }>Leitern als Arbeitsplatz
                </button>

                <button className={ "addBTN" }
                        onClick={toggleCategory(7,hoArbpl)
                        }>Aufstieg zu hochgelegenen Arbeitsplätzen
                </button>

                <button className={ "addBTN" }
                        onClick={toggleCategory(8,strom)
                        }>Stromversorgung auf der Baustelle
                </button>

                <button className={ "addBTN" }
                        onClick={toggleCategory(9,matTrans)
                        }>Materialtransport
                </button>

                <button className={ "addBTN" }
                        onClick={toggleCategory(10,gefLager)
                        }>Gefahrstofflager
                </button>
            </article>

            <article>

                <p>Allgemeine Tätigkeiten</p>

                <button className={ "addBTN" }
                        onClick={toggleCategory(11,arbKoerpBel)
                        }>Arbeiten mit hoher körperlicher Belastung
                </button>

                <button className={ "addBTN" }
                        onClick={toggleCategory(12,arbHndMas)
                        }>Arbeiten mit Handmaschinen
                </button>

                <button className={ "addBTN" }
                        onClick={toggleCategory(13,vibr)
                        }>Vibrationen
                </button>

                <button className={ "addBTN" }
                        onClick={toggleCategory(14,hochdWass)
                        }>Hochdruckwasserstahlen
                </button>

            </article>

            <article>

                <p>Tätigkeiten mit Gefahrstoffen</p>

                <button className={ "addBTN" }
                        onClick={toggleCategory(15,taetGef)
                        }>Tätigkeiten mit Gefahrstoffen
                </button>

                <button className={ "addBTN" }
                            onClick={toggleCategory(16,umgStaub)
                        }>Umgang mit Stäuben
                </button>

                <button className={ "addBTN" }
                            onClick={toggleCategory(17,klBesSpa)
                        }>Kleben, Beschichten, Spachteln
                </button>

                <button className={ "addBTN" }
                            onClick={toggleCategory(18,entfUnterg)
                        }>Entfernen alter Untergründe
                </button>

            </article>

            <article>

                <p>stationäre Arbeitsplätze</p>

                <button className={ "addBTN" }
                        onClick={toggleCategory(19,bhf)
                        }>Bauhof/Werks- und Betriebsgelände
                </button>

                <button className={ "addBTN" }
                            onClick={toggleCategory(20,office)
                        }>Büroarbeit
                </button>

                <button className={ "addBTN" }
                            onClick={toggleCategory(21,loud)
                        }>Arbeiten unter Lärmbelästigung
                </button>

                <button className={ "addBTN" }
                            onClick={toggleCategory(22,arbHndMas2)
                        }>Arbeiten mit Handmaschinen stationär
                </button>

                <button className={ "addBTN" }
                            onClick={toggleCategory(23,taetGef2)
                        }>Tätigkeiten mit Gefahrstoffen stationär
                </button>

                <button className={ "addBTN" }
                            onClick={toggleCategory(24,sprLack)
                        }>Spritzlackierung
                </button>

                <button className={ "addBTN" }
                            onClick={toggleCategory(25,tfnstrahl)
                        }>Trocken-/Feucht-/Nass- Druckluftstrahlen
                </button>

                <button className={ "addBTN" }
                            onClick={toggleCategory(26,gefLager2)
                        }>Gefahrstofflager stationär
                </button>

                <button className={ "addBTN" }
                            onClick={toggleCategory(27,tauchLack)
                        }>Tauchlackierung
                </button>

                <button className={ "addBTN" }
                            onClick={toggleCategory(28,arbVK)
                        }>Arbeiten an Verkaufstellen
                </button>
            </article>

            <NavLink className="regularBTN" to={"/userCreateNewEva2"} onClick={()=>{props.setUserCatalog(newUserList)}}>Weiter <FiArrowRight/></NavLink>
        </main>
    )
}