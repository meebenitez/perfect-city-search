import React from 'react';


const HeartButton = props => {
    
    const heartButton = () => {
        if (props.currentUser) {
            if (props.heartedCities.find(function(city) {return city.id === props.city.id})) {
                return <button className="noborder-button" onClick={() => props.unheartClick(props.city)}><span style={{color: 'red'}}>♥</span></button>
            } else {
                return <button className="noborder-button" onClick={() => props.heartClick(props.city)}><span style={{color: 'white'}}>♥</span></button>
            }
        } else {
            return <button className="noborder-button" onClick={props.toggleAuthPopup}><span style={{color: 'white'}}>♥</span></button>
        }
    }

    return (
            <div className="heart-container">
                {heartButton()}
            </div>
    )
    
} 





export default HeartButton;