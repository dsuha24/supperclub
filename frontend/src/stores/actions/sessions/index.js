import axios from "axios";
import { setAuthToken } from "../../../utils/auth";
import jwt_decode from "jwt_decode";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

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
        .catch((err) =>
            dispatch({
                type: RECEIVE_ERRORS,
                payload: err.response.data,
            })
        );
};
