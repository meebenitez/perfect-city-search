import React from 'react';
import ActiveFilterList from '../filters/ActiveFilterList'
import InactiveFilterList from '../filters/InactiveFilterList'
import Aux from '../components/Aux'


const CityFilterContainer = (props) => 

    <Aux>
        <div className="on-style">
            <ActiveFilterList onFilterChange={props.onFilterChange} params={props.params} activeFilters={props.activeFilters} filterHolder={props.filterHolder} clearAllFilters={props.clearAllFilters}/>
        </div> 
        <br></br>
        <br></br>
        <div className="off-style">
            <InactiveFilterList onFilterChange={props.onFilterChange} params={props.params} activeFilters={props.activeFilters} inactiveFilters={props.inactiveFilters} filterHolder={props.filterHolder} unclick={props.unclick}/>
        </div>  
    </Aux>

export default CityFilterContainer;