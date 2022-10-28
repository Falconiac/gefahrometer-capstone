import CreateUserForm from "../createUserForm/CreateUserForm";
import useUsers from "../../hooks/useUsers";
import UserCard from "../userCard/UserCard";
import "./AdminUserSection.css";
import User from "../../model/User";
import useEvaluation from "../../hooks/useEvaluation";
import CreateEvaluationForm from "../createEvaluationCatalogForm/CreateEvaluationForm";
import AdminEvaluationCheatSheet from "../adminEvaluationSection/AdminEvaluationCheatSheet";
import Evaluation from "../../model/Evatuation";
import EvaluationCard from "../evaluationCard/EvaluationCard";





export default function AdminUserSection(){


    const {users, getUsers} = useUsers();
    const { evaluationCatalog,getEvaluationCatalog} = useEvaluation();

    return(
        <>
        <section className={"adminUserSection"}>

            <CreateUserForm reloadUsers={getUsers}/>

            <div className={"companyList"}>
            {users.map((user : User) => {
                return <UserCard key={user.id} user={user} reloadUsers={getUsers}/>
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

