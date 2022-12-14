import './App.css';
import AdminSection from "./pages/adminSection/AdminSection";
import {HashRouter, Route, Routes} from "react-router-dom";
import Landingpage from "./pages/landingPage/LandingPage";
import DangerZone from "./pages/dangerZone/DangerZone";
import NavBar from "./components/navBar/NavBar";
import useUsers from "./hooks/useUsers";
import UpdateUserData from "./pages/updateUserData/UpdateUserData";
import UserCreateNewEva from "./pages/userCreateNewEva/UserCreateNewEva";
import EvaUserArea from "./pages/evaUserArea/EvaUserArea";
import useEvaluation from "./hooks/useEvaluation";
import UserCreateNewEva2 from "./pages/userCreateNewEva/UserCreateNewEva2";


function App() {

   const {userCatalog,setUserCatalog}=useEvaluation();

    const { me, setMe, user} = useUsers();

  return (
    <div className="App">
        <NavBar loggedIn={me}/>
      <main className="App-header">

          <HashRouter>
              <Routes>
                  <Route path={"/"} element={<Landingpage setUser={setMe}/>}/>
                  <Route path={"/admin"} element={<AdminSection />}/>
                  <Route path={"/dangerZone"} element={<DangerZone thisUser={user}/>}/>
                  <Route path={"/updateUser"} element={<UpdateUserData thisUser={user} />}/>
                  <Route path={"/userCreateNewEva"} element={<UserCreateNewEva thisUser={user} setUserCatalog={setUserCatalog}  />}/>
                  <Route path={"/userCreateNewEva2"} element={<UserCreateNewEva2 thisUser={user} catalog={userCatalog}/>}/>
                  <Route path={"/evaUserArea"} element={<EvaUserArea thisUser={user}/>}/>
              </Routes>
          </HashRouter>

      </main>
    </div>
  );
}

export default App;


