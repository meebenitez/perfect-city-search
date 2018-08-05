import React from 'react';
import {formatRegion, withCommas, highlights, highlightsParagraph, povertyStatement} from '../utils/CityFormat'
import Aux from '../Aux'



const QuickFacts = props => {
    
    
    return (
            <Aux>
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
                    <p>The median household income is {props.city.income_median > 0 ? <strong>${withCommas(props.city.income_median)}</strong> : <strong>not available</strong>} and {props.city.name} has a poverty rate of <strong>{props.city.poverty_perc}%</strong>.  This is {povertyStatement(props.city.poverty_perc)} This data was sourced from the US Census Bureau 2016 ACS.</p>
                    {highlights(props.city).length > 0 ? <div><h7>Highlights</h7><br></br> 
                    <div className="highlights-container">{highlights(props.city).map( (city) => city[0])}</div>
                    <p>{props.city.name} {highlightsParagraph(highlights(props.city)).map((city) => city)}</p></div> : null }
                </div>
            </Aux>
    )
    
} 





export default QuickFacts;