import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./Components/SideBar/SideBar";
import MainPage from "./Pages/MainPage/MainPage";
import TablePage from "./Pages/TablePage/TablePage";
import StatsPage from "./Pages/StatsPage/StatsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="deneme">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/stats" element={<StatsPage />} />
          </Routes>
          <SideBar />
        </div>
      </div>
    </Router>
  );
}

export default App;
