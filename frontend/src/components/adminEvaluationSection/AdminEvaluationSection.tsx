export default function AdminEvaluationSection(){


    return(
        <article>

        <h3>Katagorien</h3>

    <div className={"categoryField"}>
        <p>Organisation im Betrieb = orgaBetr</p>
        <ul>
            <li>Arbeitschutzorganisation = arbSchOrga</li>
        </ul>
        </div>

        <div className={"categoryField"}>
        <p>Organisation Baustelle/Objekt = orgaBauObj</p>
            <ul>
                <li>Arbeitschutzorganisation der Baustelle = arbSchOrgaBau</li>
            </ul>
        </div>

        <div className={"categoryField"}>
        <p>Verkehrswege, Arbeitsplätze und Transport = veArTr</p>
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
        <p>Allgemeine Tätigkeiten = allgTaet</p>
            <ul>
                <li>Arbeiten mit hoher körperlicher Belastung = arbKoerpBel</li>
                <li>Arbeiten mit Handmaschinen = arbHndMas</li>
                <li>Vibrationen = vibr</li>
                <li>Hochdruckwasserstahlen = hochdWass</li>
            </ul>
        </div>

        <div className={"categoryField"}>
        <p>Tätigkeiten mit Gefahrstoffen = taetGef</p>
            <ul>
                <li>Tätigkeiten mit Gefahrstoffen = taetGef</li>
                <li>Umgang mit Stäuben = umgStaub</li>
                <li>Kleben, Beschichten, Spachteln = klBesSpa</li>
                <li>Entfernen alter Untergründe = entfUnterg</li>

            </ul>
        </div>

        <div className={"categoryField"}>
        <p>stationäre Arbeitsplätze = orgaBetr</p>

        </div>

        </article>


)


}