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
        list.push(<div className="stat-border yellow-background" key="popular-highlight">Popular City</div>)
    }
    if (city.vets_perc >= 10) {
        list.push(<div className="stat-border blue-background" key="veteran-highlight">Large Veteran Population</div>)
    }
    if (city.poverty_perc <= 7) {
        list.push(<div className="stat-border purple-background" key="poverty-highlight">Low Poverty Rate</div>)
    }
    if (diversity([city.pop_white_perc, city.pop_native_perc, city.pop_pacific_perc, 
                    //city.pop_latin_hispanic_perc, 
                    city.pop_asian_perc, city.pop_black_perc, 
                    city.pop_other_race_perc]).length === 0){
                        list.push(<div className="stat-border green-background" key="diversity-highlight">Racially Diverse</div>)
                    }
    if (Math.abs(city.dem_vote_perc - city.gop_vote_perc) <= 15) {
        list.push(<div className="stat-border red-background" key="swing-city-highlight">Swing County</div>)
    }
    return list
}