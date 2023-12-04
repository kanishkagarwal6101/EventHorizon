import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Use "Routes" instead of "Switch"
import Login from "./components/login/Login.jsx";
import SignupForm from "./components/signup/Signup.jsx";
import LandingPage from "./components/landingPage/LandingPage.jsx";
import SeatingGrid from "./components/SeatingGrid/SeatingGrid.jsx";
import OrderConfirmed from "./components/OrderConfirmed/OrderConfirmed.jsx";
// import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/grid" element={<SeatingGrid />} />
        <Route path="/orderConfirmed" element={<OrderConfirmed />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <LandingPage />;
}

export default App;
