import React from 'react'


//------------------Median Income to Median Home Value Comparison--------------------/
export function filterHolderFinder(filterName, params) {

    if (params !== undefined) {
        let obj = params.filter(e => Object.keys(e)[0] === filterName)
        return Object.values(obj[0])[0]
    } else {
        return ""
    }
}
