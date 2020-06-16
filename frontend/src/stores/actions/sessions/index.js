import axios from "axios";
import { setAuthToken } from "../../../utils/auth";
import jwt_decode from "jwt-decode";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveCurrentUser = (userData) => {
    return {
        type: RECEIVE_CURRENT_USER,
        payload: userData,
    };
};

export const signupUser = (userData) => (dispatch) => {
    axios
        .post("users/signup", userData)
        .then((res) => {
            // Save to localStorage
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            // set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            // Set current user
            dispatch(receiveCurrentUser(decoded));
        })
        .catch((err) => console.log(err));
};
// dispatch({
//     type: RECEIVE_ERRORS,
//     payload: err.response.data,
// })

export const loginUser = (userData) => (dispatch) => {
    axios
        .post("api/users/login", userData)
        .then((res) => {
            // Save to localStorage
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            // set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            // Set current user
            dispatch(receiveCurrentUser(decoded));
        })
        .catch((err) => console.log(err));
};

//   dispatch({
//     type: RECEIVE_ERRORS,
//     payload: err.response.data
//   })
