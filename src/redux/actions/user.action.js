// user action
import axios from "axios";

export const register = (body) => {
        return new Promise((resolve, reject) => {           
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/register`, body)
            .then((response) => {
                resolve(response)
            })
            .catch((err) => {
                reject(err)
            })
        })
    }

    export const login = (form, navigate) => async(dispatch) => {
        try{
            dispatch({type:"LOGIN_PENDING"})
            const result = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/login`, form)
            // console.log(result)
            const user = result.data.token
            localStorage.setItem('token', user.token)
            localStorage.setItem('user', user.data)
            dispatch({type:"LOGIN_FULFILLED", payload:user})
            navigate('/mybooking')
        }catch(error){
            console.log(error)
            dispatch({type:"LOGIN_REJECTED"})
        }   
    }

export const detailProfile = (user_id) => {
    return {
        type: 'GET_DATA_PROFILE',
        payload: axios ({
            url: `${process.env.REACT_APP_BACKEND_URL}/${user_id}`,
            method:"GET"
        })
    }
}

export const updateProfile = (user_id, update, handleSuccess) => ({
    type : "UPDATE_PROFILE",
    payload : new Promise((resolve, reject) => {
        axios
        .put(`${process.env.REACT_APP_BACKEND_URL}/user/update/${user_id}`, update)
        .then((response) => {
            console.log(response.data)
            handleSuccess(response.data)
            resolve(response);
        })
        .catch((err) => {
            reject(err)
        })
    })
})

export const deleteProfile = (user_id) => ({
    type: "DELETE_PROFILE",
    payload : new Promise((resolve, reject) => {
       axios
        .delete(`${process.env.REACT_APP_BACKEND_URL}/delete/${user_id}`)
        .then((response) => {
            console.log(response.data)
            resolve(response);
        })
        .catch((err) => {
            reject(err)
        }) 
    })
})