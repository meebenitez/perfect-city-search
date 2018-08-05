import React from 'react';
import Aux from '../Aux'



const ClimateStats = props => {
    
    
    return (
            <Aux>
                <div className="col-xs-12 zero-padding">
                    <h7>Climate</h7><br></br><strong>Coming Soon!</strong>
                </div>
                <div className="col-xs-12 zero-padding category-container">
                    <img src={require('../../../assets/images/sunny.png')} className="climate-img"/>
                    <img src={require('../../../assets/images/rainy.png')} className="climate-img"/>
                </div>
                <div className="col-xs-12 zero-padding">
                    <p>{props.city.name} averages <strong>(placeholder) days of sun</strong> and <strong>(placeholder) days of rain</strong> annually.  The average high temperature in the summertime is <strong>(placeholder)</strong>, while the average low temperature in the wintertime is <strong>(placeholder)</strong>.</p>
                    <p>Last year {props.city.name} had <strong>(placeholder) inches of snowfall</strong>.</p>
                </div>
            </Aux>
    )
    
} 





export default ClimateStats;