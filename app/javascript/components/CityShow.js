import React from 'react';
import HeartButton from './HeartButton'
import {formatPop, formatFigure, formatRegion} from './utils/CityFormat'
import {formatIncomeHomeCompare} from './utils/MathFunctions'



const CityShow = (props) => {
    
    return (
        <div className="city-popup">
            <div className='city-popup-inner'>
                <button onClick={props.closePopup}>x</button>
                    <br></br>
                    <br></br>
                    <center>   
                        <img className="img-city-icon-lg" src={props.city.img} onError={(e)=>{e.target.src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/CheyenneWY_downtown.jpg/1024px-CheyenneWY_downtown.jpg'}} /><br></br><br></br>
                        <h1>{props.city.name}, {props.city.short_state}</h1>
                        <br></br><br></br><span style={{fontWeight: "bold", fontSize: "15px"}}>{formatRegion(props.city.region)}</span>
                        <div>
                            <br></br>
                            <span style={{color: 'gold', fontSize:'15px'}}>{ (props.city.popularity >= 20) ? "⭐ Popular City ⭐ " : null }</span>
                            <p>
                                {formatPop(props.city.population)} residents<br></br>
                                <img src={require('../../assets/images/house_icon.png')} className="stat-icon-lg"/>{formatFigure(props.city.median_property_value)} median home price<br></br>
                                💵 {formatFigure(props.city.median_household_income)} median household income<br></br>
                                {formatIncomeHomeCompare(props.city.median_household_income, props.city.median_property_value)} home prices vs incomes
                            </p>
                            <br></br>
                            <HeartButton 
                                currentUser={props.currentUser} 
                                heartedCities={props.heartedCities} 
                                unheartClick={props.unheartClick} 
                                heartClick={props.heartClick} 
                                toggleAuthPopup={props.toggleAuthPopup} 
                                city={props.city}/>
                        </div>
                    </center>
            </div>
        </div>
    )
}
    
    


export default CityShow;