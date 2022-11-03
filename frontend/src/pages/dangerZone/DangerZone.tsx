
type DangerZoneProps = {
    thisUser : string;
}

export default function DangerZone(props: DangerZoneProps){
    return (
        <main>
        <h2>Hallo {props.thisUser} !</h2>
        </main>
    )
}