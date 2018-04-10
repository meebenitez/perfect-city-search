import React from 'react';
import Aux from '../components/Aux'
import CityFilterContainer from './CityFilterContainer'
import CityListContainer from './CityListContainer'


const SearchContainer = (props) => 

    <Aux>
        <div className="left-col">
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
                showSingleCity = {props.showSingleCity} />
            </div>
        <div className="right-col">
            <CityFilterContainer 
                onFilterChange={props.onFilterChange} 
                params={props.params} 
                activeFilters={props.activeFilters} 
                inactiveFilters={props.inactiveFilters} 
                filterHolder={props.filterHolder}
                clearAllFilters={props.clearAllFilters}
                toggleCheck={props.toggleCheck}
                unclick={props.unclick} />
        </div>
    </Aux>

export default SearchContainer;