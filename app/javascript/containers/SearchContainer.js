import React from 'react';
import Aux from '../components/Aux'
import FixedMapContainer from './FixedMapContainer'
import CityListContainer from './CityListContainer'
import MediaQuery from 'react-responsive';
import FilterContainer from './FilterContainer'



const SearchContainer = (props) => 

    <Aux>
            <div className="row zero-padding content">
                <div className="col-xs-12 zero-padding filter-margin-top fixed white-background bottom-line">
                <div className="max-width-container">
                    <FilterContainer {...props}/>
                </div>
                </div>
                <div className="max-width-container">
                    
                <MediaQuery minWidth={768}>
                    <div className="col-xs-6 zero-padding left-margin-top">
                        <div className="left-width affix">
                            <FixedMapContainer 
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
                    </div>
                    <div className="col-xs-6 zero-padding right-margin-top">
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
                </MediaQuery>
                <MediaQuery maxWidth={768}>
                <div className="col-xs-12 zero-padding left-margin-top">
                        <FixedMapContainer 
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
                    <div className="col-xs-12 zero-padding">
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
                </MediaQuery>

                </div>
            
            </div>
    </Aux>

export default SearchContainer;