import { CHECK_LOGIN, LOGIN_USER_SUCCESSFUL, APILOGIN_FAILED, CHECK_OTP,ERROR_CLEAR, VALIDATE_OTP_SUCCESS, VALIDATE_OTP_ERROR } from './actionTypes';

const initialState = {
    loginError: null, message: null, loading: null
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_LOGIN:
            state = {
                ...state,
                user: null,
                loading: true,
                loginError: null
            }
            break;
        case LOGIN_USER_SUCCESSFUL:
            state = {
                ...state,
                user: action.payload,
                loading: false,
                loginError: null
            }
            break;
        case APILOGIN_FAILED:
            state = {
                ...state,
                loading: false,
                loginError: action.payload
            }
            break;

        case CHECK_OTP:
            state = {
                ...state,
                user: null,
                validate_otp_success: false,
                validate_otp_error: false,
            }
            break;

        case VALIDATE_OTP_SUCCESS:
            state = {
                ...state,
                validate_otp_success: action.payload,
                validate_otp_error: false,
            }
            break;

        case VALIDATE_OTP_ERROR:
            state = {
                ...state,
                validate_otp_success: false,
                validate_otp_error: action.payload,
            }
            break;
            case ERROR_CLEAR:
                state = {
                    ...state,
                    loginError: null,
                    user: null,
                }
                break;
        default:
            state = { ...state };
            break;
    }
    return state;
}

export default login;