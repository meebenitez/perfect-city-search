import React from 'react'

//Helper functions for formatting cities


//------------------Formatting Region--------------------/
const REGIONS = [
    {"pacific_coast": "Pacific Coast"},
    {"mountain": "Mountain"},
    {"southwest": "Southwest"},
    {"heartland": "Heartland"},
    {"midwest": "Midwest"},
    {"southeast": "Southeast"},
    {"appalachian_highlands": "Appaliachia"},
    {"mid_atlantic": "MidAtlantic"},
    {"new_england": "New England"}
] 

export function formatRegion(region){
    const regionMatch = REGIONS.filter((e) => {
        return Object.keys(e)[0] === region
    })
    return Object.values(regionMatch[0])[0]
}


//------------------Formatting Population--------------------/
export function formatPop(pop) {
    if (pop > 1000000 ){
      return <span>{(pop / 1000000).toFixed(1) + "M"}</span>
    } else if (pop > 1000 && pop < 1000000) {
      let result = Math.round((pop / 1000))
      if (result > 999) {
        return <span>"1M"</span>
      } else {
          if (result >= 600) {
            return <span>{result + "K"}</span>
          } else if (result >= 100) {
            return <span>{result + "K"}</span>
          } else if (result >= 20) {
            return <span>{result + "K"}</span>
          } else if (result >= 8){
            return <span>{result + "K"}</span>
          } else {
            return <span>{result + "K"}</span>

          }
      }
    } else {
      return <span><img src={require('../../../assets/images/fields.png')} className="stat-icon-lg"/>{pop}</span>
    }
}

//------------------Formatting Figures--------------------/
export function formatFigure(figure) {
    if (figure >= 1000000){
        return <span> {"$" + (figure / 1000000).toFixed(1) + "M"}</span>
    } else if (figure >= 1000) {
        let result = Math.round((figure / 1000))
        if (result >= 999){
            return <span> "$1M"</span>
        } else {
            return <span> {"$" + result + "K"}</span>
        }
    } else {
        return <span> ${figure}</span>
    }
}
