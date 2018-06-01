import * as actionTypes from './cityactions'

const FILTERS = [
    "PopulationFilter", 
    "AgeFilter", 
    "RegionFilter", 
    "HomePriceFilter", 
    "MedianIncomeFilter",
    "NameSearchFilter"]
    
    
    const HASHMAP = {
    "page": "[page]=",
    "home-price": "[home_price_from]=&[home_price_to]=",
    "median-income": "[income_from]=&[income_to]=",
    "name": "[term]="
}

const PARAMMAP = {
        "page": "Page",
        "home-price": "HomePriceFilter",
        "median-income": "MedianIncomeFilter",
        "name": "NameSearchFilter"
    }
         
    
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
    searchCities: [],
    mapZoom: 4
}

const cityreducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ON_LOAD':
        const hashArray = action.payload.substr(1).split("&")
        const hashTagArray = hashArray.concat().sort().map((filterName) => {
            let obj = {}
            if (PARAMMAP[filterName.split('=').shift()] !== "Page") {
                obj[PARAMMAP[filterName.split('=').shift()]] = filterName
                return obj
            }
        }).filter(function(i) { return i; })
        const paramArray = hashArray.concat().sort().map((filterName) => {
        if (HASHMAP[filterName.split('=').shift()].indexOf('&') > -1) {
            let temp1 = HASHMAP[filterName.split('=').shift()].split("&")
            let temp2  = filterName.split('=').pop().split("to")
            return [PARAMMAP[filterName.split('=').shift()] , temp1[0] + temp2[0] + "&" + temp1[1] + temp2[1]]
        } else {
            return [PARAMMAP[filterName.split('=').shift()], HASHMAP[filterName.split('=').shift()] + filterName.split('=').pop()]
            }
        })
        
        const page = action.payload.includes("page=") ? parseInt(paramArray.filter((filter)=> {
            return filter[0] === "Page"
        })[0][1].split('=').pop()) : 1
        const params = paramArray.map((filter)=> {
            let obj = {}
            if (filter[0] !== "Page") {
                obj[filter[0]] = filter[1]
                return obj
            }
        }).filter(function(i) { return i; })
        const inactive = state.inactiveFilters.filter((val) => { return !params.map((filter)=> {return Object.keys(filter)[0]}).includes(val)})
        const startPage = page > 4 ? (4 * parseInt(page/4)) + 1 : 1
        return {
            ...state,
            hashTag: hashTagArray,
            params: params,
            inactiveFilters: inactive,
            activeFilters: params.map((filter)=> {return Object.keys(filter)[0]}),
            page: page,
            startPage: startPage
        }

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
                    hashTag: state.hashTag.filter(function(item){ return !(key in item)}).concat(hashObj)
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
            if (action.currentRoute.includes("/city")) {
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
            if (state.page > 1 ) {
                let hashPage = `page=${state.page}`
            } else {
                let hashPage = ""
            }
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
        case 'CHANGE_ZOOM':
            if (state.mapZoom === 4){
                return {
                    ...state,
                    mapZoom: 3
                }
            } else {
                return {
                    ...state,
                    mapZoom: 4
                }
            }
            
        default:
            return state;
        
    }
}

export default cityreducer;