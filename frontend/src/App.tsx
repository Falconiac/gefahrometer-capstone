import logo from './logo.svg';
import './App.css';
import User from "./model/User";
import useUsers from "./hooks/useUsers";
import UserCard from "./components/UserCard/UserCard";
import CreateUserForm from "./components/createUserForm/CreateUserForm";

function App() {

  const {users} = useUsers();


  return (
    <div className="App">
      <header className="App-header">

          <CreateUserForm />

        {users.map((user : User)=>{
          return <UserCard key={user.mail} user={user}/>
        })}




      </header>
    </div>
  );
}

export default App;


