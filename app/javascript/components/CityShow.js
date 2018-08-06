import React from 'react';
import HeartButtonLg from './HeartButtonLg'
import {povertyStatement, formatPop, formatFigure, formatRegion, withCommas, highlights, resizeCityShow, highlightsParagraph, diversity, politicsStatement} from './utils/CityFormat'
import {formatIncomeHomeCompare} from './utils/MathFunctions'
import { Route, Link } from 'react-router-dom'
import RacialDiversityStat from './cityShow/RacialDiversityStat'
import RacialDiversityBlurb from './cityShow/RacialDiversityBlurb'
import HomeValueCompare from './cityShow/HomeValueCompare'
import IncomeCompare from './cityShow/IncomeCompare'
import PoliticsCompare from './cityShow/PoliticsCompare'
import PoliticsBlurb from './cityShow/PoliticsBlurb'
import CityShowMapContainer from '../containers/CityShowMapContainer'
import QuickFacts from './cityShow/QuickFacts'
import ClimateStats from './cityShow/ClimateStats'
import AgeStats from './cityShow/AgeStats'
import VeteranStats from './cityShow/VeteranStats'
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
                                             <QuickFacts city={props.city} />   
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
                                            <ClimateStats city={props.city} />
                                        </div>
                                        <div className="col-xs-12 category-container">
                                            <div className="col-xs-12 correction-container">
                                            <h4>Spot a mistake? Have a better city photo for us to use?</h4> Help us make this page about {props.city.name} better by emailing your corrections and feedback to <span className="underline">corrections@citysleuthusa.com</span>.  
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>

                                
                                <div className="col-xs-12 general-container">
                                    <div className="col-xs-12">
                                        <div className="col-xs-12 category-container">
                                            <h7>General Demographics</h7>
                                        </div>
                                        <div className="col-md-6 col-xs-12 zero-padding">
                                            <RacialDiversityStat city={props.city} />
                                         </div>
                                        <div className="col-md-6 col-xs-12 inner-blurb">
                                            <RacialDiversityBlurb city={props.city}/>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 category-container">
                                        <div className="col-md-6 col-xs-12 zero-padding">
                                            <AgeStats city={props.city} />
                                        </div>
                                        <div className="col-md-6 col-xs-12 zero-padding">
                                            <VeteranStats city={props.city} />
                                        </div>
                                        <div className="col-md-6 col-xs-12 zero-padding category-spacing">
                                            <PoliticsCompare city={props.city} />
                                         </div>
                                        <div className="col-md-6 col-xs-12 inner-blurb category-spacing extra-top-space">
                                            <PoliticsBlurb city={props.city} />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xs-12 general-container">
                                    <div className="col-xs-12 category-container">
                                        <div className="col-xs-12 category-container">
                                            <h7>Economy</h7>
                                        </div>
                                        <div className="col-md-6 col-xs-12 zero-padding">
                                            Median Income placeholder
                                         </div>
                                        <div className="col-md-6 col-xs-12 inner-blurb">
                                            Poverty placeholder
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xs-12 general-container">
                                    <div className="col-xs-12 category-container">
                                        <div className="col-xs-12 category-container">
                                            <h7>Housing</h7>
                                        </div>
                                        <div className="col-md-6 col-xs-12 zero-padding">
                                            Median Home Price placeholder
                                         </div>
                                        <div className="col-md-6 col-xs-12 inner-blurb">
                                            Misc placeholder
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 general-container">
                                    <div className="col-xs-12 category-container">
                                        <div className="col-xs-12 category-container">
                                            <h7>Transportation</h7>
                                            <p>placeholder</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 general-container">
                                    <div className="col-xs-12 category-container">
                                        <div className="col-xs-12 category-container">
                                            <h7>Crime and Safety</h7>
                                            <p>placeholder</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 general-container">
                                    <div className="col-xs-12 category-container">
                                        <div className="col-xs-12 category-container">
                                            <h7>Education</h7>
                                        </div>
                                    </div>
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







/*

{props.city.homes_median_value > 1000 ? 
                                            <div className="col-xs-12 graph-container">
                                                <div className="stats-title-big"><h8>Median Home Value</h8></div>
                                                <div className="stats-detail-big">${withCommas(props.city.homes_median_value)}</div>
                                                <HomeValueCompare city={props.city} />
                                            </div> : null
                                        }

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