import axios from 'axios'
import { store } from '../components/Index'
import {checkCurrentUser, toggleAuthPopup} from './authactions'


export const fetchCities = () => {
    return (dispatch, getState) => {
        return axios.get(`/cities?${getState().city.currentRoute}${getState().cityparams !== `undefined` ? `&` : null}${getState().city.params.map(el => Object.values(el)).join('&')}&[page]=${getState().city.page}`)
            .then(response => {
                dispatch(updateCities(response.data.cities, response.data.total_count, response.data.total_pages, response.data.per_page))
            })
    }
}

export const filterChange = (filter, value) => {
    return (dispatch, getState) => {
        dispatch({type: 'FILTER_CHANGE', filterName: filter, filterValue: value})
        dispatch(filterUpdate())
    }    
}

export const filterUpdate = () => {
    return (dispatch, getState) => {
        dispatch(fetchCities())
        dispatch(updateActiveFilters(getState().city.params))
        dispatch(updateHash())
    }
}

export const updateHash = () => {
    return (dispatch, getState) => {
        window.location.hash = getState().city.hashTag
    }
}

export const clearAllFilters = () => {
    return (dispatch) => {
        dispatch(clearParams())
        dispatch(fetchCities())
    }
}

export const clearParams = () => {
    return {
        type: 'CLEAR_ALL_FILTERS'
    }
}

export const pageChange = (direction = null, page = null) => {
    return (dispatch) => {
        
        dispatch(pageUpdate(direction, page))
        dispatch(fetchCities())
    }  
}

export const pageUpdate = (direction, page = null) => {
    return {
        type: 'PAGE_UPDATE',
        direction: direction, 
        page: page
    }
}

export const updateRoute = (route) => {
    return {
        type: 'UPDATE_ROUTE',
        currentRoute: route
    }
}

export const updateActiveFilters = (params) => {
    return {
        type: 'UPDATE_ACTIVE_FILTERS',
        payload: params
    }
}

export const updateCities = (cities, totalCount, totalPages, perPage) => {
    return {
        type: 'UPDATE_CITIES',
        cities: cities,
        totalCount: totalCount,
        totalPages: totalPages,
        perPage: perPage
    }
}


export const heartClick = (city) => {
    return (dispatch) => {
        axios.get(`/cities/add_heart/${city.id}`)
        .then(response => {
            console.log(`hearted ${city.name}`)
            dispatch(heartedFetch())
        }) 
        .catch(error => console.log(error))
    }
    
}

export const unheartClick = (city) => {
    return (dispatch) => {
        axios.get(`/cities/remove_heart/${city.id}`)
        .then(response => {
            dispatch(heartedFetch())
        })
        .catch(error => console.log(error))
    }
    
}

export const updateHearted = (heartedCities) => {
    return {
        type: 'UPDATE_HEARTED',
        heartedCities: heartedCities
    }
}

export const clearHearted = () => {
    return {
        type: 'CLEAR_HEARTED'
    }
}

export const initialFetch = (route) => {
    return (dispatch) => {
        dispatch(updateRoute(route))
        dispatch(fetchCities())
    }
}


export const heartedFetch = () => {

    return (dispatch) => {
        axios.get("/cities/hearted")
        .then(response => {  
            dispatch(updateHearted(response.data))
        })
    }
    
}

export const showSingleCity = (city) => {
    return (dispatch) => {
        dispatch(setSingleCity(city))
        dispatch(toggleCityPopup())
        
    }
}

export const setSingleCity = (city) => {
    return {
        type: 'SET_SINGLE_CITY',
        payload: city
    }
}

export const toggleCityPopup = () => {
    return (dispatch, getState) => {
        const popupStatus = getState().city.showCityPopup
        dispatch({
            type: 'TOGGLE_CITY_POPUP',
            showCityPopup: !popupStatus
        })
    }
}

export const toggleSingleCityAuthPopup = () => {
    return (dispatch) => {
        dispatch(toggleCityPopup())        
        dispatch(toggleAuthPopup())
    }
}

/// post-assessment
export const unclick = (id) => {
    return {
        type: 'UNCHECK',
        payload: id
    }
}