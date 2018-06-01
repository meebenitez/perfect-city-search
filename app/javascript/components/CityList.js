import React from 'react';
import City from './City';
import Pagination from './Pagination';

const CityList = (props) => {
    let num = 1

    const welcomeMessage = () => {
        if (props.currentRoute === "[popular]=mosthearted"){
            return <h3>⭐  Most Popular Cities ⭐ </h3>
        } else if (props.currentRoute === "[hearted]=yourhearted"){
            return <span><span style={{color: 'red'}}>♥</span><h3>Your Hearted Cities</h3><span style={{color: 'red'}}>♥</span></span>
        } else {
            return null
        }
    }
    const renderCities = props.cities.map( (city) =>
        <City
            city={city}
            listID = {num++}
            key={city.id}
            heartedCities = {props.heartedCities}
            heartClick={props.heartClick}
            unheartClick={props.unheartClick}
            currentUser = {props.currentUser}
            toggleAuthPopup = {props.toggleAuthPopup}
            toggleCityPopup = {props.toggleCityPopup}
            showCityPopup = {props.showCityPopup}
            showSingleCity= {() => props.showSingleCity( city )}
            />
            
    );


    return (
        <div>
            {welcomeMessage()}
            <Pagination count={props.cities.length} totalCount={props.totalCount} totalPages={props.totalPages} startPage={props.startPage} pageChange={props.pageChange} page={props.page} currentRoute={props.currentRoute} perPage={props.perPage}/>
            {renderCities}              
        </div>
    )
}
    
    

export default CityList;