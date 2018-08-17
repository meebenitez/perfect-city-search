import React from 'react';
import Aux from './Aux'


const CityPin = props => {

    const renderPin = function(){
        if (props.heartedCities.find(function(city) {return city.id === props.city.id})) {
            return <div className="city-pin-container"><img src={require("../../assets/images/red_heart.png")} className="origin-zero"/></div>
        } else if (props.highlightedCity === props.city.id) {
            return <div className="city-pin-container"><img src={require("../../assets/images/red_city_pin.png")} className="origin-zero highlight"/><div className="city-pin-popup highlight">{props.city.name}</div></div>
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