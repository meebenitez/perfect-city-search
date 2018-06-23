import React from 'react'


//------------------Determines preset filter property--------------------/
export function filterHolderFinder(filterName, params) {

    if (params !== undefined) {
        let obj = params.filter(e => Object.keys(e)[0] === filterName)
        return Object.values(obj[0])[0]
    } else {
        return ""
    }
}

export function withCommas (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


  export function checkDivClass (activeFilters, filterName, popupValue) {
    if (activeFilters.includes("filterName")) {
        return "filter-div filter-on tooltip-top"
    } else if (popupValue) {
        return "filter-div filter-off blue-border"
    } else {
        return "filter-div filter-off"
    }
} 

export function checkParamValues(params, filterName, filterValue){
    return Object.values(params.filter((filter) => {return Object.keys(filter)[0] === filterName})[0])[0] === filterValue
}