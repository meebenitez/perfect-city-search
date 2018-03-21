import * as actionTypes from './authactions'


const initialState = {
    currentUser: null,
    showAuthPopup: false
    
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
        default:
            return state;
        
    }
}

export default authreducer;