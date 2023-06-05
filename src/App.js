import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CollectionPage from "./pages/CollectionPage";
import Home from "./pages/Home";


import "./scss/style.css";

function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffb800");


  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={'/collection'} element={<CollectionPage />} />
      </Routes>
    </div>

  );
}

export default App;
