import React from 'react';
import styles from '../auth.module.css';
import logo from '../../../assets/logo.svg';

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
                <input type="text" name="" required="" />
                <label>Full Name</label>
              </div>
              <div className={styles.userBox}>
                <input type="email" name="" required="" />
                <label>Email</label>
              </div>
              <div className={styles.userBox}>
                <input type="password" name="" required="" />
                <label>Password</label>
              </div>
            </form>
          </div>
          <form className={`${styles.Button} btn d-flex `} role="search">
            <button className={`${styles.signUp} ${styles.signUp3}`} type="submit">
              Sign Up
            </button>
          </form>
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
          <form className={`${styles.ButtonLogin} d-flex  `} role="search">
            <button className={`${styles.Login} ${styles.signUp1}  btn btn-outline-primary`} type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
