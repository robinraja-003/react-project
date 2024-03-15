import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-Up</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Set Password</h5>
          <input type="password" />
          <h5>Confirm Password</h5>
          <input type="password" />
          <button className="login_signInButton">Sign Up</button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        </div>
    </div>
  );
}

export default Signup;
