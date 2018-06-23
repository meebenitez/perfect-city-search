import * as actionTypes from './authactions'


const initialState = {
    currentUser: null,
    showAuthPopup: false,
    loginError: null,
    
}

const authreducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_CURRENT_USER': 
        return {
            ...state,
            currentUser: action.currentUser
        }
        case 'TOGGLE_AUTH_POPUP':
        return {
            ...state,
            showAuthPopup: action.showAuthPopup
        }
        case 'UPDATE_ERROR':
        return {
            ...state,
            loginError: action.errorMessage
        }
        default:
            return state;
        
    }
}

export default authreducer;