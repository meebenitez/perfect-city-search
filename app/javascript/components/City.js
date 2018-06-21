import React from 'react';
import { Route, Link } from 'react-router-dom'
import HeartButton from './HeartButton'
import {formatPop, formatFigure, formatRegion, resizeThumb} from './utils/CityFormat'
import {formatIncomeHomeCompare} from './utils/MathFunctions'
import Aux from './Aux'
import MediaQuery from 'react-responsive';



const City = props => {

    //<img className="img-city-icon" src={resizeThumb(props.city.img_thumb)} onError={(e)=>{e.target.src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/CheyenneWY_downtown.jpg/320px-CheyenneWY_downtown.jpg'}} />

    const bgStyle = {  
        width: '100%',
        height: '150px',
        backgroundImage: 'url(' + resizeThumb(props.city.img_thumb) + ')',
        backgroundSize:     'cover',                      /* <------ */
        backgroundRepeat:   'no-repeat',
        backgroundPosition: 'center center', 
        backgroundColor: 'rgba(236, 234, 234, 0.25)',
        WebkitTransition: 'all', // note the capital 'W' here
        msTransition: 'all', // 'ms' is the only lowercase vendor prefix
        borderRadius: '10px',
        border: '1px solid rgba(206, 205, 205, 0.10)'
    };
       

    const cityItem = () => {
        return <div className="row inner">
                    <div style={bgStyle}>
                    
                        <div className="dead-center">
                            <Link className="citynamelink" to="#" onClick= {() => props.showSingleCity()} onMouseEnter={() => props.nameHover(props.city)} >
                                <h3>&nbsp;&nbsp;{props.city.name}, {props.city.short_state.toUpperCase()}&nbsp;&nbsp;
                                { (props.city.popularity >= 25) ? <span className="star">★&nbsp;&nbsp;</span> : null }</h3>
                            </Link>
                        </div>
                    </div>

       
            <div className="bottom-right-city-name">
                <HeartButton 
                    currentUser={props.currentUser} 
                    heartedCities={props.heartedCities} 
                    unheartClick={props.unheartClick} 
                    heartClick={props.heartClick} 
                    toggleAuthPopup={props.toggleAuthPopup} 
                    city={props.city}/>
            </div>
    </div>

        
    }


    //props.showSingleCity
    return (
        <Aux>
            <MediaQuery minWidth={1200}>
                <div className="list-group-item col-xs-4 noborder">
                    {cityItem()}
                </div>
            </MediaQuery>
            <MediaQuery minWidth={768} maxWidth={1200}>
                <div className="list-group-item col-xs-2 noborder zero-padding">
                        {cityItem()}
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={768}>
                <div className="list-group-item col-xs-4 noborder">
                    {cityItem()}
                </div>
            </MediaQuery>

        </Aux>
    )
    
} 


export default City;


/*
<div className="info-container">
                        <div className="city-name-container">
                            <Link to="#" onClick= {() => props.showSingleCity()} onMouseEnter={() => props.nameHover(props.city)} ><h3>{props.listID}. {props.city.name}, {props.city.short_state.toUpperCase()}</h3></Link>  
                            { (props.city.popularity >= 20) ? <img src={require('../../assets/images/star.png')} className="stat-icon-lg"/> : null }
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
                    </div>*/