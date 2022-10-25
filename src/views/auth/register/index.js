import React from 'react';
import styles from '../auth.module.css';
import logo from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <div className="row">
        <div className={`${styles.column1} col-7`}></div>
        <div className={`${styles.column2} col-5`}>
          <img className={styles.logo1} src={logo} />
          <h4 className={styles.textLogo1}>Ankasa</h4>
          <div className={styles.textLogo2}>
            <h3 className={`${styles.login} ${styles.register1}`}>Register</h3>
          </div>
          <div className={styles.loginBox}>
            <form>
              <div className={`${styles.userBox} ${styles.userBoxZ}`}>
                <input className={styles.ub} type="text" name="" required="" />
                <label className={styles.lm}>Full Name</label>
              </div>
              <div className={styles.userBox}>
                <input className={styles.ub} type="text" name="" required="" />
                <label className={styles.lm}>Email</label>
              </div>
              <div className={styles.userBox}>
                <input className={styles.ub} type="password" name="" required="" />
                <label className={styles.lm}>Password</label>
              </div>
            </form>
          </div>
          <Link to="/login">
            <form className={`${styles.Button} btn d-flex `} role="search">
              <button className={`${styles.signUp} ${styles.signUp3}`} type="submit">
                Sign Up
              </button>
            </form>
          </Link>
          <div className={styles.checkbox}>
            <input type="checkbox" id="agree" name="agree" className={styles.tCheckbox} required />
            <label className={styles.labelI} for="agree">
              I agree to terms & conditions
            </label>
          </div>
          <hr className={styles.hr} />
          <div className={styles.forgot}>
            <p className={`${styles.forgotP} ms-3`}>Already have an account?</p>
          </div>
          <Link to="/login">
            <form className={`${styles.ButtonLogin} d-flex  `} role="search">
              <button className={`${styles.Login} ${styles.signUp1}  btn btn-outline-primary`} type="submit">
                Sign In
              </button>
            </form>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
