import React from 'react';
import HeartButtonLg from './HeartButtonLg'
import {povertyStatement, formatPop, formatFigure, formatRegion, withCommas, highlights, resizeCityShow, highlightsParagraph} from './utils/CityFormat'
import {formatIncomeHomeCompare} from './utils/MathFunctions'
import { Route, Link } from 'react-router-dom'
import RacialDiversityStat from './cityShow/RacialDiversityStat'
import HomeValueCompare from './cityShow/HomeValueCompare'
import IncomeCompare from './cityShow/IncomeCompare'
import PoliticsCompare from './cityShow/PoliticsCompare'
import CityShowMapContainer from '../containers/CityShowMapContainer'
//import {PieChart} from 'react-easy-chart';
//import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, HorizontalBarSeries} from 'react-vis';
import {Doughnut as DoughnutChart} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';


const CityShow = (props) => {

    const bgStyle = {  
        width: '100%',
        height: '350px',
        backgroundImage: 'url(' + resizeCityShow(props.city.img_thumb) + ')',
        backgroundSize:     'cover',                      /* <------ */
        backgroundRepeat:   'no-repeat',
        backgroundPosition: 'center center', 
        backgroundColor: 'rgba(236, 234, 234, 0.25)',
        WebkitTransition: 'all', // note the capital 'W' here
        msTransition: 'all', // 'ms' is the only lowercase vendor prefix
        borderRadius: '10px',
        border: '1px solid #929494'
    };

    const styles = {
     graphContainer: {
      border: '1px solid black',
      padding: '15px'
     }
    }

    if (props.city !== null) {
        return (
            <div className="city-popup">
                <div className='city-popup-inner'>
                    <div className="row">
                        <div className="col-xs-12 left-push row zero-padding">
                                <div className="col-xs-12 zero-padding">
                                    <div className="col-xs-12 bottom-line-popup fixed white-background">
                                        <div className="top-right2"><Link to={`${props.hashString}`} onClick={props.closePopup}>x close</Link></div>
                                        <div className="name-container">
                                            <h6>{props.city.name}, {props.city.long_state}&nbsp;{ (props.city.popularity >= 25) ? <span className="star">★&nbsp;&nbsp;</span> : null }<img src={require('../../assets/images/facebook.png')} alt="share this city on facebook!" className="img-social"/>&nbsp;<img src={require('../../assets/images/twitter.png')} className="img-social"/></h6>
                                        </div>          
                                    </div>
                                    <div className="col-xs-12 details zero-padding">
                                        <div className="col-md-7 col-xs-12 zero-padding">
                                                    <div className="col-xs-12 facts-container">
                                                        <div className="col-xs-4">
                                                            <div className="stats-title-big"><h7>US Region</h7></div>
                                                            <div className="stats-detail-big">{formatRegion(props.city.region)}</div>
                                                        </div>
                                                        <div className="col-xs-4">
                                                            <div className="stats-title-big"><h7>County</h7></div>
                                                            <div className="stats-detail-big">{props.city.county}</div>
                                                        </div>
                                                        <div className="col-xs-4">
                                                            <div className="stats-title-big"><h7>Population</h7></div>
                                                            <div className="stats-detail-big">{withCommas(props.city.pop_total)}</div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-xs-12 info-bit-container">
                                                        <p><h7>Quick Facts</h7><br></br><strong>{props.city.name}</strong> is a city located in {props.city.long_state} with a population of <strong>{withCommas(props.city.pop_total)} residents</strong>.  The <strong>median age</strong> of the population in {props.city.name} is <strong>{props.city.age_median}</strong>.  The median age for females in {props.city.name} is {props.city.age_median_female} and males is {props.city.age_median_male}.</p>
                                                        <p>The median household income is {props.city.income_median > 0 ? <strong>${withCommas(props.city.income_median)}</strong> : <strong>not available</strong>} and {props.city.name} has a poverty rate of <strong>{props.city.poverty_perc}%</strong>.  This is {povertyStatement(props.city.poverty_perc)}</p>
                                                        {highlights(props.city).length > 0 ? <div><h7>Highlights</h7><br></br> 
                                                        <div className="highlights-container">{highlights(props.city).map( (city) => city[0])}</div>
                                                        <p>{props.city.name} {highlightsParagraph(highlights(props.city))}</p></div> : null }
                                                    </div>
                                                    
                                            </div>
                                            <div className="col-md-5 col-xs-12 zero-padding">
                                                <div className="col-xs-12 zero-padding">
                                                    <div className="top-right-heart-show-page">
                                                        <HeartButtonLg
                                                            currentUser={props.currentUser} 
                                                            heartedCities={props.heartedCities} 
                                                            unheartClick={props.unheartClick} 
                                                            heartClick={props.heartClick} 
                                                            toggleAuthPopup={props.toggleAuthPopup} 
                                                            city={props.city}
                                                            toggleSingleCityAuthPopup={props.toggleSingleCityAuthPopup}/>
                                                    </div>
                                                    <div style={bgStyle} title={props.city.img_title.replace(/<\/?[^>]+(>|$)/g, "") + " by " + props.city.img_artist.replace(/<\/?[^>]+(>|$)/g, "") + "-" + props.city.img_license}>
                                                        </div>
                                                        <div className="col-xs-12 zero-padding">
                                                        <div className="photo-credit zero-padding" title={props.city.img_title.replace(/<\/?[^>]+(>|$)/g, "") + " by " + props.city.img_artist.replace(/<\/?[^>]+(>|$)/g, "") + "-" + props.city.img_license}><center><Link to={props.city.img_wiki_src} target="_blank">Photo Source</Link></center>
                                                    </div>
                                                    </div> 
                                                </div>
                                            </div>
                                            
                                        </div>
                                </div>
                            
                                <div className="col-xs-12 city-map-container">
                                    <div className="col-md-7 col-xs-12 zero-padding">
                                        <CityShowMapContainer {...props} />
                                    </div>
                                    <div className="col-md-5 col-xs-12 zero-padding">
                                        <div className="col-xs-12 category-container">
                                            <div className="col-xs-12 zero-padding">
                                                <h7>Climate</h7><br></br><strong>Coming Soon!</strong>
                                            </div>
                                            <div className="col-xs-12 zero-padding category-container">
                                                <img src={require('../../assets/images/sunny.png')} className="climate-img"/>
                                                <img src={require('../../assets/images/rainy.png')} className="climate-img"/>
                                            </div>
                                            <div className="col-xs-12 zero-padding">
                                                <p>{props.city.name} averages <strong>(placeholder) days of sun</strong> and <strong>(placeholder) days of rain</strong> annually.  The average high temperature in the summertime is <strong>(placeholder)</strong>, while the average low temperature in the wintertime is <strong>(placeholder)</strong>.</p>
                                                <p>Last year {props.city.name} had <strong>(placeholder) inches of snowfall</strong>.</p>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 category-container">
                                            <div className="col-xs-12 correction-container">
                                                <h4>Spot a mistake? Have a better photo of {props.city.name} for us to use?</h4> Help us make this page about {props.city.name} better by emailing your corrections and feedback to <span className="underline">corrections@citysleuthusa.com</span>.  
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>

                                
                                <div className="col-xs-12 zero-padding">
                                    <div className="col-md-7 col-xs-12 zero-padding">
                                        {props.city.homes_median_value > 1000 ? 
                                            <div className="col-xs-12 graph-container">
                                                <div className="stats-title-big"><h7>Median Home Value</h7></div>
                                                <div className="stats-detail-big">${withCommas(props.city.homes_median_value)}</div>
                                                <HomeValueCompare city={props.city} />
                                            </div> : null
                                        }
                                    </div>
                                    <div className="col-md-5 col-xs-12 zero-padding">
                                        test
                                    </div>
                                </div>
                            
                            
                            
                                
                                <div className="col-xs-12">
                                    <div className="col-md-6 col-xs-12">
                                        <RacialDiversityStat city={props.city} />
                                    </div>
                                    <div className="col-md-6 col-xs-12">
                                        <span style={{fontWeight: "bold"}}>Veteran Population: </span>
                                        <br></br>{props.city.vets_perc}%<span style={{fontSize: "13px"}}> - (US avg: 6%)</span>
                                    </div>


                                </div>
                            
                                <br></br>
                                <br></br>
                                
                                <br></br>
                                
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
        )
    } else {
        return (
            <div>Still loading</div>
        )
    }
    
}
    


export default CityShow;


/*

<div className="col-xs-12 category-container">
                                            <div className="col-xs-12 zero-padding">
                                                <h7>Politics</h7><br></br>
                                                <p>The following chart shows the 2016 US Presidental Race voting results for {props.city.county}:</p>
                                                {Math.abs(props.city.dem_vote_perc - props.city.gop_vote_perc) <= 15 ? <p><strong>{props.city.name} is located in a potential swing county</strong>, meaning that one political party won the county by less than a 15% margin.</p>: null}
                                            </div>
                                            <div className="col-xs-12 zero-padding">

                                            <PoliticsCompare city={props.city} />

                                            </div>
                                        </div>

                                        */



                            /*
                               <div className="col-md-4 col-xs-12 zero-padding">
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
                                   <div className="photo-credit zero-padding"><Link to={props.city.img_wiki_src} target="_blank">{props.city.img_title.replace(/<\/?[^>]+(>|$)/g, "")}</Link> by {props.city.img_artist.replace(/<\/?[^>]+(>|$)/g, "")} - {props.city.img_license}
                                   </div>
                               </div>   
                               <div className="col-xs-12 zero-padding main-detail">
                                   <h1>{props.city.name}, {props.city.short_state}{ (props.city.popularity >= 25) ? <span className="star">★&nbsp;&nbsp;</span> : null }</h1>
                                   <br></br>
                                   <span style={{fontWeight: "bold", fontSize: "17px"}}>{formatRegion(props.city.region)}</span>
                                   <br></br>
                                   <span style={{fontStyle: "italic", fontSize: "15px"}}>{props.city.county}</span>
                                   <br></br>
                                   <br></br>
                                   {highlights(props.city).length > 0 ? <div className="highlights-container"><span style={{fontWeight: "bold"}}>Highlights: </span>
                                   <br></br>
                                   {highlights(props.city).map( (city) => city)}</div> : null}
                                   <br></br>
                                   <br></br>
                               </div> 
                               
                           </div>
                           */


/*
<div className="col-xs-12 facts-container">
                                                
                                                <div className="col-xs-6">
                                                <center>
                                                        <div className="stats-title-big">
                                                            <h7>Median Home Value</h7>
                                                        </div>
                                                    </center>
                                                    <div className="stats-detail-big">{props.city.homes_median_value > 100 ? "$" + withCommas(props.city.homes_median_value) : "no data" }</div>
                                                </div>
                                                <div className="col-xs-6">
                                                <center>
                                                        <div className="stats-title-big">
                                                            <h7>Household Income</h7>
                                                        </div>
                                                    </center>
                                                    <div className="stats-detail-big">{props.city.income_median > 100 ? "$" + withCommas(props.city.income_median) : "no data" }</div>
                                                
                                                </div>
                                              
                                            </div>*/