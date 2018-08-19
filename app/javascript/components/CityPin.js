import React from 'react';
import Aux from './Aux';
import { Route, Link } from 'react-router-dom';




const CityPin = props => {

    const renderPin = function(){
        if (props.highlightedCity === props.city.id) {
            return <div className="city-pin-container"><img src={require("../../assets/images/red_city_pin.png")} className="origin-zero highlight"/><div className="city-pin-popup highlight"><Link to={`#city=${props.city.name}_${props.city.short_state}_${props.city.id}`} onClick= {() => props.showSingleCity()} >{props.city.name}, {props.city.short_state}</Link>{ (props.city.popularity >= 25) ? <span className="star">&nbsp;&nbsp;★</span> : null }</div></div>
        } else {
            return <div className="city-pin-container"><img src={require("../../assets/images/green_city_pin.png")} className="origin-zero"/></div>
        }
    }

    return (
            <Aux>
                {renderPin()}
            </Aux>

        
        
        
    )
    
} 

export default CityPin;