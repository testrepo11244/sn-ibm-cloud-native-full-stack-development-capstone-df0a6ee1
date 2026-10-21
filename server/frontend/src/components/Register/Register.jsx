import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { username, firstName, lastName, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const registerURL = `${process.env.REACT_APP_BACKEND_URL}/djangoapp/register`;

    try {
      const res = await fetch(registerURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: username,
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        }),
      });

      const data = await res.json();

      if (res.status === 200 && data.userName) {
        // Registration successful - store username in session and go to home page
        sessionStorage.setItem("username", data.userName);
        navigate("/");
      } else if (res.status === 409) {
        setErrorMessage(
          "The username already exists. Please choose a different username."
        );
      } else {
        setErrorMessage(data.error || "Registration failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage(
        "Unable to connect to the server. Please try again later."
      );
    }
  };

  return (
    <div className="register_container">
      <div className="register_form_container">
        <h1 className="register_title">Sign Up</h1>
        <p className="register_subtitle">
          Create your account to review our dealers
        </p>

        <form onSubmit={onSubmit} className="register_form">
          <div className="form_group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={onChange}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="form_group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={onChange}
              placeholder="Enter your first name"
              required
            />
          </div>

          <div className="form_group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={onChange}
              placeholder="Enter your last name"
              required
            />
          </div>

          <div className="form_group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="form_group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Enter your password"
              minLength="6"
              required
            />
          </div>

          {errorMessage && <p className="error_message">{errorMessage}</p>}

          <button type="submit" className="register_button">
            Register
          </button>
        </form>

        <p className="login_redirect">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;