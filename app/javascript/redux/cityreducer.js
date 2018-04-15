import * as actionTypes from './cityactions'

const FILTERS = [
    "PopulationFilter", 
    "AgeFilter", 
    "RegionFilter", 
    "HomePriceFilter", 
    "MedianIncomeFilter"]
    
const initialState = {
    cities: [],
    params: [],
    page: 1,
    startPage: 1,
    totalCount: 0,
    totalPages: 0,
    perPage: 0,
    currentRoute: "",
    heartedCities: [],
    activeFilters: [],
    inactiveFilters: FILTERS,
    showCityPopup: false,
    singleCity: null,
    hashTag: [],
    searchTerm: "",
    searchCities: []
}

const cityreducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FILTER_CHANGE':
            const key = action.filterName
            const value = action.filterValue
            const hash = action.hashValue
            const inactiveArray = [...state.inactiveFilters]
            console.log("updated params")
            if (value === ""){ //condition for deactivating
                inactiveArray.push(key)
                return {
                    ...state,
                    params: state.params.filter(function(item){ return !(key in item)}),
                    inactiveFilters: inactiveArray,
                    page: 1,
                    startPage: 1,
                    hashTag: state.hashTag.filter(function(item){ return !(key in item)})
                }
            } else {
                let obj = {}
                obj[key] = value
                let hashObj = {}
                hashObj[key] = hash
                return {
                    ...state,
                    params: state.params.filter(function(item){ return !(key in item)}).concat(obj),
                    inactiveFilters: inactiveArray.filter(function(item){return key !== item }),
                    page: 1,
                    startPage: 1,
                    hashTag: state.hashTag.filter(function(item){ return !(key in item)}).concat(hashObj),
                }
            }
        case 'ADD_SEARCH_TERM':
            return {
                ...state,
                searchTerm: action.searchTerm,
                searchCities: action.cities
            }
        case 'UNCHECK':
            const id = action.payload
            inactiveArray2.push(id)
                return {
                    ...state,
                    params: state.params.filter(function(item){ return !(id in item)}),
                    page: 1,
                    startPage: 1
                }
        case 'CLEAR_ALL_FILTERS':
            return {
                ...state,
                activeFilters: [],
                params: [],
                inactiveFilters: FILTERS,
                hashTag: []
            }
        
        case 'UPDATE_ACTIVE_FILTERS':
            return {
                ...state,
                activeFilters: action.payload.map((item) => {return Object.keys(item)[0]}),
                filterHolder: state.params
            }
        case 'UPDATE_ROUTE':
            if (action.currentRoute === "/popular") {
                return {
                    ...state,
                    currentRoute: "[popular]=mosthearted",
                    page: 1
                }
            } else if (action.currentRoute === "/hearted") {
                return {
                    ...state,
                    currentRoute: "[hearted]=yourhearted",
                    page: 1
                }
            } else {
                return {
                    ...state,
                    currentRoute: "",
                    page: 1
                }
            }
            
        case 'UPDATE_CITIES':
            console.log("update cities")
            return {
                ...state,
                cities: action.cities,
                totalCount: action.totalCount,
                totalPages: action.totalPages,
                perPage: action.perPage
            }

        case 'UPDATE_HEARTED':
            return {
                ...state,
                heartedCities: action.heartedCities,
            }
        case 'SET_SINGLE_CITY':
            return {
                ...state,
                singleCity: action.payload
            }
        case 'CLEAR_HEARTED':
            return {
                ...state,
                heartedCities: [],
            }
        case 'PAGE_UPDATE':
            if (action.direction === null){
                const newPage = action.page
                return {
                    ...state,
                    page: newPage
                }
            } else {
                if (action.direction === 'prev'){
                    const newPage = state.startPage - 1
                    const startPage = state.startPage - 4
                    return {
                        ...state,
                        page: newPage,
                        startPage: startPage
                    }
                } else {
                    const newPage = state.startPage + 4
                    const startPage = state.startPage + 4
                    return {
                        ...state,
                        page: newPage,
                        startPage: startPage
                    }
                }

            }
        case 'TOGGLE_CITY_POPUP':
            return {
                ...state,
                showCityPopup: action.showCityPopup
            }
        default:
            return state;
        
    }
}

export default cityreducer;