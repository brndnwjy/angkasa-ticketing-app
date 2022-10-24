import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import styles from "../auth.module.css";

const Login = () => {
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/user/Login`, loginForm)
      .then((res) => {
        console.log(res.data);
        
        localStorage.setItem("token", res.data.token.token);
        localStorage.setItem("data", JSON.stringify(res.data.token.data));
        navigate("/mybooking");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ height: "100vh" }}
      className="container col-12 d-flex flex-column justify-content-center align-items-center"
    >
      <label>
        Email
        <hr/>
        <input
          type="email"
          name="email"
          placeholder="email"
          className="my-1"
          onChange={handleInput}
        />
      </label>
      <label>
        Password
        <hr/>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="my-1"
          onChange={handleInput}
        />
      </label>
      <button type="submit" className="btn btn-primary mt-3">
        login
      </button>
    </form>
  );
};

export default Login;