import * as actionTypes from './cityactions'

const FILTERS = [
    "PopulationFilter", 
    "AgeFilter", 
    "RegionFilter", 
    "HomePriceFilter", 
    "MedianIncomeFilter",
    "NameSearchFilter",
    "PopularFilter",
    "HeartedFilter",
    "VetFilter",
    "DiversityFilter",
    "SolarFilter",
    "PovertyFilter",
    "PoliticsFilter",
    "SwingCountyFilter"
]
    
    
const HASHMAP = {
    "page": "[page]=",
    "home-price": "[home_price_from]=&[home_price_to]=",
    "median-income-greater-than": "[income_from]=",
    "name": "[term]=",
    "region": "[region]=",
    "population": "[pop_from]=&[pop_to]=",
    "median-age":"[age_from]=&[age_to]=",
    "popular":"[popular]",
    "hearted":"[hearted]",
    "own-vs-rent": "[majority_occupant]=",
    "vet-population": "[vet_pop]",
    "high-diversity": "[diversity]=",
    "solar-friendly" : "[solar]",
    "poverty-rate" : "[poverty_rate]=",
    "majority-party" : "[majority_party]=",
    "swing-county" : "[swing_county]="

}

const PARAMMAP = {
        "page": "Page",
        "home-price": "HomePriceFilter",
        "median-income-greater-than": "MedianIncomeFilter",
        "name": "NameSearchFilter",
        "region": "RegionFilter",
        "population": "PopulationFilter",
        "median-age": "AgeFilter",
        "popular": "PopularFilter",
        "hearted": "HeartedFilter",
        "own-vs-rent": "RentOwnFilter",
        "vet-population": "VetFilter",
        "high-diversity": "DiversityFilter",
        "solar-friendly" : "SolarFilter",
        "poverty-rate": "PovertyFilter",
        "majority-party" : "PoliticsFilter",
        "swing-county" : "SwingCountyFilter"
    }
      
var defaultZoom = window.innerWidth <= 815 ? 3 : 4;    

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
    hashString: "",
    searchTerm: "",
    searchCities: [],
    mapZoom: defaultZoom,
    mapCenter: {lat: 38.00, lng: -96.5556},
    highlightedCity: null,
    extendedFiltersPopup: false,
    key: "",
    holdPage: false,
}

const cityreducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ON_LOAD':
        //need to add in singleCityCase
        if (!action.payload.includes('city=')) {
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
            //const inactive = state.inactiveFilters.filter((val) => { return !params.map((filter)=> {return Object.keys(filter)[0]}).includes(val)})
            const startPage = page > 4 ? (4 * parseInt(page/4)) + 1 : 1
            const searchTerm = action.payload.includes("name=") ? params[0]["NameSearchFilter"].split("[term]=")[1] : ""
            return {
                ...state,
                hashTag: hashTagArray,
                params: params,
                //inactiveFilters: inactive,
                activeFilters: params.map((filter)=> {return Object.keys(filter)[0]}),
                page: page,
                startPage: startPage,
                searchTerm: searchTerm
            }
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
                    hashTag: state.hashTag.filter(function(item){ return !(key in item)}),
                    hashString: window.location.hash
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
                    //searchTerm: searchTerm
                }
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
        case 'UPDATE_KEY':
            return {
                ...state,
                key: action.key                
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
        case 'ADD_HEARTED':
            const updatedHeartedList = [...state.heartedCities]
            updatedHeartedList.push(action.city)
            return {
                ...state,
                heartedCities: updatedHeartedList
            }
        case 'REMOVE_HEARTED':
            const copyHeartedList = [...state.heartedCities]
            var removeIndex = copyHeartedList.map(function(city) { return city.id; }).indexOf(action.city.id);

            // remove object
            copyHeartedList.splice(removeIndex, 1);
            return {
                ...state,
                heartedCities: copyHeartedList
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
        case 'UPDATE_HASH_STRING':
            return {
                ...state,
                hashString: action.hashString
            }
        case 'TOGGLE_CITY_POPUP':
            return {
                ...state,
                showCityPopup: action.showCityPopup,
                holdPage: action.showCityPopup
            }
        case 'TOGGLE_FILTERS_POPUP':
            return {
                ...state,
                extendedFiltersPopup: action.extendedFiltersPopup
            }
        case 'HOLD_PAGE':
            return {
                ...state,
                holdPage: action.status
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
        case 'CHANGE_CENTER':
            return {
                ...state,
                mapCenter: {lat: parseFloat(action.lat), lng: parseFloat(action.lng)},
                mapZoom: 5,
                highlightedCity: action.id
            }
            
        default:
            return state;
        
    }
}

export default cityreducer;