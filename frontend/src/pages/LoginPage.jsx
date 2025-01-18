import React, { useEffect } from "react";
import './LoginPage.css';

const LoginPage = () => {
  useEffect(() => {
    document.body.className = "login-body"; // Optional if you want to add a class to body for this page
    return () => {
      document.body.className = ""; // Clean up when unmounting
    };
  }, []);
  return (
    <div className="login-form">
      <div className="card-container"></div>
      <h1 className="login-heading">User Login</h1>
      <form>
        <div className="username-ctr">
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" name="username" />
          <br />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" />
          <br />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
export default LoginPage;