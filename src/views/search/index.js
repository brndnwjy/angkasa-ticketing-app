import React from 'react'
import styles from "./search.module.css";
import FlightCard from '../../components/module/flightCard';
import Navbar from '../../components/module/navbar';
import Footer from '../../components/module/footer';
import plane from '../../assets/logowhite.svg'
import iconarrowbtm from '../../assets/btnback.svg'
import SortArrow from '../../assets/sortarrow.svg'
import ArrowWhite from '../../assets/arrowwhite.svg'
import dotWhite from '../../assets/dotwhite.svg'


const Search = () => {
  return (
    <>
      <Navbar />
      <section className='searchresult'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12'>
              <div className={styles.searchBlue}>
                <div className='d-flex flex-column flex-md-row'>
                  <img src={plane} className={styles.whiteplane}/>
                  <div className='col-md-10'>
                    <div className='d-flex flex-row mt-5'>
                      <p className={`ms-2 ${styles.pFromto}`}>
                      From
                      </p>
                      <p className={styles.pFromto}> To </p>
                    </div>
                    <div className='d-flex flex-row'>
                    <input type="text" className={`ms-2 mb-3 ${styles.inputFormto}`} id="address" placeholder="Medan(IDN)"/> 
                      <img src={ArrowWhite} className='mx-3 mb-3'/>
                      <input type="text" className={`mb-3 ${styles.inputToForm}`} id="address" placeholder="Tokyo(JPN)"/> 
                      <button type="button" className={`btn ${styles.btncostum1}`}>Change Search</button> 
                    </div>
                    <div className='d-flex flex-row'>
                      <p className={`ms-2 ${styles.pDay}`}>
                      Monday, 20 July 20
                      </p>
                      <img src={dotWhite} className='mx-2 mb-3'/>
                      <p className={styles.pPassanger}> 6 Passenger</p>
                      <img src={dotWhite} className='mx-2 mb-3'/>
                      <p className={styles.pEconomy}>  Economy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='titlefilter'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-4'>
              <div className='d-flex flex-row'>
                <p className={`col-md-10 mt-3 ${styles.secFilter}`}>
                  Filter
                </p>
                <p className={`mt-4 ${styles.secReset}`}> Reset </p>
              </div>
            </div>
            <div className='col-md-8'>
            <div className='d-flex flex-row'>
                <p className={`col-md-3 mt-3 ${styles.secTicket}`}>
                  Select Ticket
                </p>
                <p className={`col-md-8 my-4 ${styles.secFound}`}>
                  (6 Ticket Found)
                </p>
                <p className={`my-4 me-2 ${styles.secSort}`}>
                  (Sort By)
                </p>
                <img src={SortArrow} className='my-4'/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className='bodycontent'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className={`d-flex flex-column ${styles.leftside}`}>
                <div className='d-flex flex-row'>
                  <button className={`col-md-10 ${styles.titleFiltercollapse}`} type="button" data-bs-toggle="collapse" data-bs-target="#Transit" aria-expanded="false" aria-controls="collapseExample"> Transit </button>
                  <button className={`ms-3 ${styles.btnarrow}`} type="button" data-bs-toggle="collapse" data-bs-target="#Transit" aria-expanded="false" aria-controls="collapseExample">
                    <img src={iconarrowbtm} className={`ms-2 mb-2 ${styles.arrowbtm}`}></img>
                  </button>
                </div>
                <div class="collapse" id="Transit">
                  <div className='d-flex flex-row'>
                    <p className={`col-md-11 mt-3 ${styles.valuecollapse}`}>Direct </p>
                    <input className="form-check-input me-1 mt-3" type="checkbox" value="" id="firstCheckbox" />
                  </div>
                  <div className='d-flex flex-row'>
                    <p className={`col-md-11 ${styles.valuecollapse}`}>Transit </p>
                    <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox" />
                  </div>
                  <div className='d-flex flex-row'>
                    <p className={`col-md-11 ${styles.valuecollapse}`}>Transit 2+ </p>
                    <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
                  </div>
                </div>
                <hr />

                <div className='d-flex flex-row'>
                  <button className={`col-md-10 ${styles.titleFiltercollapse}`} type="button" data-bs-toggle="collapse" data-bs-target="#Fascilities" aria-expanded="false" aria-controls="collapseExample"> Fascilities </button>
                  <button className={`ms-3 ${styles.btnarrow}`} type="button" data-bs-toggle="collapse" data-bs-target="#Fascilities" aria-expanded="false" aria-controls="collapseExample">
                    <img src={iconarrowbtm} className={`ms-2 mb-2 ${styles.arrowbtm}`}></img>
                  </button>
                </div>
                <div class="collapse" id="Fascilities">
                  <div className='d-flex flex-row'>
                    <p className={`col-md-11 mt-3 ${styles.valuecollapse}`}>Luggage </p>
                    <input className="form-check-input me-1 mt-3" type="checkbox" value="" id="firstCheckbox" />
                  </div>
                  <div className='d-flex flex-row'>
                    <p className={`col-md-11 ${styles.valuecollapse}`}>In-Flight Meal </p>
                    <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox" />
                  </div>
                  <div className='d-flex flex-row'>
                    <p className={`col-md-11 ${styles.valuecollapse}`}>Wi-fi </p>
                    <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
                  </div>
                </div>
                <hr />

                <div className='d-flex flex-row'>
                  <button className={`col-md-10 ${styles.titleFiltercollapse}`} type="button" data-bs-toggle="collapse" data-bs-target="#DepatureTime" aria-expanded="false" aria-controls="collapseExample"> Depature Time </button>
                  <button className={`ms-3 ${styles.btnarrow}`} type="button" data-bs-toggle="collapse" data-bs-target="#DepatureTime" aria-expanded="false" aria-controls="collapseExample">
                    <img src={iconarrowbtm} className={`ms-2 mb-2 ${styles.arrowbtm}`}></img>
                  </button>
                </div>
                <div class="collapse" id="DepatureTime">
                  <div className='d-flex flex-row'>
                    <p className={`col-md-11 mt-3 ${styles.valuecollapse}`}>00:00 - 06:00 </p>
                    <input className="form-check-input me-1 mt-3" type="checkbox" value="" id="firstCheckbox" />
                  </div>
                  <div className='d-flex flex-row'>
                    <p className={`col-md-11 ${styles.valuecollapse}`}>06:00 - 12:00 </p>
                    <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox" />
                  </div>
                  <div className='d-flex flex-row'>
                    <p className={`col-md-11 ${styles.valuecollapse}`}>12:00 - 18:00</p>
                    <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
                  </div>
                  <div className='d-flex flex-row'>
                    <p className={`col-md-11 ${styles.valuecollapse}`}>18:00 - 24:00</p>
                    <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
                  </div>
                </div>
                <hr />

                <div className='d-flex flex-row'>
                  <button className={`col-md-10 ${styles.titleFiltercollapse}`} type="button" data-bs-toggle="collapse" data-bs-target="#Arrived" aria-expanded="false" aria-controls="collapseExample"> Time Arrived </button>
                  <button className={`ms-3 ${styles.btnarrow}`} type="button" data-bs-toggle="collapse" data-bs-target="#Arrived" aria-expanded="false" aria-controls="collapseExample">
                    <img src={iconarrowbtm} className={`ms-2 mb-2 ${styles.arrowbtm}`}></img>
                  </button>
                </div>
                <div class="collapse" id="Arrived">
                  <div className='d-flex flex-row'>
                    <p className={`col-md-11 mt-3 ${styles.valuecollapse}`}>00:00 - 06:00 </p>
                    <input className="form-check-input me-1 mt-3" type="checkbox" value="" id="firstCheckbox" />
                  </div>
                  <div className='d-flex flex-row'>
                    <p className={`col-md-11 ${styles.valuecollapse}`}>06:00 - 12:00 </p>
                    <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox" />
                  </div>
                  <div className='d-flex flex-row'>
                    <p className={`col-md-11 ${styles.valuecollapse}`}>12:00 - 18:00</p>
                    <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
                  </div>
                  <div className='d-flex flex-row'>
                    <p className={`col-md-11 ${styles.valuecollapse}`}>18:00 - 24:00</p>
                    <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
                  </div>
                </div>
                <hr />

                <div className='d-flex flex-row'>
                  <button className={`col-md-10 ${styles.titleFiltercollapse}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseAirlines" aria-expanded="false" aria-controls="collapseExample"> Airlines </button>
                  <button className={`ms-3 ${styles.btnarrow}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseAirlines" aria-expanded="false" aria-controls="collapseExample">
                    <img src={iconarrowbtm} className={`ms-2 mb-2 ${styles.arrowbtm}`}></img>
                  </button>
                </div>
                <div class="collapse" id="collapseAirlines">
                  <div className='d-flex flex-row'>
                    <p className={`col-md-11 mt-3 ${styles.valuecollapse}`}>Garuda Indonesia </p>
                    <input className="form-check-input me-1 mt-3" type="checkbox" value="" id="firstCheckbox" />
                  </div>
                  <div className='d-flex flex-row'>
                    <p className={`col-md-11 ${styles.valuecollapse}`}>Air Asia </p>
                    <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox" />
                  </div>
                  <div className='d-flex flex-row'>
                    <p className={`col-md-11 ${styles.valuecollapse}`}>Lion Air </p>
                    <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
                  </div>
                </div>
                <hr />

                <div className='d-flex flex-row'>
                  <button className={`col-md-10 ${styles.titleFiltercollapse}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapsePrice" aria-expanded="false" aria-controls="collapseExample"> Ticket Price </button>
                  <button className={`ms-3 ${styles.btnarrow}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapsePrice" aria-expanded="false" aria-controls="collapseExample">
                    <img src={iconarrowbtm} className={`ms-2 mb-2 ${styles.arrowbtm}`}></img>
                  </button>
                </div>
                <div class="collapse" id="collapsePrice">
                  <div className='d-flex flex-row'>
                    <p className={`col-md-9 mt-3 ${styles.setPrice}`}>Lowest </p>
                    <p className={`ms-4 mt-3 ${styles.setPrice}`}>Highest </p>
                  </div>
                  <hr />
                  <div className='d-flex flex-row'>
                    <p className={`col-md-9 mt-3 ${styles.price}`}>$ 145,00 </p>
                    <p className={`ms-2 mt-3 ${styles.price}`}>$ 300,00 </p>
                  </div>
                </div>


              </div>
            </div>
            <div className='col-md-8'>
              <FlightCard />
              <FlightCard />

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Search