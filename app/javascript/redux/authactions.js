
import axios from 'axios'
import { store } from '../components/Index'
import {heartedFetch, clearHearted} from './cityactions'

export const updateCurrentUser = (email) => {
    if (email !== null) {
        return {
            type: 'UPDATE_CURRENT_USER',
            currentUser: email
        }
    } else {
        return {
            type: 'UPDATE_CURRENT_USER',
            currentUser: null
        }
    }
}

export const checkCurrentUser = () => {
    console.log("checking current user")
    return (dispatch) => {
        axios.get('/users/check_for_user', { })
        .then(response => {
            if (response.data.email) {
                dispatch(heartedFetch())
                dispatch(updateCurrentUser(response.data.email))
                console.log("updated current user")
            }
        })
        .catch(error => console.log(error))
    }
}

export const signUp = (formData) => {
    return (dispatch) => {
        axios.post('http://localhost:3000/users',{ 
            user: {
                email: formData.user.email,
                password: formData.user.password,
                password_confirmation: formData.user.passwordConf
            }
        })
        //automatically login after signup
        .then(response => {
            dispatch(login(formData))
        })
    }
    
}

export const login = (formData) => {
    return (dispatch) => {
        axios.post('http://localhost:3000/users/sign_in',{ 
            user: {
                email: formData.user.email,
                password: formData.user.password
            }
        })
        //update the current user email once logged in
        .then(response => {
            dispatch(updateCurrentUser(formData.user.email))
        })
        //close the popup
        .then(()=> {
            dispatch(toggleAuthPopup())
        })
        //grab the user's hearted cities
        .then(() => {
            dispatch(heartedFetch())
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        axios.delete('/users/sign_out', {
        })
        .then(response => {
            dispatch(updateCurrentUser(null))
        })
        .then(() => {
            dispatch(clearHearted())
        })
    }
}

export const toggleAuthPopup = () => {
    return (dispatch, getState) => {
        const popupStatus = getState().auth.showAuthPopup
        dispatch({
            type: 'TOGGLE_AUTH_POPUP',
            showAuthPopup: !popupStatus
        })
    }
}