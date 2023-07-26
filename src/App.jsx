import React from "react";
import Navbar from "./common/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
    </>
  );
};

export default App;
