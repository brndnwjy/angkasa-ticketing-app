import React from "react";
import styles from "./flightDetail.module.css";
import Navbar from "../../components/module/navbar";
import Footer from "../../components/module/footer";
import garuda from "../../assets/airline.png";
import img2 from "../../assets/vps.png";
import ceklis from "../../assets/centang.png";
import bnr from "../../assets/pesawat.svg";

// import v from '../../assets/btnback.png';
import { Link } from "react-router-dom";

const FlightDetail = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="row">
          <div className={`${styles.benner} col-12`}>
            <img className={styles.bnr} src={bnr} alt="" />
            <h2 className={styles.textPerson}>Contact Person Details</h2>
            <h3 className={styles.fd}>Flight Detail</h3>
            <h4 className={styles.vd}>View Detail</h4>
          </div>
          <div className={`${styles.c1} col-7 bg-light`}>
            <div className={styles.cForm}>
              <form className="pt-2">
                <div className={`${styles.formR} form-floating mx-5`}>
                  <input
                    type="email"
                    className={`${styles.nn} form-control mt-5`}
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Full Name</label>
                </div>
                <div className={`${styles.formR} form-floating mx-5`}>
                  <input
                    type="email"
                    className={`${styles.nn} form-control`}
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email</label>
                </div>
                <div className={`${styles.formR} form-floating mx-5`}>
                  <input
                    type="tel"
                    className={`${styles.nn} form-control`}
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Phone</label>
                </div>

                <div
                  className={`${styles.group} ${styles.alert} alert alert-danger mx-5`}
                  role="alert"
                >
                  Make sure the customer data is correct.
                </div>
              </form>
            </div>

            <div className={styles.containerPD}>
              <h2 className={styles.pd}>Passenger Details</h2>
              <div className={styles.containerFormPD}>
                <div className={styles.contentForm}>
                  <div
                    className={`${styles.alert1} alert alert-success mx-5 d-flex flex-row `}
                    role="alert"
                  >
                    <p className="col-md-7">Passenger : 1 Adult</p>
                    <p className="text-end">Same as contact person</p>
                  </div>
                </div>
                <div className={`${styles.formR} form-floating mx-5`}>
                  <input
                    type="text"
                    className={`${styles.nn} form-control`}
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Title</label>
                </div>

                <div className={`${styles.formR} form-floating mx-5`}>
                  <input
                    type="email"
                    className={`${styles.nn} form-control`}
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Full Name</label>
                </div>

                <div className={`${styles.formR} form-floating mx-5`}>
                  <input
                    type="email"
                    className={`${styles.nn} form-control`}
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Nationality</label>
                </div>
              </div>
            </div>
            <div className={styles.containerPD}>
              <h2 className={styles.pd}>Passenger Details</h2>
              <div className={styles.containerFPD}>
                <div className={styles.contentForm}>
                  <div className={`${styles.fc} form-check`}>
                    <input
                      className={`${styles.Ib} form-check-input mt-1`}
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className={`${styles.Ti} form-check-label text-dark`}
                      for="flexCheckDefault"
                    ></label>
                    <span className={styles.Tn}>Travel Insurance</span>
                    <p className={styles.dollar}>
                      <span className={styles.d1}>$ 2,00</span>/pax
                    </p>
                  </div>
                  <hr className={styles.hr} />

                  <span className={styles.gt}>
                    Get travel compensation up to $ 10.000,00
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.buttonEnd}>
              <button className={`${styles.buttonA} btn btn-primary `}>
                Book Flight
              </button>
            </div>
          </div>

          <div className={`${styles.c2} col-5 bg-light`}>
            <div className={styles.cgaruda}>
              <div className={styles.garuda}>
                <div className={styles.gr}>
                  <img className={styles.imgGaruda} src={garuda} alt="" />
                  <div className={styles.text1}>
                    <span className={styles.textGr}>Garuda Indonesia</span>
                  </div>
                </div>
                <div className={styles.location}>
                  <h6 className={styles.TextM}>Medan (IDN)</h6>
                  <img className={styles.imgFL} src={img2} alt="" />
                  <h6 className={styles.TextMT}>Tokyo (JPN)</h6>
                </div>

                <div className={styles.sunday}>
                  <span className={styles.textS}>Sunday, 15 August 2020</span>
                  <span className={styles.textA}> . </span>
                  <span className={styles.textB}>12:33 - 15:21</span>
                </div>

                <div className={styles.ceklis}>
                  <img src={ceklis} alt="" />
                  <span className={styles.r}>Refundable</span>
                  <br />
                  <img src={ceklis} alt="" />
                  <span className={styles.c}>Can reschedule</span>
                </div>
                <hr className={styles.hrQ} />
                <span className={styles.tp}>Total Payment</span>
                <span className={styles.dollar2}>$ 145,00</span>
                <span className={styles.v}>V</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FlightDetail;
