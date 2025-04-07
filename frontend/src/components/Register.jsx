import { useState } from "react";
import "../styles/register.css";
import { registerNewUser } from "../services/authService";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await registerNewUser(formData);
    alert(response.message || response.error);
    setFormData({ name: "", email: "", age: "", password: "" });
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="plant-decoration top-left"></div>
        <div className="plant-decoration top-right"></div>
        <div className="plant-decoration bottom-left"></div>
        <div className="plant-decoration bottom-right"></div>
        
        <h1 className="register-title">Join Our Herbal Garden</h1>
        <p className="register-subtitle">Create your account and start your green journey</p>
        
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
            <span className="input-icon">🌿</span>
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
            <span className="input-icon">✉️</span>
          </div>
          
          <div className="form-group">
            <input
              type="number"
              name="age"
              placeholder="Age"
              min="12"
              max="120"
              value={formData.age}
              onChange={handleChange}
              required
              className="form-input"
            />
            <span className="input-icon">🌱</span>
          </div>
          
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              value={formData.password}
              onChange={handleChange}
              minLength="6"
              required
              className="form-input"
            />
            <span className="input-icon">🔒</span>
          </div>
          
          <div className="button-container">
            <button type="submit" className="submit-button">
              <span>Start Growing</span>
            </button>
          </div>
        </form>
        
        <div className="login-link">
          Already have an account? <a href="/login">Log in</a>
        </div>
        <div className="login-link">
           <a href="/">Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default Register;