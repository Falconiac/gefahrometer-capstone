import CreateUserFormAdmin from "../../components/createUserForm/CreateUserFormAdmin";
import useUsers from "../../hooks/useUsers";
import UserCard from "../../components/userCard/UserCard";
import "./AdminSection.css";
import User from "../../model/User";
import useEvaluation from "../../hooks/useEvaluation";
import CreateEvaluationForm from "../../components/createEvaluationCatalogForm/CreateEvaluationForm";
import AdminEvaluationCheatSheet from "../../components/adminEvaluationSection/AdminEvaluationCheatSheet";
import Evaluation from "../../model/Evaluation";
import EvaluationCard from "../../components/evaluationCard/EvaluationCard";

export default function AdminSection(){

    const {users, getAllUsers} = useUsers();
    const { evaluationCatalog,getEvaluationCatalog} = useEvaluation();

    return(
        <>


        <section className={"adminUserSection"}>

            <CreateUserFormAdmin reloadUsers={getAllUsers}/>

            <div className={"companyList"}>
            {users.map((user : User) => {
                return <UserCard key={user.accountName} user={user} reloadUsers={getAllUsers}/>
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

