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
    {"appalachian_highlands": "Appalachia"},
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

export function diversity(raceGroup){
    let resultArray = raceGroup.filter((race)=> {
        return race >= 30
    })
    return resultArray
}

export function highlights(city){
    let list = []
    if (city.popularity >= 25){
        list.push([<div className="stat-border yellow-background" key="popular-highlight">Popular City</div>, <div className="highlight-p" key="popular-statement"> is a <strong key="popular">popular city</strong> amongst our users</div>])
    }
    if (city.vets_perc >= 10) {
        list.push([<div className="stat-border blue-background" key="veteran-highlight">Large Veteran Population</div>, <div className="highlight-p" key="veteran-statement">has a <strong key="veteran">large veteran population</strong></div>])
    }
    if (city.poverty_perc <= 7) {
        list.push([<div className="stat-border purple-background" key="poverty-highlight">Low Poverty Rate</div>,<div className="highlight-p" key="poverty-statement">has a <strong key="poverty">low poverty rate</strong></div> ])
    }
    if (diversity([city.pop_white_perc, city.pop_native_perc, city.pop_pacific_perc, 
                    city.pop_latin_hispanic_perc, 
                    city.pop_asian_perc, city.pop_black_perc, 
                    city.pop_other_race_perc]).length !== 1){
                        list.push([<div className="stat-border green-background" key="diversity-highlight">Racially Diverse</div>, <div className="highlight-p" key="diversity-statement">is <strong key="diversity">racially diverse</strong></div>])
                    }
    if (Math.abs(parseFloat(city.dem_vote_perc) - parseFloat(city.gop_vote_perc)) <= 15) {
        list.push([<div className="stat-border red-background" key="swing-city-highlight">Swing County</div>, <div className="highlight-p" key="swing-city-statement">is located in a <strong key="swing-city">potential swing county</strong></div>])
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

export function politicsWinner(dem, gop, ind){
    if (dem > gop && dem > ind) {
        return "dem"
    } else if (gop > dem && gop > ind){
        return "gop"
    } else if (ind > dem && ind > gop){
        return "ind"
    } else if (dem === gop) {
        return "dem/gop"
    } else if (dem === ind) {
        return "dem/ind"
    } else if (gop === ind) {
        return "gop/ind"
    } else {
        return "no value"
    }
}

export function politicsStatement(dem, gop, ind){
    const winner = politicsWinner(dem, gop, ind);
    if (winner === "dem") {
        return <span> <strong>Democratic nominee, Hillary Clinton, won this county with {dem}% of the votes</strong>. {gop > ind ? <span>Republican nominee, Donald Trump, received {gop}% of the votes, and independent party candidates received {ind}% of the votes.</span> : <span> Independent party candidates recieved {ind}% of the votes, and Republican nominee, Donald Trump, recieved {gop}% of the votes.</span>}</span>
    } else if (winner === "gop"){
        return <span> <strong>Republican nominee, Donald Trump, won this county with {gop}% of the votes</strong>. 
        {dem > ind ? <span> Democratic nominee, Hillary Clinton, received {dem}% of the votes, and independent party candidates received {ind}% of the votes.</span> : <span> Independent party candidates recieved {ind}% of the votes, and Democratic nominee, Hillary Clinton, recieved {dem}% of the votes.</span>}</span>
    } else if (winner === "ind") {
        return <span><strong>Independent party candidates won this county with {ind}% of the votes</strong>. 
        {dem > gop ? <span> Democratic nominee, Hillary Clinton, received {dem}% of the votes, and Republican nominee, Donald Trump, received {gop}% of the votes.</span> : <span> Republican nominee, Donald Trump, recieved {gop}% of the votes, and Democratic nominee, Hillary Clinton, recieved {dem}% of the votes.</span>}</span>
    } else if (winner === "dem/gop") {
        return <span><strong>Both Democratic and Republican nominees, Hillary Clinton and Donald Trump, tied in this county</strong> with each receiving {dem}% of the votes. Independent party candidates recieved {ind}% of the votes.</span>
    } else if (winner === "dem/ind") {
        return <span><strong>The Democratic nominee, Hillary Clinton, tied with independent party candidates in winning this county</strong>. Each received {dem}% of the votes. The Republican nominee, Donald Trump, lost with {gop}% of the votes.</span>
    } else if (winner === "gop/ind"){
        return <span><strong>The Republican nominee, Donald Trump, tied with independent party candidates in winning this county</strong>. Each received {gop}% of the votes. The Democratic nominee, Hillary Clinton, lost with {dem}% of the votes.</span>
    } else {
        return null;
    }
}