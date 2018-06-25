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

                        <div className="col-xs-12 row zero-padding">
                            <div className="row left-push">
                                <div className="row">
                                    <div className="col-xs-5 city-img-container">
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
                                    <div className="cols-xs-7 city-stat-container">
                                            <div className="top-right2" onClick={props.closePopup}><img src={require('../../assets/images/xout2.png')} className="filter-icon-sm"/> </div>
                                            <h1>{props.city.name}, {props.city.long_state}</h1>
                                            <br></br>
                                            <span style={{fontWeight: "bold", fontSize: "17px", color: "red"}}>{props.city.county}</span>
                                            <span style={{fontWeight: "bold", fontSize: "17px"}}>&nbsp;({formatRegion(props.city.region)})</span>
                                            <br></br>
                                            <span style={{color: 'gold', fontSize:'15px'}}>{ (props.city.popularity >= 25) ? "⭐ Popular City ⭐ " : null }</span>
                                            <br></br>
                                            <br></br>
                                            <span style={{fontWeight: "bold"}}>Population: </span><span>{withCommas(props.city.pop_total)} residents</span>
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                            <span style={{fontSize: "12px"}}>Photo Credit: 
                                            <br></br>
                                            <Link to={props.city.img_wiki_src} target="_blank">"{props.city.img_title}" by {props.city.img_artist}</Link> - {props.city.img_license}
                                            </span>
                                </div>        
                                    </div>
                                <div className="row left-push city-stats-full">
                                    <div className="city-stats-col">
                                        <span style={{fontWeight: "bold", textDecoration: 'underline', fontSize: "17px"}}>Resident Demographics</span>
                                        <br></br>
                                        <br></br>
                                        <span>Median Age: <span style={{fontWeight: "bold"}}> {props.city.age_median}</span></span>
                                        <br></br>
                                        <br></br>
                                        <span>Racial Diversity:</span>
                                        <br></br>
                                        <span style={{fontWeight: "bold"}}>{Math.floor(props.city.pop_white_perc)}% White, {Math.floor(props.city.pop_black_perc)}% Black, {Math.floor(props.city.pop_native_perc)}% Native American, {Math.floor(props.city.pop_asian_perc)}% Asian, {Math.floor(props.city.pop_pacific_perc)}% Pacific Islander, {Math.floor(props.city.pop_latin_hispanic_perc)}% Latin/Hispanic, {Math.floor(props.city.pop_other_race_perc)}% Other, {Math.floor(props.city.pop_mixed_race_perc)}% Mixed Race</span>
                                        <br></br>
                                        <br></br>
                                        <span>Veteran Population:</span><span style={{fontWeight: "bold"}}> {props.city.vets_perc}%</span>
                                        <br></br>
                                        <br></br>
                                        <span>Political Diversity</span>
                                        <br></br>
                                        <span>(2016 results for {props.city.county})</span>
                                        <br></br>
                                        <span style={{fontWeight: "bold"}}>{Math.floor(props.city.dem_vote_perc)}% Clinton, {Math.floor(props.city.gop_vote_perc)}% Trump, {Math.floor(props.city.ind_vote_perc)}% Independent</span>

                                    </div>
                                </div>
                            </div>
                           
                        
                        
                        
                                <div>
                                    
                                   
                                    
                                </div>
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