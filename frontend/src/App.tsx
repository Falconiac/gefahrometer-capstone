import './App.css';
import AdminSection from "./pages/adminSection/AdminSection";
import {HashRouter, Route, Routes} from "react-router-dom";
import Landingpage from "./pages/landingPage/LandingPage";
import DangerZone from "./pages/dangerZone/DangerZone";

function App() {


  return (
    <div className="App">
      <header className="App-header">



          <HashRouter>
              <Routes>
                  <Route path={"/"} element={<Landingpage/>}/>
                  <Route path={"/admin"} element={<AdminSection />}/>
                  <Route path={"/dangerZone"} element={<DangerZone />}/>
              </Routes>
          </HashRouter>

      </header>
    </div>
  );
}

export default App;


