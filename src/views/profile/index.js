import React, { useEffect, useState } from 'react'
import styles from "./profile.module.css";
import ProfileCard from '../../components/module/profileCard';
import Navbar from '../../components/module/navbar';
import Footer from '../../components/module/footer';
import Arrowright from '../../assets/btnbackright.svg'
import { useParams } from 'react-router-dom';
import {  useSelector } from 'react-redux';

const Profile = () => {
  // const dataProfile = JSON.parse(localStorage.getItem('data'));
  const { data: user } = useSelector((state) => state.user.user)
  // console.log(user)
  return (
    <>
      <Navbar />
      {/* {JSON.stringify(dataprofile)} */}
      <main className='bodycontent'>
        <div className='container my-5'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='leftside'>
                <ProfileCard />
              </div>
            </div>
            <div className='col-md-8'>
              <div className={`d-flex flex-column ${styles.rightsideProfile}`}>
                <p className={styles.title}>
                  P R O F I L E
                </p>
                <p className={styles.subtitle}>
                  Profile
                  {/* :{user.user_id} */}
                </p>
                <div className='d-flex flex-column flex-md-row my-4 detailProfile'>
                  <div className='col-md-6 me-4'>
                    <div className='d-flex flex-column detailProfileleft'>
                      <p className={styles.contact}>
                        Contact
                      </p>
                      <label for="email" className={`mt-3 ms-3 ${styles.labelForm}`}>Email address</label>
                      <input type="email" className={styles.inputProfile} id="email" defaultValue={user.email} disabled />
                      <label for="phone" className={`mt-3 ms-3 ${styles.labelForm}`}>Phone Number</label>
                      <input type="text" className={styles.inputProfile} id="phone" defaultValue={user.phone} disabled />
                      <div className='d-flex flex-row'>
                        <p className='col-md-5'></p>
                        <p className={`mt-3  ${styles.accountSettings}`}> Account Settings </p>
                        <img src={Arrowright} className={styles.iconArrow} />
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className={`d-flex flex-column ${styles.detailProfileright}`}>
                      <p className={styles.biodata}>
                        Biodata
                      </p>
                      <label for="username" className={`mt-3 ms-3 ${styles.labelForm}`}>Username</label>
                      <input type="text" className={styles.inputProfile} id="username" defaultValue={user.username} disabled />
                      <label for="city" className={`mt-3 ms-3 ${styles.labelForm}`}> City </label>
                      <input type="text" className={styles.inputProfile} id="city" defaultValue={user.city} disabled />
                      <label for="address" className={`mt-3 ms-3 ${styles.labelForm}`}> Address </label>
                      <input type="text" className={styles.inputProfile} id="address" defaultValue={user.address} disabled />
                      <label for="Postcode" className={`mt-3 ms-3 ${styles.labelForm}`}>Post Code</label>
                      <input type="text" className={styles.inputProfile} id="Postcode" defaultValue={user.postcode} disabled />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Profile