import CreateUserForm from "../createUserForm/CreateUserForm";
import useUsers from "../../hooks/useUsers";
import UserCard from "../userCard/UserCard";
import "./AdminUserSection.css";
import User from "../../model/User";





export default function AdminUserSection(){

    const {users, getUsers} = useUsers();

    return(

        <section className={"adminUserSection"}>

            <CreateUserForm reloadUsers={getUsers}/>

            <div className={"companyList"}>
            {users.map((user : User) => {
                return <UserCard key={user.id} user={user} reloadUsers={getUsers}/>
            })}
            </div>

        </section>

    )



}

