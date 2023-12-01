import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    //  Authentication logic
    if (userId && password) {
      console.log(`Logged in as ${userId}`);
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
        <button className="login-new-user" id="login-new-user">
          <a href="/signup" target="_blank">
            New User?
          </a>
        </button>
        <button className="forgot-password">
          <a href>Forgot Password?</a>
        </button>
      </div>
    </div>
  );
}

export default Login;
