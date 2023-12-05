import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    age: "",
    email: "",
    phoneNumber: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://eventhorizonbackend-4090e4862a7d.herokuapp.com/user/signup",
        formData
      );
      console.log(response.data);
      alert("User Registered Sucessfully");
      navigate("/login");
    } catch (error) {
      console.error("Signup Error:", error);
    }
  };

  return (
    <div className={"signup-form-container"}>
      <div>
        <h2>Welcome to EventHorizon - Join the revolution</h2>
      </div>
      <div className="signup-form-container-2">
        <div className={"signup-form"}>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Age:</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Phone Number:</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
