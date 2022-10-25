import React, { useEffect, useState } from 'react'
import styles from "./profile.module.css";
import ProfileCard from '../../components/module/profileCard';
import Navbar from '../../components/module/navbar';
import Footer from '../../components/module/footer';
import Arrowright from '../../assets/btnbackright.svg'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { detailProfile } from '../../redux/actions/user.action';

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
                  Profile:{user.user_id}
                </p>
                <div className='d-flex flex-column flex-md-row my-4 detailProfile'>
                  <div className='col-md-6 me-4'>

                    <div className='d-flex flex-column detailProfileleft'>
                      <p className={styles.contact}>
                        Contact
                      </p>
                      <label for="email" className={`mt-3 ms-3 ${styles.labelForm}`}>Email address</label>
                      <input type="email" className={styles.inputProfile} id="email" placeholder={user.email} />
                      <label for="phone" className={`mt-3 ms-3 ${styles.labelForm}`}>Phone Number</label>
                      <input type="text" className={styles.inputProfile} id="phone" placeholder={user.phone} />

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
                      <input type="text" className={styles.inputProfile} id="username" placeholder={user.username} />
                      <label for="city" className={`mt-3 ms-3 ${styles.labelForm}`}> City </label>
                      <input type="text" className={styles.inputProfile} id="city" placeholder={user.city} />
                      <label for="address" className={`mt-3 ms-3 ${styles.labelForm}`}> Address </label>
                      <input type="text" className={styles.inputProfile} id="address" placeholder={user.address} />
                      <label for="Postcode" className={`mt-3 ms-3 ${styles.labelForm}`}>Post Code</label>
                      <input type="text" className={styles.inputProfile} id="Postcode" placeholder={user.postcode} />
                    </div>
                    <div className=' d-grid gap-2 d-md-flex justify-content-md-end me-5'>
                      <button type="button" class="btn btn-primary mt-3 ">Save</button>
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