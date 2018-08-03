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
//---------------------Popular---------------------------//


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

export function withCommas (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }


//----------------RESIZEIMAGE------------------//

export function resizeThumb(url) {
    let newString = url
    if (url !== undefined){
        newString = url.replace("200px", "600px")
    }
    return newString
}

export function resizeCityShow(url) {
    let newString = url
    if (url !== undefined){
        newString = url.replace("200px", "800px")
    }
    return newString
}
//-------------highlights---------------//

function diversity(raceGroup){
    let resultArray = raceGroup.filter((race)=> {
        return race >= 40
    })
    return resultArray
}

export function highlights(city){
    let list = []
    if (city.popularity >= 25){
        list.push([<div className="stat-border yellow-background" key="popular-highlight">Popular City</div>, <span> is a <strong>popular city</strong> amongst our users</span>])
    }
    if (city.vets_perc >= 10) {
        list.push([<div className="stat-border blue-background" key="veteran-highlight">Large Veteran Population</div>, <span>has a <strong>large veteran population</strong></span>])
    }
    if (city.poverty_perc <= 7) {
        list.push([<div className="stat-border purple-background" key="poverty-highlight">Low Poverty Rate</div>,<span>has a <strong>low poverty rate</strong></span> ])
    }
    if (diversity([city.pop_white_perc, city.pop_native_perc, city.pop_pacific_perc, 
                    //city.pop_latin_hispanic_perc, 
                    city.pop_asian_perc, city.pop_black_perc, 
                    city.pop_other_race_perc]).length === 0){
                        list.push([<div className="stat-border green-background" key="diversity-highlight">Racially Diverse</div>, <span>is <strong>racially diverse</strong></span>])
                    }
    if (Math.abs(city.dem_vote_perc - city.gop_vote_perc) <= 15) {
        list.push([<div className="stat-border red-background" key="swing-city-highlight">Swing County</div>, <span>is located in a <strong>swing county</strong></span>])
    }
    return list
}

export function highlightsParagraph(highlights){
    const highlightsArray = highlights.map(function(highlight){
        return <span>{highlight[1].props.children}</span>
    })
    if (highlightsArray.length > 2){
        return highlightsArray.map(function(highlight, index){
            if (index < highlightsArray.length - 1) {
                return <span>{highlight.props.children}, </span>
            } else {
                return <span>and {highlight.props.children}.</span>
            }
        })
    } else if (highlightsArray.length > 1){
        highlightsArray.splice(highlightsArray.length - 1, 0, <span> and </span>)
        highlightsArray.push(<span>.</span>)
    }
    
    else {
        highlightsArray.push(<span>.</span>)
    }
    return highlightsArray
}

////////////---PARAGRAPH FORMATTING-----//////////////

export function povertyStatement(rate){
    if (rate > 15.2) {
        return <span>higher than the national poverty rate of 15.2%.</span>
    } else if (rate > 15.0 && rate < 16.0){
        return <span>roughly equal to the national poverty rate of 15.2%</span>
    } else {
        return <span>lower than the national poverty rate of 15.2%</span>
    }
}