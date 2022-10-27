
import './AdminEvaluationCheatSheetStyled.css'

export default function AdminEvaluationCheatSheet(){


    return(
        <section className={"evaField"}>

        <h3>Katagorien</h3>

            <article className={"cheatsheet"}>

        <div className={"categoryField"}>
        <h4>1. Organisation im Betrieb = orgaBetr</h4>
        <ul>
            <li>Arbeitschutzorganisation = arbSchOrga</li>
        </ul>
        </div>

        <div className={"categoryField"}>
        <h4>2. Organisation Baustelle/Objekt = orgaBauObj</h4>
            <ul>
                <li>Arbeitschutzorganisation der Baustelle = arbSchOrgaBau</li>
            </ul>
        </div>

        <div className={"categoryField"}>
        <h4>3. Verkehrswege, Arbeitsplätze und Transport = veArTr</h4>
            <ul>
                <li>Anlegen und Benutzen von Arbeitsplätzen und Verkehrswegen = aUbvArbUVerk</li>
                <li>Benutzung von Gerüsten = nutzGerue</li>
                <li>Benutzung von Bühnen und Kleingerüsten = nutzMobGerue</li>
                <li>Leitern als Arbeitsplatz = nutzLeit</li>
                <li>Aufstieg zu hochgelegenen Arbeitsplätzen = hoArbpl</li>
                <li>Stromversorgung auf der Baustelle = strom</li>
                <li>Materialtransport = matTrans</li>
                <li>Gefahrstofflager = gefLager</li>
            </ul>
        </div>

        <div className={"categoryField"}>
        <h4>4. Allgemeine Tätigkeiten = allgTaet</h4>
            <ul>
                <li>Arbeiten mit hoher körperlicher Belastung = arbKoerpBel</li>
                <li>Arbeiten mit Handmaschinen = arbHndMas</li>
                <li>Vibrationen = vibr</li>
                <li>Hochdruckwasserstahlen = hochdWass</li>
            </ul>
        </div>

        <div className={"categoryField"}>
        <h4>5. Tätigkeiten mit Gefahrstoffen = taetGef</h4>
            <ul>
                <li>Tätigkeiten mit Gefahrstoffen = taetGef</li>
                <li>Umgang mit Stäuben = umgStaub</li>
                <li>Kleben, Beschichten, Spachteln = klBesSpa</li>
                <li>Entfernen alter Untergründe = entfUnterg</li>

            </ul>
        </div>

        <div className={"categoryField"}>
        <h4>6. Stationäre Arbeitsplätze = orgaBetr</h4>
            <ul>
                <li>Bauhof = bhf</li>
                <li>Büroarbeit = office</li>
                <li>Arbeiten unter Lärmbelästigung = loud</li>
                <li>Arbeiten mit Handmaschinen 2 = arbHndMas2</li>
                <li>Tätigkeiten mit Gefahrstoffen 2 = taetGef2</li>
                <li>Spritzlackierung = sprLack</li>
                <li>Trocken-/Feucht-/Nass- Druckluftstrahlen = tfnstrahl</li>
                <li>Gefahrstofflager 2 = gefLager2</li>
                <li>Tauchlackierung = tauchLack</li>
                <li>Arbeiten an Verkaufstellen = arbVK</li>

            </ul>

        </div>

            </article>

        </section>


)


}