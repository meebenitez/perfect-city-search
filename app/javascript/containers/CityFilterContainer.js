import React from 'react';
import ActiveFilterList from '../filters/ActiveFilterList'
import InactiveFilterList from '../filters/InactiveFilterList'
import Aux from '../components/Aux'
import NameSearchFilter from '../filters/NameSearchFilter'


const CityFilterContainer = (props) => 

    <Aux>
        <h2>Filters</h2><span>&nbsp;&nbsp;(click a filter button to activate it)</span>  {props.activeFilters.length > 0 ? <label onClick={() => props.clearAllFilters()}>clear filters</label> : null }
        <br></br><br></br>
        <br></br>
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