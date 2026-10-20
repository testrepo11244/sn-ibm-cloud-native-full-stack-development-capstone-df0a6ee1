import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await fetch(
        'http://localhost:8000/djangoapp/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (response.status === 200 && data.status === 'registered') {
        // Store the logged-in username and redirect to the home page
        sessionStorage.setItem('username', formData.username);
        navigate('/djangoapp');
      } else if (data.error === 'Already Registered') {
        setErrorMessage('The username is already registered. Please login.');
      } else {
        setErrorMessage(
          data.error || 'Registration failed. Please try again.'
        );
      }
    } catch (error) {
      setErrorMessage('Unable to reach the server. Please try again later.');
    }
  };

  return (
    <div className="register_container">
      <div className="register_panel">
        <h1>Sign Up</h1>
        <p>Create your Best Cars Dealership account</p>

        {errorMessage && (
          <div className="register_error">{errorMessage}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form_group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter a username"
              required
            />
          </div>

          <div className="form_group">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="Enter your first name"
              required
            />
          </div>

          <div className="form_group">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter a password"
              required
            />
          </div>

          <button type="submit" className="register_button">
            Register
          </button>
        </form>

        <p className="login_link">
          Already have an account? <Link to="/djangoapp/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;