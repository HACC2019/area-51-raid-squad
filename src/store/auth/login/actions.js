import { CHECK_LOGIN, LOGIN_USER_SUCCESSFUL, APILOGIN_FAILED, CHECK_OTP,VALIDATE_OTP_SUCCESS, VALIDATE_OTP_ERROR, ERROR_CLEAR } from './actionTypes';

export const checkLogin = (username, password, history) => {
    return {
        type: CHECK_LOGIN,
        payload: { username, password, history }
    }
}

export const checkOtp = (user_id, otp, history) => {
    return {
        type: CHECK_OTP,
        payload: { user_id, otp, history }
    }
}

export const validateOtpSuccess = (user) => {
    return {
        type: VALIDATE_OTP_SUCCESS,
        payload: user
    }
}

export const validateOtpError = (error) => {
    return {
        type: VALIDATE_OTP_ERROR,
        payload: error
    }
}


export const loginUserSuccessful = (user) => {
    return {
        type: LOGIN_USER_SUCCESSFUL,
        payload: user
    }
}

export const apiLoginError = (error) => {
    return {
        type: APILOGIN_FAILED,
        payload: error
    }
}


export const clearErrorLogin = () => {
    return {
        type: ERROR_CLEAR
    }
}
