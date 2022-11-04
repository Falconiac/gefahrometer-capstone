import './App.css';
import AdminSection from "./pages/adminSection/AdminSection";
import {HashRouter, Route, Routes} from "react-router-dom";
import Landingpage from "./pages/landingPage/LandingPage";
import DangerZone from "./pages/dangerZone/DangerZone";
import NavBar from "./components/navBar/NavBar";
import useUsers from "./hooks/useUsers";

function App() {

    const {me, setMe} = useUsers();

  return (
    <div className="App">

      <main className="App-header">
          <NavBar loggedIn={me}/>
          <HashRouter>
              <Routes>
                  <Route path={"/"} element={<Landingpage setUser={setMe}/>}/>
                  <Route path={"/admin"} element={<AdminSection />}/>
                  <Route path={"/dangerZone"} element={<DangerZone thisUser={me} />}/>
              </Routes>
          </HashRouter>

      </main>
    </div>
  );
}

export default App;


