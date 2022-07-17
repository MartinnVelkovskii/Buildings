import React from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { BuildingTable } from "./components/buildings-table/BuildingTable";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/list" element={<BuildingTable/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
