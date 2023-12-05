import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://eventhorizonbackend-4090e4862a7d.herokuapp.com/user/login",
        {
          userId: userId,
          password: password,
        }
      );

      const user = response.data.user;
      console.log(`Logged in as ${user.userId}`);
      navigate("/landingpage");
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };

  return (
    <div className="login-page-container">
      <div>
        <h2 className="heading">Welcome to EventHorizon - We missed you!</h2>
      </div>
      <div className="login-container">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
      <div className="footer-btns">
        <button className="login-new-user">
          <a href="/signup" target="_blank" rel="noopener noreferrer">
            New User?
          </a>
        </button>
        <button className="forgot-password">
          <a href="/forgot-password" target="_blank" rel="noopener noreferrer">
            Forgot Password?
          </a>
        </button>
      </div>
    </div>
  );
}

export default Login;
