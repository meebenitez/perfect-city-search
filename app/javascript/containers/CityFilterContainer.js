import React from 'react';
import ActiveFilterList from '../filters/ActiveFilterList'
import InactiveFilterList from '../filters/InactiveFilterList'
import Aux from '../components/Aux'
import NameSearchFilter from '../filters/NameSearchFilter'
import MapContainer from './MapContainer'


const CityFilterContainer = (props) => 

    <Aux>
        <div className="fixed">
            <h2><img src={require('../../assets/images/filter.png')} className="stat-icon-lg"/>&nbsp;Filters</h2> {props.activeFilters.length > 0 ? <label onClick={() => props.clearAllFilters()}>clear filters</label> : null }
        
            <div>
                <ActiveFilterList 
                    onFilterChange={props.onFilterChange} 
                    params={props.params} 
                    activeFilters={props.activeFilters} 
                    filterHolder={props.filterHolder}
                    clearAllFilters={props.clearAllFilters}/>
            </div> 
            <div>
                <NameSearchFilter
                    onFilterChange={props.onFilterChange} />
            </div>
            <br></br>
            <br></br>
            <div>
                <InactiveFilterList 
                    onFilterChange={props.onFilterChange} 
                    params={props.params} 
                    activeFilters={props.activeFilters} 
                    inactiveFilters={props.inactiveFilters} 
                    filterHolder={props.filterHolder} 
                    toggleCheck={props.toggleCheck}
                    unclick={props.unclick}/>
            </div>
            <div><MapContainer {...props} /></div>  
        </div>
    </Aux>

export default CityFilterContainer;