import './App.css';
import AdminSection from "./pages/adminSection/AdminSection";
import {HashRouter, Route, Routes} from "react-router-dom";
import Landingpage from "./pages/landingPage/LandingPage";
import DangerZone from "./pages/dangerZone/DangerZone";
import NavBar from "./components/navBar/NavBar";
import useUsers from "./hooks/useUsers";
import UpdateUserData from "./pages/updateUserData/UpdateUserData";
import User from "./model/User";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const {me, setMe} = useUsers();

    const thisUser : User = {
        mail : "",
        accountName : "",
        passwordHash : "",
        manageFirstName : "",
        manageLastName : "",
        companyName : "",
        companyStreet : "",
        companyZip : "",
        companyLocation : "",
        employee1 : "",
        employee2 : "",
        employee3 : "",
        employee4 : "",
        employee5 : "",
        medicalCareName : "",
        medicalCareStreet : "",
        medicalCareZip : "",
        medicalCareLocation : ""
    }

    const [user, setUser] = useState(thisUser);

    useEffect(()=>{
        getUser()
    },[])

    const getUser = () =>{
        axios.get("/api/user/")
            .then((response )=>{return response.data})
            .then((users)=> setUser(user))
            .catch(error => {console.log(error)})
    }

  return (
    <div className="App">

      <main className="App-header">
          <NavBar loggedIn={me}/>
          <HashRouter>
              <Routes>
                  <Route path={"/"} element={<Landingpage setUser={setMe}/>}/>
                  <Route path={"/admin"} element={<AdminSection />}/>
                  <Route path={"/dangerZone"} element={<DangerZone thisUser={me} />}/>
                  <Route path={"/updateUser"} element={<UpdateUserData thisUser={user} />}/>
              </Routes>
          </HashRouter>

      </main>
    </div>
  );
}

export default App;


