import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./Components/SideBar/SideBar";
import MainPage from "./Pages/MainPage/MainPage";
import TablePage from "./Pages/TablePage/TablePage";
import StatsPage from "./Pages/StatsPage/StatsPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/stats" element={<StatsPage />} />
        </Routes>
        <div>
        <SideBar />
        </div>
       
      </div>
    </div>
  );
}

export default App;
