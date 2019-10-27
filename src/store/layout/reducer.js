import { ACTIVATE_AUTH_LAYOUT, ACTIVATE_NON_AUTH_LAYOUT, TOGGLE, TOGGLE_LD } from './actionTypes';

const initialState={
    topbar:true,
    sidebar:true,
    footer:true,
    is_toggle : true,
    is_light : true
}

const layout = (state=initialState,action) => {
    switch(action.type){
        case ACTIVATE_AUTH_LAYOUT:
            state = {
                ...state,
                ...action.payload
            }
            break;
        case ACTIVATE_NON_AUTH_LAYOUT:
            state = {
                ...state,
                ...action.payload
            }
            break;

        case TOGGLE:
            state = {
                ...state,
                is_toggle : action.payload
            }
            break;
            case TOGGLE_LD:
                state = {
                    ...state,
                    is_light : action.payload
                }
                break;

        default:
            state = {...state};
            break;
    }
    return state;
}

export default layout;