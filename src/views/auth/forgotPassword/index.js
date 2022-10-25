import React from 'react';
import styles from '../auth.module.css';
import logo from '../../../assets/logo.svg';

const ForgotPassword = () => {
  return (
    <>
      <div className="row">
        <div className={`${styles.column1} col-7`}></div>
        <div className={`${styles.column2} col-5`}>
          <img className={styles.logo1} src={logo} />
          <h4 className={styles.textLogo1}>Ankasa</h4>
          <div className={styles.textLogo2}>
            <h3 className={styles.login}>Forgot Password</h3>
          </div>
          <div className={styles.loginBox}>
            <form>
              <div className={`${styles.userBox} ${styles.userBoxZ}`}>
                <input className={styles.ub} type="text" name="" required="" />
                <label className={styles.lm}>Email</label>
              </div>
            </form>
          </div>
          <form className={`${styles.ButtonY} d-flex `} role="search">
            <button className={`${styles.signUp} ${styles.signUp2}`} type="submit">
              Send
            </button>
          </form>
          <div className={styles.forgotY}>
            <p className={`${styles.forgotP} ${styles.forgotP1}`}>You’ll get message soon on your email</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
