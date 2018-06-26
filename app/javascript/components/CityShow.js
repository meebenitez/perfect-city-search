import React from 'react';
import HeartButtonLg from './HeartButtonLg'
import {formatPop, formatFigure, formatRegion, withCommas} from './utils/CityFormat'
import {formatIncomeHomeCompare} from './utils/MathFunctions'
import { Route, Link } from 'react-router-dom'


const CityShow = (props) => {


    //debugger;
    //return (<div>Test</div>)
    if (props.city !== null) {
        return (
            <div className="city-popup">
                <div className='city-popup-inner'>
                    <div className="row">
                        <div className="col-xs-12 left-push row">
                            <div className="col-xs-5 zero-padding">
                                <div className="col-xs-12 zero-padding">
                                    <div className="bottom-right2">
                                        <HeartButtonLg
                                            currentUser={props.currentUser} 
                                            heartedCities={props.heartedCities} 
                                            unheartClick={props.unheartClick} 
                                            heartClick={props.heartClick} 
                                            toggleAuthPopup={props.toggleAuthPopup} 
                                            city={props.city}/>
                                    </div>
                                    <img className="img-city-icon-lg" src={props.city.img} onError={(e)=>{e.target.src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/CheyenneWY_downtown.jpg/1024px-CheyenneWY_downtown.jpg'}} />
                                </div>
                                <div className="col-xs-12 zero-padding">
                                    <span style={{fontSize: "12px"}}>Credit: <Link to={props.city.img_wiki_src} target="_blank">"{props.city.img_title}" by {props.city.img_artist}</Link> - {props.city.img_license}
                                    </span>
                                </div>
                            </div>
                            <div className="col-xs-7 zero-padding">
                                <div className="top-right2" onClick={props.closePopup}><img src={require('../../assets/images/xout2.png')} className="filter-icon-sm"/> </div>
                                <div className="zero-padding">
                                <h1>{props.city.name}, {props.city.short_state}</h1>
                                <br></br>
                                <span style={{fontWeight: "bold", fontSize: "17px", color: "red"}}>{props.city.county}</span>
                                <span style={{fontWeight: "bold", fontSize: "17px"}}>&nbsp;({formatRegion(props.city.region)})</span>
                                <br></br>
                                <span style={{color: 'gold', fontSize:'15px'}}>{ (props.city.popularity >= 25) ? "⭐ Popular City ⭐ " : null }</span>
                                <br></br>
                                <br></br>
                                <span style={{fontWeight: "bold"}}>Population: </span><span>{withCommas(props.city.pop_total)} residents</span>
                                <br></br>
                                <span style={{fontWeight: "bold"}}>Median Age: </span><span>{props.city.age_median}</span>
                                <br></br>
                                

                                </div> 
                            </div>
                        </div>
                        <div className="col-xs-12 left-push zero-padding row">
                        <br></br>
                        <h2>More Stats</h2>
                        <br></br>
                        <span style={{fontWeight: "bold"}}>Racial Diversity:</span>
                            <br></br>
                            <div className="stat-border">{Math.floor(props.city.pop_black_perc)}% African-American</div>
                            <div className="stat-border">{Math.floor(props.city.pop_white_perc)}% Caucasian</div>
                            <div className="stat-border">{Math.floor(props.city.pop_native_perc)}% Native American</div>
                            <div className="stat-border">{Math.floor(props.city.pop_asian_perc)}% Asian</div>
                            <div className="stat-border">{Math.floor(props.city.pop_pacific_perc)}% Pacific Islander</div>
                            <div className="stat-border">{Math.floor(props.city.pop_latin_hispanic_perc)}% Latin/Hispanic</div>
                            <div className="stat-border">{Math.floor(props.city.pop_other_race_perc)}% Other Race</div>
                            <div className="stat-border">{Math.floor(props.city.pop_mixed_race_perc)}% Mixed Race</div>
                            <br></br>
                            <br></br>
                            <span style={{fontWeight: "bold"}}>Veteran Population: </span>{props.city.vets_perc}% (US avg. is 6%)
                            <br></br>
                            <br></br>
                            <span style={{fontWeight: "bold"}}>2016 Presidential Election Votes for {props.city.county}</span>
                            <br></br>
                            <div className="stat-border red-background">{Math.floor(props.city.gop_vote_perc)}% Trump</div>
                            <div className="stat-border blue-background">{Math.floor(props.city.dem_vote_perc)}% Clinton</div>
                            <div className="stat-border grey-background">{Math.floor(props.city.ind_vote_perc)}% Independent</div>
                            
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