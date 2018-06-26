import React from 'react';


const HeartButtonLg = props => {
    
    const heartButton = () => {
        if (props.currentUser) {
            if (props.heartedCities.find(function(city) {return city.id === props.city.id})) {
                return <div className="heart-inline" onClick={() => props.unheartClick(props.city)}><img src={require('../../assets/images/red_heart.png')} className="filter-icon-lg"/></div> 
            } else {
                return <div className="heart-inline" onClick={() => props.heartClick(props.city)}><img src={require('../../assets/images/white_heart.png')} className="filter-icon-lg"/></div> 
            }
        } else {
            return <div className="heart-inline" onClick={props.toggleAuthPopup}><img src={require('../../assets/images/white_heart.png')} className="filter-icon-lg"/></div> 
        }
    }

    return (
            <div className="heart-inline">
                {heartButton()}
            </div>
    )
    
} 





export default HeartButtonLg;