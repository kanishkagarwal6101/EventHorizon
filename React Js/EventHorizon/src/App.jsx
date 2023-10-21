import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Use "Routes" instead of "Switch"
import Login from "./Login.jsx";
import SignupForm from "./Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
