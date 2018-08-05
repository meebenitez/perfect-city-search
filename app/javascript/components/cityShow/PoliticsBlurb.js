import React from 'react';
import {politicsStatement} from '../utils/CityFormat'
import Aux from '../Aux'



const PoliticsBlurb = props => {
    
    
    return (
            <Aux>
                <h7>Politics</h7>
                <br></br>
                <p>This chart shows the 2016 US Presidental Race voting results for {props.city.county}, {props.city.short_state}. {politicsStatement(parseFloat(props.city.dem_vote_perc.toFixed(2)), parseFloat(props.city.gop_vote_perc.toFixed(2)), parseFloat(props.city.ind_vote_perc.toFixed(2)))}</p>
                <p>{Math.abs(props.city.dem_vote_perc - props.city.gop_vote_perc) <= 15 ? <span><strong>{props.city.name} is located in a potential swing county</strong>, meaning that the political party with the majority votes for {props.city.county} won by a margin of less than 15%.</span> : null}</p>
                <p>This data was sourced from Tony McGovern's "<a href="https://github.com/tonmcg/County_Level_Election_Results_12-16" target="_blank">County-Level Presidential General Election Results for 2012 - 2016</a>" (originally scraped from Townhall.com).</p>
            </Aux>
    )
    
} 





export default PoliticsBlurb;