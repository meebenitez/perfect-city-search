import React from 'react';
import ActiveFilterList from '../filters/ActiveFilterList'
import InactiveFilterList from '../filters/InactiveFilterList'
import Aux from '../components/Aux'


const CityFilterContainer = (props) => 

    <Aux>
        <h2>Filters</h2>
        <br></br>
        {props.activeFilters.length > 0 ? <button onClick={() => props.clearAllFilters()}>clear filters</button> : null }
        <div>
            <ActiveFilterList 
                onFilterChange={props.onFilterChange} 
                params={props.params} 
                activeFilters={props.activeFilters} 
                filterHolder={props.filterHolder}
                clearAllFilters={props.clearAllFilters}/>
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
    </Aux>

export default CityFilterContainer;