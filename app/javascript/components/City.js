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
        border: '1px solid #929494'
    };
       

    const cityItem = () => {
        return <div className="row inner">
                    <div style={bgStyle}>
                    
                        <div className="dead-center">
                            <Link className="citynamelink" to={`#city=${props.city.name}_${props.city.short_state}_${props.city.id}`} onClick= {() => props.showSingleCity()} onMouseEnter={() => props.nameHover(props.city)} >
                                <h3>&nbsp;&nbsp;{props.city.name}, {props.city.short_state.toUpperCase()}&nbsp;&nbsp;
                                { (props.city.popularity >= 25) ? <span className="star">&nbsp;★&nbsp;&nbsp;</span> : null }</h3>
                            </Link>
                        </div>
                    </div>

       
            <div className="top-right-heart">
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
            <MediaQuery minWidth={815}>
                <div className="list-group-item col-xs-4 item-spacing noborder">
                    {cityItem()}
                </div>
            </MediaQuery>
            <MediaQuery minWidth={365} maxWidth={815}>
                <div className="list-group-item col-xs-6 item-spacing noborder">
                        {cityItem()}
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={365}>
                <div className="list-group-item col-xs-12 item-spacing noborder zero-padding">
                    {cityItem()}
                </div>
            </MediaQuery>

        </Aux>
    )
    
} 


export default City;

