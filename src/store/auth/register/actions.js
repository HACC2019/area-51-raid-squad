import { REGISTER_USER, REGISTER_USER_SUCCESSFUL, API_FAILED, EMPTY_ERROR,CONFIRM_MAIL,CONFIRM_SUCCESS,CONFIRM_ERROR } from './actionTypes';

export const registerUser = (user) => {
    return {
        type: REGISTER_USER,
        payload: { user }
    }
}

export const registerUserSuccessful = (user) => {
    return {
        type: REGISTER_USER_SUCCESSFUL,
        payload: user
    }
}

export const apiError = (error) => {
    return {
        type: API_FAILED,
        payload: error
    }
}

export const clearError = () => {
    return {
        type: EMPTY_ERROR
    }
}

export const confirmMail = (token,userId) => {
    return {
        type: CONFIRM_MAIL,
        payload: { userId,token }
    }
}

export const confirmSuccess = (user) => {
    return {
        type: CONFIRM_SUCCESS,
        payload: { user }
    }
}

export const confirmError = (error) => {
    return {
        type: CONFIRM_ERROR,
        payload: error
    }
}
