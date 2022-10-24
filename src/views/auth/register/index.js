import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import styles from "../auth.module.css";

const Register = () => {
  const navigate = useNavigate();

  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/user/Register`, registerForm)
      .then((res) => {
        console.log(res);
        navigate("/login");
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
        Username
        <hr />
        <input
          type="text"
          name="username"
          placeholder="username"
          className="my-1"
          onChange={handleInput}
        />
      </label>
      <label>
        Email
        <hr />
        <input
          type="email"
          name="email"
          placeholder="email"
          className="my-1"
          onChange={handleInput}
        />
      </label>
      <label>
        Phone
        <hr />
        <input
          type="tel"
          name="phone"
          placeholder="phone"
          className="my-1"
          onChange={handleInput}
        />
      </label>
      <label>
        Password
        <hr />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="my-1"
          onChange={handleInput}
        />
      </label>
      <button type="submit" className="btn btn-primary mt-3">
        register
      </button>
    </form>
  );
};

export default Register;
