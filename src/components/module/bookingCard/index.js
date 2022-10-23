import React from 'react'
import styles from "./bookingCard.module.css"
import iconflight from '../../../assets/flight.svg'
import iconarrowbtm from '../../../assets/btnback.svg'

const BookingCard = () => {
  return (
    <>


      
        <div className={styles.CardBooking}>
          <div className='d-flex flex-row align-items-center'>
            <p className={styles.date}>Monday, 20 July ‘20 - 12:33 </p>
          </div>
          <div className='d-flex flex-row'>
            <div className='col-md-1 '>
              <h3>IDN</h3>
            </div>
            <div className='col-md-1'>
              <img src={iconflight} className="ms-3" />
            </div>
            <div className='col-md-1 '>
              <h3>JPN</h3>
            </div>
          </div>
          <div className='col-md-4 '>
            <p className={styles.codePlane}>Garuda Indonesia, AB-221</p>
          </div>
          <hr className='p-0' />
          <div className='d-flex flex-row align-items-center '>
            <div className='col-md-2'>
              <p className={styles.status}>Status </p>
            </div>
            <div className={`col-md-3 ${styles.statuspayment}`}>
              <p className={styles.setStatus}>Waiting for payment </p>
            </div>
            <div className={`col-md-3 ${styles.detailcustom}`}>
              <p className={styles.setDetail}>View Details </p>
            </div>
            <div className={`col-md-3 ${styles.arrowbtnn}`}>
              <img src={iconarrowbtm} className={`mb-3 ${styles.arrowbtm}`} />
            </div>
          </div>
        </div>
      


    </>
  )
}

export default BookingCard