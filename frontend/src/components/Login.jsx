import { useState } from "react";
import "../styles/register.css";
import { loginUser } from "../services/authService";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser(formData);
    alert(response.message || response.error);
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="plant-decoration top-left"></div>
        <div className="plant-decoration top-right"></div>
        <div className="plant-decoration bottom-left"></div>
        <div className="plant-decoration bottom-right"></div>
        
        <h1 className="register-title">Welcome Back</h1>
        <p className="register-subtitle">Access your virtual herbal garden</p>
        
        <form onSubmit={handleSubmit} className="register-form">
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
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              minLength="6"
              required
              className="form-input"
            />
            <span className="input-icon">🔒</span>
          </div>
          
          <div className="forgot-password">
            <a href="/forgot-password">Forgot password?</a>
          </div>
          
          <div className="button-container">
            <button type="submit" className="submit-button">
              <span>Return to Garden</span>
            </button>
          </div>
        </form>
        
        <div className="login-link">
          Don't have an account? <a href="/register">Register now</a>
        </div>
      </div>
    </div>
  );
};

export default Login;