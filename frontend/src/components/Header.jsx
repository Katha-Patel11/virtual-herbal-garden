import React from "react";
import "../styles/header.css";
const Header=()=>{
    return(
        <header className="header">
        <div className="logo">Herbal Garden</div>
        <nav className="navigation">
          <ul>
            <li><a href="/" className="active">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="/herbalcure">Herbal Cures</a></li>
            <li><a href="#">Explore</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="/register">Login/SignUp</a></li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;