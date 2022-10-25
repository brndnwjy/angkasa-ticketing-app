import React from 'react';
import styles from './home.module.css';
import Navbar from '../../components/module/navbar/index';
import Footer from '../../components/module/footer/index';
import './top.css';

// Swiper js carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const Home = () => {
  return (
    <>
      <div className={styles.homePage}>
        <Navbar />
        <main className={styles.main}>
          <div className={styles.banner1}>
            <div>
              <h1>
                Find Your <span>Flight</span>
              </h1>
              <p>and explore the world with us</p>
            </div>
            <img className={styles.qq} src={require('../../assets/homeimage1.png')} alt="banner-1" />
          </div>

          {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog mt-5 me-4 ">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">...</div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.card1} card bg-white`}>
            <div className={`${styles.card2} card-body`}>
              <h6 className="card-title">Hey</h6>
              <h5 className="card-title">Where you want to go?</h5>
              <div className={styles.back}>
                <p className="card-text">Recently Searched</p>
                <img className={styles.btnBack} src={require('../../assets/btnback.png')} alt="btnback" />
              </div>

              <div className={styles.getLine}>
                <h4>From</h4>
                <h2>Medan</h2>
                <h3>Indonesia</h3>
                <img className={styles.panah} src={require('../../assets/Vector.png')} alt="panah" />
                <h4 className={styles.to}>To</h4>
                <h2 className={styles.tokyo}>Tokyo</h2>
                <h3 className={styles.japan}>Japan</h3>
              </div>

              <div className={styles.buttonContainer}>
                <button className={`${styles.submit1} btn btn-primary`} type="submit">
                  One way
                </button>

                <button className={`${styles.submit2} btn btn-light text-dark`} type="submit">
                  Round trip
                </button>
              </div>
              <div className={styles.departure}>
                <h6>Departure</h6>
                <select className={`${styles.dep} form-select`} aria-label="Default select example">
                  <option selected>Monday, 25 October 2022</option>
                </select>
              </div>
              <div className={styles.person}>
                <h6>How many person?</h6>
                <select className={`${styles.child} form-select`} aria-label="Default select example">
                  <option selected>2 Child</option>
                </select>
                <select className={`${styles.adult1} form-select`} aria-label="Default select example">
                  <option selected>4 Adult</option>
                </select>
              </div>
              <div className={styles.which}>
                <h6>Which className do you want?</h6>
                <div classsName={`${styles.ol} form-check`}>
                  <input classsName="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label classsName="form-check-label" for="flexRadioDefault1">
                    Economy
                  </label>

                  <input classsName="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label classsName="form-check-label" for="flexRadioDefault1">
                    Business
                  </label>

                  <input classsName="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label classsName="form-check-label" for="flexRadioDefault1">
                    First Class
                  </label>
                </div>
                <div className={styles.button}>
                  <button className={`${styles.btnSF} btn btn-primary `}>SEARCH FLIGHT</button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.banner2}>
            <img className={styles.qq} src={require('../../assets/homeimage2.png')} alt="banner-2" />
            <img className={styles.vektor6} src={require('../../assets/vector6.png')} alt="banner-1" />
          </div>
        </main>

        <section>
          <div className={styles.trending}>
            <span>T R E N D I N G</span>
            <div className={styles.title}>
              <span>Trending Destinations</span>
              <span className={styles.v}>View All</span>
            </div>
          </div>
          <div className={styles.cardGrid}>
            <a className={styles.card} href="#">
              <div className={styles.cardBackground}>
                <div className={styles.cardContent}>
                  <p className={styles.cardCategory}>Bali</p>
                  <h3 className={styles.cardHeading}>Indonesia</h3>
                  <h5 className={styles.al}>10 Airlines</h5>
                  <h4 className={styles.fk}>From $200</h4>
                </div>
              </div>
            </a>
            <a className={styles.card} href="#">
              <div className={styles.cardBackground}>
                <div className={styles.cardContent}>
                  <p className={styles.cardCategory}>Tokyo</p>
                  <h3 className={styles.cardHeading}>Japan</h3>
                  <h5 className={styles.al}>15 Airlines</h5>
                  <h4 className={styles.fk}>From $100</h4>
                </div>
              </div>
            </a>
            <a className={styles.card} href="#">
              <div className={styles.cardBackground}>
                <div className={styles.cardContent}>
                  <p className={styles.cardCategory}>Sidney</p>
                  <h3 className={styles.cardHeading}>Australia</h3>
                  <h5 className={styles.al}>12 Airlines</h5>
                  <h4 className={styles.fk}>From $300</h4>
                </div>
              </div>
            </a>

            <a className={styles.card} href="#">
              <div className={styles.cardBackground}>
                <div className={styles.cardContent}>
                  <p className={styles.cardCategory}>Beijing</p>
                  <h3 className={styles.cardHeading}>China</h3>
                  <h5 className={styles.al}>34 Airlines</h5>
                  <h4 className={styles.fk}>From $400</h4>
                </div>
              </div>
            </a>

            <a className={styles.card} href="#">
              <div className={styles.cardBackground}>
                <div className={styles.cardContent}>
                  <p className={styles.cardCategory}>Jambi</p>
                  <h3 className={styles.cardHeading}>Indonesia</h3>
                  <h5 className={styles.al}>100 Airlines</h5>
                  <h4 className={styles.fk}>From $1000</h4>
                </div>
              </div>
            </a>

            <div></div>
          </div>
        </section>

        <section>
          <div className={styles.top}>
            <div className={styles.topContainer}>
              <h4>TOP 10</h4>
              <h2>Top 10 destinations</h2>
              <div className={styles.topDestination}>
                <Swiper modules={[Navigation]} spaceBetween={50} slidesPerView={5} loop={true} navigation onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
                  <SwiperSlide>
                    <div className={styles.place}>
                      <img src={require('../../assets/bali.jpg')} alt="" />
                    </div>
                    <p>paris</p>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.place}>
                      <img src={require('../../assets/paris.jpg')} alt="" />
                    </div>
                    <p>bali</p>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.place}>
                      <img src={require('../../assets/singapore.jpg')} alt="" />
                    </div>
                    <p>singapore</p>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.place}>
                      <img src={require('../../assets/agra.jpg')} alt="" />
                    </div>
                    <p>agra</p>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.place}>
                      <img src={require('../../assets/sydney.jpg')} alt="" />
                    </div>
                    <p>sydney</p>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
