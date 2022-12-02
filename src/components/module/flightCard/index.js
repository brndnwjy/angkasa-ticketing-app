import React from 'react'
import styles from "./flightCard.module.css"
import AirlineGaruda from '../../../assets/airline.png'
import iconflight from '../../../assets/flight.svg'
import iconluggage from '../../../assets/lunggage.svg'
import iconlunch from '../../../assets/lunch.svg'
import iconwifi from '../../../assets/wifi.svg'
import iconarrowbtm from '../../../assets/btnback.svg'

const FlightCard = () => {
  return (
    <>
      <div className={styles.Cardflights}>
        <div className='d-flex flex-row align-items-center mb-3'>
          <img src={AirlineGaruda} className='me-5' />
          <p className='mt-3'> Garuda Indonesia </p>
        </div>
        <div className='d-flex flex-row'>
          <div className='col-md-1 '>
            <h2>IDN</h2>
            <p>12:33</p>
          </div>
          <div className='col-md-1'>
            <img src={iconflight} className="ms-3 mt-3 iconplane" />
          </div>
          <div className='col-md-1 '>
            <h2>JPN</h2>
            <p>12:33</p>
          </div>
          <div className='col-md-3 mx-3'>
            <p className={styles.hours}>3 hours 11 minutes</p>
            <p className={styles.transit}>(1transit)</p>
          </div>
          <div className={`col-md-2 col-3 ${styles.seticon}`}>
            <img src={iconluggage} className="mx-1 mt-4" />
            <img src={iconlunch} className="mx-1 mt-4" />
            <img src={iconwifi} className="mx-1 mt-4" />
          </div>
          <div className='col-md-2'>

            <p className={`mt-4 ${styles.setPrice}`}> <span style={{ color: '#2395FF' }}> $ 214,00</span> /pax</p>
          </div>
          <div className='col-md-2'>
            <button className={`btn btn-primary mt-4 ${styles.btncostum}`}>SELECT</button>
          </div>
        </div>
        <div className='d-flex flex-row'>
          <p className={`me-3 ${styles.view}`}>
            View Detail
          </p>
          <img src={iconarrowbtm} className={`mb-3 ${styles.arrowbtm}`}></img>
        </div>

      </div>


    </>
  )
}

export default FlightCard