import { FORGET_USER, FORGET_USER_SUCCESSFUL, API_FAILED } from './actionTypes';

export const forgetUser = (username, history) => {
  
    return {
        type: FORGET_USER,
        payload: { username, history }
    }
}

export const forgetUserSuccessful = (user) => {
    return {
        type: FORGET_USER_SUCCESSFUL,
        payload: user
    }
}

export const apiError = (error) => {
    return {
        type: API_FAILED,
        payload: error
    }
}