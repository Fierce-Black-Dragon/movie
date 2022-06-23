import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.js";
import MoiveD from "./pages/MovieD.js";

function App() {
  // <Home />
  return (
    <BrowserRouter>
      <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
    
    <Route path="movie/:id"  element={<MoiveD/>} />
   
  
    
    </Routes>
    </div>
    
  </BrowserRouter>
  
  );
}

export default App;
