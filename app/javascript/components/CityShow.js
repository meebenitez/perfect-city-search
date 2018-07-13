import React from 'react';
import HeartButton from './HeartButton'
import {formatPop, formatFigure, formatRegion, withCommas, highlights, resizeThumb} from './utils/CityFormat'
import {formatIncomeHomeCompare} from './utils/MathFunctions'
import { Route, Link } from 'react-router-dom'




const CityShow = (props) => {

    const races = [
        ["African-American" , props.city.pop_black_perc],
        ["Caucasian" , props.city.pop_white_perc],
        ["Native-American" , props.city.pop_native_perc],
        ["Asian" , props.city.pop_asian_perc],
        ["Pacific Islander" , props.city.pop_pacific_perc],
        ["Latin / Hispanic" , props.city.pop_latin_hispanic_perc],
        ["Other Race" , props.city.pop_other_race_perc],
        ["Mixed Race" , props.city.pop_mixed_race_perc]
    ]

    const renderRacesPercents = races.map((race) => {
        return <div className="stat-border">{Math.floor(race[1])}% {race[0]}</div>
    })

    const bgStyle = {  
        width: '90%',
        height: '225px',
        backgroundImage: 'url(' + resizeThumb(props.city.img_thumb) + ')',
        backgroundSize:     'cover',                      /* <------ */
        backgroundRepeat:   'no-repeat',
        backgroundPosition: 'center center', 
        backgroundColor: 'rgba(236, 234, 234, 0.25)',
        WebkitTransition: 'all', // note the capital 'W' here
        msTransition: 'all', // 'ms' is the only lowercase vendor prefix
        borderRadius: '10px',
        border: '1px solid #929494'
    };



    if (props.city !== null) {
        return (
            <div className="city-popup">
                <div className='city-popup-inner'>
                    <div className="row">
                        <div className="col-xs-12 left-push row">
                            <div className="top-right2"><Link to={`${props.hashString}`} onClick={props.closePopup} >x close</Link></div>
                            <div className="col-md-5 col-xs-12 zero-padding">
                                <div className="col-xs-12 zero-padding">
                                    <div style={bgStyle}>
                                        <div className="top-right-heart">
                                            <HeartButton
                                                currentUser={props.currentUser} 
                                                heartedCities={props.heartedCities} 
                                                unheartClick={props.unheartClick} 
                                                heartClick={props.heartClick} 
                                                toggleAuthPopup={props.toggleAuthPopup} 
                                                city={props.city}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 zero-padding">
                                    <h1>{props.city.name}, {props.city.short_state}{ (props.city.popularity >= 25) ? <span className="star">★&nbsp;&nbsp;</span> : null }</h1>
                                    <br></br>
                                    <span style={{fontWeight: "bold", fontSize: "17px", color: "red"}}>{props.city.county} </span>
                                    <span style={{fontWeight: "bold", fontSize: "17px"}}>&nbsp;({formatRegion(props.city.region)})</span>
                                    <br></br>
                                    <span style={{fontStyle: "italic", fontSize: "12px"}}>{props.city.latitude}, {props.city.longitude}</span>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    {highlights(props.city).length > 0 ? <div className="zero-padding"><span style={{fontWeight: "bold"}}>Highlights: </span>
                                    <br></br>
                                    {highlights(props.city).map( (city) => city)}</div> : null}
                                    <br></br>
                                    <br></br>
                                </div> 
                                <div className="col-xs-12 zero-padding">
                                    <div className="photo-credit zero-padding">Photo Credit: <Link to={props.city.img_wiki_src} target="_blank">"{props.city.img_title.replace(/<\/?[^>]+(>|$)/g, "")}" by {props.city.img_artist.replace(/<\/?[^>]+(>|$)/g, "")}</Link>
                                        <br></br>
                                        License: {props.city.img_license}
                                    </div>
                                </div>   
                            </div>
                            <div className="col-xs-7 zero-padding">
                                <h2>City Stats</h2>
                                <br></br>
                                <br></br>
                                <span style={{fontWeight: "bold"}}>Population: </span><span>{withCommas(props.city.pop_total)} residents</span>
                                <br></br>
                                <span style={{fontWeight: "bold"}}>Median Age: </span><span>{props.city.age_median}</span>
                                <br></br>
                                <br></br>
                                <span style={{fontWeight: "bold"}}>Racial Diversity:</span>
                                <br></br>
                                {renderRacesPercents}
                                <br></br>
                                <br></br>
                                <span style={{fontWeight: "bold"}}>Veteran Population: </span>
                                <br></br>{props.city.vets_perc}%<span style={{fontSize: "13px"}}> - (US avg: 6%)</span>
                                <br></br>
                                <br></br>
                                <span style={{fontWeight: "bold"}}>2016 Presidential Election Results for {props.city.county}</span>
                                <br></br>
                                <div className="stat-border">{Math.floor(props.city.gop_vote_perc)}% Trump</div>
                                <div className="stat-border">{Math.floor(props.city.dem_vote_perc)}% Clinton</div>
                                <div className="stat-border">{Math.floor(props.city.ind_vote_perc)}% Independent</div>
                                <br></br>
                                <br></br>
                                <span style={{fontWeight: "bold"}}>Median Household Income: </span>
                                <br></br>
                                {props.city.homes_median_value > 100 ? <span>${withCommas(props.city.income_median)} <span style={{fontSize: "13px"}}> - (US avg: $59,039)</span></span> : "no data"}
                                <br></br>
                                <br></br>
                                <span style={{fontWeight: "bold"}}>Poverty Rate </span>
                                <br></br>
                                {props.city.poverty_perc}%<span style={{fontSize: "13px"}}> - (US avg: 12.7%)</span>
                                <br></br>
                                <br></br>
                                <span style={{fontWeight: "bold"}}>Median Home Value</span>
                                <br></br>
                                {props.city.homes_median_value > 100 ? <span>${withCommas(props.city.homes_median_value)}<span style={{fontSize: "13px"}}> - (US avg: $215,600)</span></span> : "no data" }
                                <br></br>
                                <br></br>
                                <span style={{fontWeight: "bold"}}>Owners vs Renters</span>
                                <br></br>
                                <div className="stat-border">{Math.floor(props.city.homes_renter_occupied_perc)}% Renters</div>
                                <div className="stat-border">{Math.floor(props.city.homes_owner_occupied_perc)}% Owners</div>
                                <br></br>
                                <br></br>
                                <span style={{fontWeight: "bold"}}>Solar Installed Homes</span>
                                <br></br>
                                {Math.floor(props.city.homes_solar_perc)}%<span style={{fontSize: "13px"}}> - (US avg: %1.02)</span>
                            </div>
                        </div>
                        <div className="col-xs-12 left-push zero-padding row">
                        <br></br>
                        </div>
                    </div>        
                </div>
            </div>
        )
    } else {
        return (
            <div>Still loading</div>
        )
    }
    
}
    


export default CityShow;