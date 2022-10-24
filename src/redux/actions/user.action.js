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

export const detailProfile = (user_id) => {
    return {
        type: 'GET_DATA_PROFILE',
        payload: axios ({
            url: `${process.env.REACT_APP_BACKEND_URL}/${user_id}`,
            method:"GET"
        })
    }
}