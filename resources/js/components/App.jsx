import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import "./Styles.css";
import { Login } from "./Login";
import { Register } from "./Register";
import amico from "./images/amico.png"
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Pricing from "./Pages/Pricing"
import Home from "./Pages/Home"
import About from "./Pages/About"


function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
      <>
      <Router>
      <Navbar />
     <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <div className="imageback">
            {
              currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
            }
          </div>
          <div className="immage">
            <img src={amico} alt=""/>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;