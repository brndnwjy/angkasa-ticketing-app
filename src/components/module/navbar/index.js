import React from 'react';
import styles from '../navbar/navbar.module.css';
import logo from '../../../assets/logo.svg';

const Navbar = () => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${styles.navi}`} >
        <div className={`${styles.containerNav} container-fluid ms-5`}>
          <a className={`${styles.containerLogo} navbar-brand`} href="#">
            <img className={styles.logo} src={logo} alt="Bootstrap" width="30" height="24" />
          </a>
          <a className="navbar-brand " href="#">
            <h2 className={styles.logoText}>Ankasa</h2>
          </a>
          <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className={`${styles.input} d-flex `} role="search">
              <input className={`${styles.search} form-control `} type="search" placeholder="Where you want to go?" aria-label="Search" />
            </form>
            <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0 ">
              <li className={`${styles.menuText} nav-item  `}>
                <a className=" nav-link active" data-bs-toggle="modal" data-bs-target="#exampleModal" aria-current="page" href="#">
                  Find Ticket
                </a>
              </li>
              <li className={`${styles.menuText} nav-item`}>
                <a className="nav-link active" href="#">
                  My Booking
                </a>
              </li>
            </ul>
            <form className={`${styles.Button} d-flex `} role="search">
              <button className={styles.signUp} type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
