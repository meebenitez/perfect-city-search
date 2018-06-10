import React from 'react';
import Aux from '../components/Aux'
import CityFilterContainer from './CityFilterContainer'
import CityListContainer from './CityListContainer'


const SearchContainer = (props) => 

    <Aux>
        <div className="col-md-12 left-margin-top">
        <CityFilterContainer 
                onFilterChange={props.onFilterChange} 
                params={props.params} 
                activeFilters={props.activeFilters} 
                inactiveFilters={props.inactiveFilters} 
                filterHolder={props.filterHolder}
                clearAllFilters={props.clearAllFilters}
                unclick={props.unclick}
                onSearch={props.onSearch}
                searchTerm={props.searchTerm}
                searchCities={props.searchCities}
                googleApiKey = {props.googleApiKey}
                cities={props.cities}
                changeZoom = {props.changeZoom}
                mapZoom = {props.mapZoom}
                mapCenter = {props.mapCenter}
                nameHover = {props.nameHover}
                highlightedCity = {props.highlightedCity} />
        </div>
        <div className="col-md-12 right-margin-top">
        <CityListContainer 
                cities={props.cities} 
                heartedCities={props.heartedCities} 
                heartClick={props.heartClick } 
                unheartClick={props.unheartClick } 
                page={props.page} 
                pages={props.pages}  
                handleChangePage={props.handleChangePage}
                currentUser = {props.currentUser}
                totalCount = {props.totalCount}
                totalPages = {props.totalPages}
                startPage = {props.startPage}
                pageChange = {props.pageChange}
                perPage = {props.perPage}
                toggleAuthPopup = {props.toggleAuthPopup}
                toggleCityPopup = {props.toggleCityPopup}
                showCityPopup = {props.showCityPopup}
                currentRoute = {props.currentRoute}
                showSingleCity = {props.showSingleCity}
                nameHover = {props.nameHover}
                highlightedCity = {props.highlightedCity} />
        </div>
    </Aux>

export default SearchContainer;