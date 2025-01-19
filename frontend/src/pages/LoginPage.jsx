import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
// import "./LoginPage.module.css";

const LoginPage = () => {
  useEffect(() => {
    document.body.className = "login-body"; // Optional if you want to add a class to body for this page
    return () => {
      document.body.className = ""; // Clean up when unmounting
    };
  }, []);
  return (
    <Container className="login-form">
      <div className="card-container"></div>
      <h1 className="login-heading">User Login</h1>
      <form>
        <div className="user-pass">
          <div className="user">
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" name="username" />
          </div>
          <br />
          <div class="pass">
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" />
            <br />
          </div>
        </div>
        <div className="button">
          <button type="submit">Sign In</button>
        </div>
      </form>
    </Container>
  );
};
export default LoginPage;