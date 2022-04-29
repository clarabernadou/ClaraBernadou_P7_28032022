import "./register.css";
import Logo from "../../assets/logo/groupomania-logo.png"
import React from "react";

export default function Register() {
  
  return (
    <div className="register">
      <div className="registerWrapper">
        <header className="registerHeader">
          <img className="registerLogo" src={Logo} />
        </header>
        <div className="registerBody">
          <form className="registerForm">
            <input placeholder="Username" className="registerInput" />
            <input placeholder="Email" className="registerInput" />
            <input placeholder="Password" className="registerInput" />
            <span className="haveAccount">Already have an account ? Log in</span>
            <button className="registerButton">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
