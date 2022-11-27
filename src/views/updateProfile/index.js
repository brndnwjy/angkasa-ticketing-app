import React, { useEffect, useState } from "react";
import styles from "./profileUpdate.module.css";
import ProfileCard from "../../components/module/profileCard";
import Navbar from "../../components/module/navbar";
import Footer from "../../components/module/footer";
import Arrowright from "../../assets/btnbackright.svg";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { detailProfile } from "../../redux/actions/user.action";
import { updateProfile, deleteProfile } from "../../redux/actions/user.action";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const localUserid = localStorage.getItem("user_id")
  const { data: user } = useSelector((state) => state.user.user);
  console.log(user);

  const [update, setUpdate] = useState({});

  const user_id = user.user_id

  const handleInput = (e) => {
    setUpdate({
      ...update,
      [e.target.name]: e.target.value,
    });
  };

  const handlePost = (e) => {
    e.preventDefault();
    const handleSuccess = (data) => {
      console.log(data);  
      if(data){
         alert("Update Success");
      return navigate("/profile");
      }else{
        alert("Update Failed");
      }
    };
    dispatch(
      updateProfile(user_id, update, handleSuccess)
    )

    // axios
    //   .put(
    //     `${process.env.REACT_APP_BACKEND_URL}/user/update/${user.user_id}`,
    //     update,
    //     {
    //       // headers: {
    //       //   "Content-Type": "multipart/form-data",
    //       // },
    //     }
    //   )
      // .then((res) => {
      //   console.log(res);
      //   // setImage("");
      // })
      // .catch((err) => {
      //   console.log(err);
      //   alert("Update Failed");
      // });
  };

  // const deletedataProfile = (user_id) = { 
  //   // axios 
  //   // .delete(`${process.env.REACT_APP_BACKEND_URL}/delete/${user_id}`)
  //   dispatch(
  //     deleteProfile(user_id)
  //   )
  //   .then((response) => {
  //     console.log(response);
  //     console.log(response.data);

  //     const posts = recipe.filter((item) => item.id !== id);
  //     setRecipe({ data: posts });
  //     alert("Delete Success");
  //     return navigate('/login')
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     alert("Delete Failed");
  //   })
  // }

  return (
    <>
      <Navbar />
      {/* {JSON.stringify(user)} */}
      <main className="bodycontent">
        <div className="container my-5">
          <div className="row">
            <div className="col-md-4">
              <div className="leftside">
                <ProfileCard />
              </div>
            </div>
            <div className="col-md-8">
              <div className={`d-flex flex-column ${styles.rightsideProfile}`}>
                <p className={styles.title}>P R O F I L E</p>
                <p className={styles.subtitle}>Profile:{user.username}</p>
                <form onSubmit={handlePost}>
                  <div className="d-flex flex-column flex-md-row my-4 detailProfile">
                    <div className="col-md-6 me-4">
                      <div className="d-flex flex-column detailProfileleft">
                        <p className={styles.contact}>Contact</p>
                        <label
                          htmlFor="email"
                          className={`mt-3 ms-3 ${styles.labelForm}`}
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          className={styles.inputProfile}
                          id="email"
                          name="email"
                          onChange={handleInput}
                          placeholder={user.email}
                        />
                        <label
                          htmlFor="phone"
                          className={`mt-3 ms-3 ${styles.labelForm}`}
                        >
                          Phone Number
                        </label>
                        <input
                          type="text"
                          className={styles.inputProfile}
                          id="phone"
                          name="phone"
                          onChange={handleInput}
                          placeholder={user.phone}
                        />
                        <div className="d-flex flex-row">
                          <p className="col-md-5"></p>
                          {/* <p className={`mt-3  ${styles.accountSettings}`}>
                            {" "}
                            Account Settings{" "}
                          </p>
                          <img src={Arrowright} className={styles.iconArrow} /> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className={`d-flex flex-column ${styles.detailProfileright}`}
                      >
                        <p className={styles.biodata}>Biodata</p>
                        <label
                          htmlFor="username"
                          className={`mt-3 ms-3 ${styles.labelForm}`}
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          className={styles.inputProfile}
                          id="username"
                          name="username"
                          onChange={handleInput}
                          placeholder={user.username}
                        />

                        <label
                          htmlFor="city"
                          className={`mt-3 ms-3 ${styles.labelForm}`}
                        >
                          {" "}
                          City{" "}
                        </label>
                        <input
                          type="text"
                          className={styles.inputProfile}
                          id="city"
                          name="city"
                          onChange={handleInput}
                          placeholder={user.city}
                        />

                        <label
                          htmlFor="address"
                          className={`mt-3 ms-3 ${styles.labelForm}`}
                        >
                          {" "}
                          Address{" "}
                        </label>
                        <input
                          type="text"
                          className={styles.inputProfile}
                          id="address"
                          name="address"
                          onChange={handleInput}
                          placeholder={user.address}
                        />

                        <label
                          htmlFor="Postcode"
                          className={`mt-3 ms-3 ${styles.labelForm}`}
                        >
                          Post Code
                        </label>
                        <input
                          type="text"
                          className={styles.inputProfile}
                          id="Postcode"
                          name="postcode"
                          onChange={handleInput}
                          placeholder={user.postcode}
                        />
                      </div>
                      <div className=" d-grid gap-2 d-md-flex justify-content-md-end me-5">
                        <button type="submit" className="btn btn-primary mt-3 ">
                          Save
                        </button>
                        
                      </div>
                    </div>
                  </div>
                </form>

                <button  className="btn btn-primary mt-3 btn-danger" onClick={(e) => deleteProfile(user_id, e)}>
                          Delete
                        </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
