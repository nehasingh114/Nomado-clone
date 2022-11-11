import { AUTH_ERROR, AUTH_LOADING, AUTH_SIGNIN_SUCCESS } from "./auth.types";
import axios from 'axios';

const host = 'https://venomous-plough-7848.vercel.app/api';

export const signinAPI = (data) => async (dispatch) => {
    dispatch({ type: AUTH_LOADING });
    try {
        let res = await axios.post(`${host}/users/login`, data);
        dispatch({ type: AUTH_SIGNIN_SUCCESS, token: res.data.token, user: res.data.user });
        return res.data;
    }
    catch (e) {
        dispatch({ type: AUTH_ERROR })
        return e.response.data;
    }
}