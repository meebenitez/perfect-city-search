import React from 'react';
import { Route, Link } from 'react-router-dom'
import HeartButton from './HeartButton'
import {formatPop, formatFigure, formatRegion} from './utils/CityFormat'
import {formatIncomeHomeCompare} from './utils/MathFunctions'
import Aux from './Aux'


const City = props => {
    
    return (
        <Aux>
            <div className="city-item">
                <div className="icon-container"><img className="img-city-icon" src={props.city.img_thumbnail} onError={(e)=>{e.target.src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/CheyenneWY_downtown.jpg/320px-CheyenneWY_downtown.jpg'}} /></div>
                    <div className="info-container">
                        <div className="city-name-container">
                            <Link to="#" onClick={props.showSingleCity}><h3>{props.city.name}, {props.city.short_state.toUpperCase()}</h3></Link>  
                            { (props.city.popularity >= 20) ? "⭐" : null }
                        </div>
                        <div className="stat-container"><span style={{fontWeight: "bold"}}>{formatRegion(props.city.region)}</span> {formatPop(props.city.population)} residents | 👥 {props.city.median_age} median age | 💵 {formatFigure(props.city.median_household_income)} median income </div>
                        <div className="stat-container"><span><img src={require('../../assets/images/house_icon.png')} className="stat-icon-sm"/>{formatFigure(props.city.median_property_value)} median home price</span> | {formatIncomeHomeCompare(props.city.median_household_income, props.city.median_property_value)} home prices vs incomes</div>
                    </div>
                    <div className="heart-container">
                        <HeartButton 
                            currentUser={props.currentUser} 
                            heartedCities={props.heartedCities} 
                            unheartClick={props.unheartClick} 
                            heartClick={props.heartClick} 
                            toggleAuthPopup={props.toggleAuthPopup} 
                            city={props.city}/>
                    </div>
            </div>
        </Aux>
    )
    
} 


export default City;