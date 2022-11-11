import { AUTH_ERROR, AUTH_LOADING, AUTH_SIGNIN_SUCCESS } from "./auth.types";

const initState = {
    loading: false,
    error: false,
    isAuth: false,
    token: "",
    data: {}
}

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case AUTH_LOADING: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case AUTH_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        case AUTH_SIGNIN_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                token: action.token,
                isAuth: true,
                data: action.user
            }
        }
        default: {
            return state;
        }
    }
}