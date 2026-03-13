import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Home from "./Home";

import ApiDemo from "./ApiDemo";
import TaskDisplay from './TaskDisplay';
import Task from './Task'

import "./style.css";
import "./navbar.css";

function NavBar() {
  return (
    <div>

      {/* Navbar */}
      <div className="navbar">

        <Link to="/">Home</Link>

       

        <Link to="/api">API Demo</Link>
        
        <Link to="/TaskDisplay">TaskDisplay</Link>
        
        <Link to ="/task">Task</Link>

      </div>

      {/* Routes */}

      <Routes>

        <Route path="/" element={<Home />} />

       
    

        <Route path="/api" element={<ApiDemo />} />

        <Route path="/TaskDisplay" element={<TaskDisplay/>}/>

 <Route path="/task" element={<Task/>}/>
      </Routes>

    </div>
  );
}

export default NavBar;