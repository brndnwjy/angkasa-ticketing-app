import React from 'react';
import styles from './flightDetail.module.css';
import Navbar from '../../components/module/navbar';
import Footer from '../../components/module/footer';
import garuda from '../../assets/airline.png';
import img2 from '../../assets/vps.png';
import ceklis from '../../assets/centang.png';

import v from '../../assets/btnback.png';

const FlightDetail = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="row">
          <div className={`${styles.benner} col-12`}>
            <h2 className={styles.textPerson}>Contact Person Details</h2>
            <h3 className={styles.fd}>Flight Detail</h3>
            <h4 className={styles.vd}>View Detail</h4>
          </div>
          <div className={`${styles.c1} col-7 bg-light`}>
            <div className={styles.cForm}>
              <form className={styles.form}>
                <div className={`${styles.group} ${styles.grup1}`}>
                  <input type="text" required />
                  <span className={styles.highlight}></span>
                  <span className={styles.bar}></span>
                  <label className={styles.f}>Full Name</label>
                </div>

                <div className={styles.group}>
                  <input type="text" required />
                  <span className={styles.highlight}></span>
                  <span className={styles.bar}></span>
                  <label>Email</label>
                </div>

                <div className={`${styles.group}  ${styles.phone} input-group mb-3`}>
                  <button className={`${styles.buttonW} btn btn-outline-secondary dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    +62
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                  </ul>
                  <input type="text" className={`${styles.Fi} form-control`} aria-label="Text input with dropdown button" />
                </div>
                <div className={`${styles.group} ${styles.alert} alert alert-danger`} role="alert">
                  Make sure the customer data is correct.
                </div>
              </form>
            </div>

            <div className={styles.containerPD}>
              <h2 className={styles.pd}>Passenger Details</h2>
              <div className={styles.containerFormPD}>
                <div className={styles.contentForm}>
                  <div className={`${styles.alert1} alert alert-success `} role="alert">
                    <span>Passenger : 1 Adult</span>
                    <span className={styles.sa}>Same as contact person</span>
                  </div>
                </div>
                <div className={`${styles.group}  ${styles.phone} input-group mb-3`}>
                  <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Mr.
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Mr.
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Mrs.
                      </a>
                    </li>
                  </ul>
                  <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                </div>

                <div className={styles.group}>
                  <input type="text" required />
                  <span className={styles.highlight}></span>
                  <span className={styles.bar}></span>
                  <label>Full Name</label>
                </div>

                <div className={`${styles.group}  ${styles.phone} input-group mb-3`}>
                  <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Indonesia
                  </button>

                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Mr.
                      </a>
                    </li>
                  </ul>

                  <input type="text" className="form-control" aria-label="Text input with dropdown button" />

                  <label className={styles.national}>Nationality</label>
                </div>
              </div>
            </div>
            <div className={styles.containerPD}>
              <h2 className={styles.pd}>Passenger Details</h2>
              <div className={styles.containerFPD}>
                <div className={styles.contentForm}>
                  <div className={`${styles.fc} form-check`}>
                    <input className={`${styles.Ib} form-check-input mt-1`} type="checkbox" value="" id="flexCheckDefault" />
                    <label className={`${styles.Ti} form-check-label text-dark`} for="flexCheckDefault">
                      <span>Travel Insurance</span>
                    </label>
                    <span className={styles.Tn}>Travel Insurance</span>
                    <p className={styles.dollar}>
                      <span className={styles.d1}>$ 2,00</span>/pax
                    </p>
                  </div>
                  <hr className={styles.hr} />

                  <span className={styles.gt}>Get travel compensation up to $ 10.000,00</span>
                </div>
              </div>
            </div>

            <div className={styles.buttonEnd}>
              <button className={`${styles.buttonA} btn btn-primary `}>Proceed to Payment</button>
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
