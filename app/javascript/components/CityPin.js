import React from 'react';


const CityPin = props => {
    return (
        <div>
            {props.highlightedCity === props.city.id ? <img src={require('../../assets/images/red_city_pin.png')} className="logo-icon"/> : <img src={require('../../assets/images/green_city_pin.png')} className="logo-icon"/>}
        </div>
    )
    
} 

export default CityPin;