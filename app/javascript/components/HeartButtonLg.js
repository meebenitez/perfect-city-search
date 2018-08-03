import React from 'react';


const HeartButtonLg = props => {
    
    
    const heartButton = () => {
        if (props.currentUser) {
            if (props.heartedCities.find(function(city) {return city.id === props.city.id})) {
                return <div className="heart-inline" onClick={() => props.unheartClick(props.city)}><img src={require('../../assets/images/red_heart.png')} className="heart-icon-lg"/></div> 
            } else {
                return <div className="heart-inline" onClick={() => props.heartClick(props.city)}><img src={require('../../assets/images/white_heart.png')} className="heart-icon-lg"/></div> 
            }
        } else {
            return <div className="heart-inline" onClick={() => props.toggleSingleCityAuthPopup()}><img src={require('../../assets/images/white_heart.png')} className="heart-icon-lg"/></div>  
        }
    }

    return (
            <div>
                {heartButton()}
            </div>
    )
    
} 





export default HeartButtonLg;