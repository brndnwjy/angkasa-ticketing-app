import React from 'react'
import styles from "./profileCard.module.css"
import avatar from '../../../assets/avatar.png'
import iconprofile from '../../../assets/user.png'
import iconstar from '../../../assets/myreview.svg'
import iconsettings from '../../../assets/setting.svg'
import iconlogout from '../../../assets/logout.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProfileCard = () => {
  const navigate = useNavigate();

  const { data: user } = useSelector((state) => state.user.user)
  
  const logout = () => {
    localStorage.clear();
    return navigate("/");
  };

  return (
    <>
      {/* profile card left */}
      <section className={styles.profilecard}>
        <div className='container'>
          <div className='row'>
            <div className={styles.cardProfile}>
              <div className={`d-flex flex-row justify-content-center my-3 px-5 ${styles.picProfile}`}>
                <img src={avatar}/>
              </div>
              <div className='d-flex flex-row justify-content-center my-4 '> 
                <button type="button" class="btn btn-outline-primary">Select Photo</button>
              </div>
              <div className='d-flex flex-column align-items-center my-3'> 
                <h2>
                  {/* Mike Kowalski  */}
                  {user.username}
                </h2> 
                <p> 
                Medan, Indonesia
                </p>
              </div>
              <div > 
                <h5>
                  Cards
                </h5> 
                <h5 className={styles.add}> 
                  + Add
                </h5>
              </div>
              <div className={` ${styles.xcard} px-4`}>
                <div> 
                  <h5 className={styles.numCard}>4441 1235 5512 5551</h5> 
                </div>
                <div> 
                  <p className={styles.cardX}>X Card </p>
                  <p className={styles.xMoney}>$ 1,440.2 </p>
                </div>        
              </div>
              <div className={`d-flex flex-row mx-3 ${styles.setProfile}`}> 
                  <img src={iconprofile} className={styles.iconprofile}/>
                  <Link to={`/profile`} style={{ textDecoration:'none' }}>
                  <p className={`mx-5 ${styles.textProfile}`}> Profile </p>
                  </Link>
              </div>
              <div className={`d-flex flex-row mx-3 ${styles.setMyreview}`}> 
                  <img src={iconstar} className={styles.iconstar}/> 
                  <p className={`mx-5 ${styles.textMyreview}`}> My Review </p>
              </div>
              <div className={`d-flex flex-row mx-3 ${styles.setSettings}`}> 
              
                 <img src={iconsettings} className={styles.iconsettings}/> 
                 <Link to={`/updateProfile/user/${user.user_id}`} style={{ textDecoration:'none' }}>
                  <p className={`mx-5 ${styles.textSettings}`}> Settings </p>
                </Link>
              </div>
              
              <button className={`d-flex flex-row mx-3  ${styles.setLogout}`} onClick={logout}> 
                  <img src={iconlogout} className={styles.iconlogout}/> 
                  <p className={`mx-5 ${styles.textLogout}`}> Logout </p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProfileCard