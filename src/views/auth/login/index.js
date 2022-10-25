import React, { useState } from "react";
import styles from "../auth.module.css";
import logo from "../../../assets/logo.svg";
import googleW from "../../../assets/google.png";
import facebookW from "../../../assets/fb.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/actions/user.action";

const Login = () => {
  const navigate = useNavigate();
  const dispacth = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispacth(login(form, navigate));
  };

  return (
    <>
      <div className="row">
        <div className={`${styles.column1} col-7`}></div>
        <div className={`${styles.column2} col-5`}>
          <img className={styles.logo1} src={logo} alt="logo" />
          <h4 className={styles.textLogo1}>Ankasa</h4>
          <div className={styles.textLogo2}>
            <h3 className={styles.login}>Login</h3>
          </div>
          <div className={styles.loginBox}>
            <form onSubmit={handleSubmit}>
              <div className={`${styles.userBox} ${styles.userBoxZ}`}>
                <input
                  className={styles.ub}
                  type="email"
                  name="email"
                  onChange={handleInput}
                  required
                />
                <label className={styles.lm}>Email</label>
              </div>
              <div className={`${styles.userBox} ${styles.userBoxZ}`}>
                <input
                  className={styles.ub}
                  type="password"
                  name="password"
                  onChange={handleInput}
                  required
                />
                <label className={styles.lm}>Password</label>
              </div>
              <div className={`${styles.Button} btn d-flex `} role="search">
                <button className={styles.signUp} type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          <div className={styles.forgot}>
            <p className={styles.forgotP}>Did you forgot your password?</p>
            <Link className={styles.tap} to="">
              <p className={styles.tapText}>Tap here for reset</p>
            </Link>
          </div>
          <hr className={styles.hr} />
          <div className={styles.or}>
            <p className={styles.textOr}>or sign in with</p>
          </div>
          <div className={styles.wLogin}>
            <div className={styles.Bicon}>
              <img src={googleW} alt="google icon" />
            </div>
            <div className={styles.Bicon1}>
              <img className={styles.fb} src={facebookW} alt="facebook icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
