import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { username, first_name, last_name, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !first_name || !last_name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    try {
      const form = new FormData();
      form.append("username", username);
      form.append("first_name", first_name);
      form.append("last_name", last_name);
      form.append("email", email);
      form.append("password", password);

      const response = await fetch(
        "http://localhost:8000/djangoapp/register",
        {
          method: "POST",
          body: form,
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.status === "authenticated") {
          sessionStorage.setItem("username", data.username);
          sessionStorage.setItem("isAuthenticated", true);
          navigate("/");
        } else {
          setError(data.error || "Registration failed. Please try again.");
        }
      } else {
        setError(
          "Registration failed. The username may already be taken."
        );
      }
    } catch (err) {
      setError(
        "Unable to connect to the server. Please try again later."
      );
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Sign Up</h1>
        <p className="register-subtitle">
          Create your Best Cars Dealership account
        </p>

        {error && <div className="register-error">{error}</div>}

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={onChange}
              placeholder="Enter username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={first_name}
              onChange={onChange}
              placeholder="Enter first name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={last_name}
              onChange={onChange}
              placeholder="Enter last name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Enter email address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Enter password"
              required
            />
          </div>

          <button type="submit" className="register-button">
            Register
          </button>
        </form>

        <p className="register-login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;