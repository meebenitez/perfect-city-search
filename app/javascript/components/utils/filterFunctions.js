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
