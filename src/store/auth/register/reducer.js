import { REGISTER_USER, REGISTER_USER_SUCCESSFUL, API_FAILED, EMPTY_ERROR, CONFIRM_MAIL, CONFIRM_SUCCESS, CONFIRM_ERROR } from './actionTypes';

const initialState = {
    registrationError: null, message: null, loading: null
}

const account = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            state = {
                ...state,
                user: null,
                loading: true,
                registrationError: null
            }
            break;
        case EMPTY_ERROR:
            state = {
                registrationError: false,
                user: false,
                loading: false
            }
            break;
        case REGISTER_USER_SUCCESSFUL:
            state = {
                ...state,
                user: action.payload,
                loading: false,
                registrationError: null
            }
            break;
        case API_FAILED:
            state = {
                ...state,
                loading: false,
                registrationError: action.payload
            }
            break;
        case CONFIRM_MAIL:
            state = {
                confirmSuccess: false,
                confirmError: false,
            }
            break;
        case CONFIRM_SUCCESS:
            state = {
                confirmSuccess: action.payload,
                confirmError: false,
            }
            break;
        case CONFIRM_ERROR:
            state = {
                confirmSuccess: false,
                confirmError: action.payload
            }
            break;
        default:
            state = { ...state };
            break;
    }
    return state;
}

export default account;