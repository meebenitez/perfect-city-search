import React from 'react';
import HeartButton from './HeartButton'
import {formatPop, formatFigure, formatRegion} from './utils/CityFormat'
import {formatIncomeHomeCompare} from './utils/MathFunctions'



const CityShow = (props) => {


    //debugger;
    //return (<div>Test</div>)
    if (props.city !== null) {
        return (
            <div className="city-popup">
                <div className='city-popup-inner'>
                    <div className="row">

                        <div className="col-xs-12 row zero-padding">
                            <div className="city-show-border-container row">
                                <div className="col-xs-5 city-img-container">
                                    <img className="img-city-icon-lg" src={props.city.img} onError={(e)=>{e.target.src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/CheyenneWY_downtown.jpg/1024px-CheyenneWY_downtown.jpg'}} />
                                    
                                </div>
                                <div className="cols-xs-7 city-stat-container">
                                    <div className="top-right2" onClick={props.closePopup}><img src={require('../../assets/images/xout2.png')} className="filter-icon-sm"/> </div>
                                    <h1>{props.city.name}, {props.city.long_state}</h1>
                                    <br></br>
                                    <span style={{fontWeight: "bold", fontSize: "17px"}}>{formatRegion(props.city.region)}</span>
                                </div>
                            </div>
                        
                        
                        
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
                        </div>
                    </div>        
                </div>
            </div>
        )
    } else {
        return (
            <div>Still loading</div>
        )
    }
    
}
    


export default CityShow;