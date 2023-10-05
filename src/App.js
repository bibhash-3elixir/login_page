import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import SignIn from "./signIn";
import SignUp from "./signUp";
import Home from "./Dashboard";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes> 
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>Home Page</h2>;
// }

export default App;
