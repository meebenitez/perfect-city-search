import React from 'react'


//------------------Median Income to Median Home Value Comparison--------------------/
export function filterHolderFinder(filterName, params, activeFilters) {

    if (activeFilters !== undefined && activeFilters.includes(filterName)) {
        let obj = params.filter(e => Object.keys(e)[0] === filterName)
        return Object.values(obj[0])[0]
    } else {
        return ""
    }
}
