import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import LeagueMatch from "./Pages/LeagueMatch";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route path='/:league' element={<LeagueMatch/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
