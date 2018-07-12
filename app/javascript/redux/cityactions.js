import axios from 'axios'
import { store } from '../components/Index'
import {checkCurrentUser, toggleAuthPopup} from './authactions'


export const fetchCities = () => {
    return (dispatch, getState) => {
        return axios.get(`/cities?${getState().city.currentRoute}${getState().city.params !== `undefined` ? `&` : null}${getState().city.params.map(el => Object.values(el)).join('&')}&[page]=${getState().city.page}`, { headers: {"Authorization" : `Bearer ${getState().city.key}`} })
            .then(response => {
                dispatch(updateCities(response.data.cities, response.data.total_count, response.data.total_pages, response.data.per_page))
            })
    }
}

export const initialFetch = (hash, route, key) => {
    return (dispatch) => {
        dispatch({type: 'UPDATE_KEY', key: key})
        dispatch(updateRoute(route))
        //if (window.location.hash) {
        //    window.location.hash = hash
        //    dispatch(fetchSingleCity(hash.replace('#','')))
        //}
        //else {
            if (hash.indexOf('#') > -1 && hash.length > 1) {
                if (hash.includes('city=')) {
                    dispatch(fetchSingleCity(hash.match(/_\d+/)[0].split("_").join("")))
                    dispatch(fetchCities())
                } else {
                    dispatch(grabHash(hash))
                    dispatch(fetchCities())
                }
            } else {
                dispatch(fetchCities())
            }
        //}
        
    }
}


export const fetchSingleCity = (id) => {
    return (dispatch) => {
        return axios.get(`/cities/${id}`)
            .then(response => {
                dispatch(showSingleCity(response.data))
            })
    }
    
}

export const onSearch = (value) => {
    return (dispatch) => {
        dispatch(fetchSearchCities(value))
    }    
}

export const clickSearch = (value) => {
    debugger;
}

export const nameHover = (city) => {
    return (dispatch) => {
        dispatch({type: 'CHANGE_CENTER', lat: city.longitude, lng: city.latitude, id: city.id})
    }
}

export const changeZoom = () => {
    return {
        type: 'CHANGE_ZOOM'
    }
}

export const fetchSearchCities = (term) => {
    return (dispatch) => {
        return axios.get(`/cities?${term}`)
            .then(response => {
                dispatch({type: 'ADD_SEARCH_TERM', searchTerm: term, cities: response.data.cities})
            })
    }

}

export const filterChange = (filter, value, hash = null) => {
    return (dispatch, getState) => {
        dispatch({type: 'FILTER_CHANGE', filterName: filter, filterValue: value, hashValue: hash})
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
        if (getState().city.page > 1) {
            window.location.hash = getState().city.hashTag.map(el => Object.values(el)).join('&').concat(getState().city.hashTag.length > 0 ? `&page=${getState().city.page}` : `page=${getState().city.page}`)
            dispatch({type: 'UPDATE_HASH_STRING', hashString: window.location.hash})
        } else {
            window.location.hash = getState().city.hashTag.map(el => Object.values(el)).join('&')
            dispatch({type: 'UPDATE_HASH_STRING', hashString: window.location.hash})
        }
    }
}

export const clearAllFilters = () => {
    return (dispatch) => {
        dispatch(clearParams())
        dispatch(fetchCities())
        dispatch(updateHash())
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
        dispatch(updateHash())
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
    return (dispatch, getState) => {
        axios.get(`/cities/add_heart/${city.id}`, { headers: {"Authorization" : `Bearer ${getState().city.key}`} })
        .then(response => {
            dispatch({type: 'ADD_HEARTED', city: city})
            console.log(`hearted ${city.name}`)
        }) 
        .catch(error => console.log(error))
    }
    
}

//(dispatch, getState) => {
//    if (getState().city.page 

export const unheartClick = (city) => {
    return (dispatch, getState) => {
        axios.get(`/cities/remove_heart/${city.id}`, { headers: {"Authorization" : `Bearer ${getState().city.key}`} })
        .then(response => {
            dispatch({type: 'REMOVE_HEARTED', city: city})
            console.log(`removed ${city.name} from hearted`)
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



export const grabHash = (hash) => {
    return {
        type: 'ON_LOAD',
        payload: hash
    }
}


export const heartedFetch = () => {

    return (dispatch, getState) => {
        axios.get("/cities/hearted", { headers: {"Authorization" : `Bearer ${getState().city.key}`} })
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

export const toggleExtendedFiltersPopup = () => {
    return (dispatch, getState) => {
        const filtersPopupStatus = getState().city.extendedFiltersPopup
        dispatch({
            type: 'TOGGLE_FILTERS_POPUP',
            extendedFiltersPopup: !filtersPopupStatus
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