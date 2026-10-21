import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setMessage("");

    try {
      const response = await fetch(
        "http://localhost:8000/djangoapp/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (response.status === 201 && data.status === "Registered") {
        setMessage("Registration successful! You can now log in.");
        sessionStorage.setItem("username", data.username);
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else if (data.error === "Already Registered") {
        setError(true);
        setMessage(
          "The username is already registered. Please choose a different username."
        );
      } else {
        setError(true);
        setMessage("Registration failed. Please check your details and try again.");
      }
    } catch (err) {
      setError(true);
      setMessage("Unable to reach the server. Please try again later.");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Sign Up</h1>
        <p className="register-subtitle">
          Create your Best Cars Dealership account to review dealers.
        </p>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="Enter your first name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Enter your last name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              minLength="8"
              required
            />
          </div>

          <button type="submit" className="register-button">
            Register
          </button>
        </form>

        {message && (
          <p className={error ? "register-error" : "register-success"}>
            {message}
          </p>
        )}

        <p className="register-login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;