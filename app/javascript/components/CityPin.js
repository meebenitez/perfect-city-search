import React from 'react';


const CityPin = props => {

    const renderPin = function(){
        if (props.heartedCities.find(function(city) {return city.id === props.city.id})) {
            return <img src={require("../../assets/images/red_heart.png")} className="origin-zero"/>
        } else if (props.highlightedCity === props.city.id) {
            return <img src={require("../../assets/images/red_city_pin.png")} className="origin-zero"/>
        } else {
            return <img src={require("../../assets/images/green_city_pin.png")} className="origin-zero"/>
        }
    }

    return (
            <div>
                {renderPin()}
            </div>

        
        
        
    )
    
} 

export default CityPin;