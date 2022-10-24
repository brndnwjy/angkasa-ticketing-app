import React from 'react';
import styles from '../auth.module.css';
import logo from '../../../assets/logo.svg';
import googleW from '../../../assets/google.png';
import facebookW from '../../../assets/fb.png';

const Login = () => {
  return (
    <>
      <div className="row">
        <div className={`${styles.column1} col-7`}></div>
        <div className={`${styles.column2} col-5`}>
          <img className={styles.logo1} src={logo} />
          <h4 className={styles.textLogo1}>Ankasa</h4>
          <div className={styles.textLogo2}>
            <h3 className={styles.login}>Login</h3>
          </div>
          <div className={styles.loginBox}>
            <form>
              <div className={styles.userBox}>
                <input type="text" name="" required="" />
                <label>Username</label>
              </div>
              <div className={styles.userBox}>
                <input type="password" name="" required="" />
                <label>Password</label>
              </div>
            </form>
          </div>
          <form className={`${styles.Button} btn d-flex `} role="search">
            <button className={styles.signUp} type="submit">
              Sign Up
            </button>
          </form>
          <div className={styles.forgot}>
            <p className={styles.forgotP}>Did you forgot your password?</p>
            <a className={styles.tap} href="">
              <p className={styles.tapText}>Tap here for reset</p>
            </a>
          </div>
          <hr className={styles.hr} />
          <div className={styles.or}>
            <p className={styles.textOr}>or sign in with</p>
          </div>
          <div className={styles.wLogin}>
            <div className={styles.Bicon}>
              <img src={googleW} />
            </div>
            <div className={styles.Bicon1}>
              <img className={styles.fb} src={facebookW} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
