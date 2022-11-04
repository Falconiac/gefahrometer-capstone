import CreateUserFormAdmin from "../../components/createUserForm/CreateUserFormAdmin";
import useUsers from "../../hooks/useUsers";
import UserCard from "../../components/userCard/UserCard";
import "./AdminSection.css";
import User from "../../model/User";
import useEvaluation from "../../hooks/useEvaluation";
import CreateEvaluationForm from "../../components/createEvaluationCatalogForm/CreateEvaluationForm";
import AdminEvaluationCheatSheet from "../../components/adminEvaluationSection/AdminEvaluationCheatSheet";
import Evaluation from "../../model/Evatuation";
import EvaluationCard from "../../components/evaluationCard/EvaluationCard";
import {NavLink} from "react-router-dom";

export default function AdminSection(){

    const {users, getUsers} = useUsers();
    const { evaluationCatalog,getEvaluationCatalog} = useEvaluation();

    return(
        <>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/dangerZone"}>Beurteilungsverwaltung</NavLink>

        <section className={"adminUserSection"}>

            <CreateUserFormAdmin reloadUsers={getUsers}/>

            <div className={"companyList"}>
            {users.map((user : User) => {
                return <UserCard key={user.accountName} user={user} reloadUsers={getUsers}/>
            })}
            </div>
        </section>

            <AdminEvaluationCheatSheet/>

            <CreateEvaluationForm reloadEvaluations={getEvaluationCatalog}/>

            <div className={"evaList"}>
                {evaluationCatalog.map((eva : Evaluation) => {
                    return <EvaluationCard key={eva.id} eva={eva} reloadEvaluations={getEvaluationCatalog}/>
                })}
            </div>

        </>

    )
}

