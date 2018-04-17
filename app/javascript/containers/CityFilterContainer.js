import React from 'react';
import ActiveFilterList from '../filters/ActiveFilterList'
import InactiveFilterList from '../filters/InactiveFilterList'
import Aux from '../components/Aux'
import NameSearchFilter from '../filters/NameSearchFilter'


const CityFilterContainer = (props) => 

    <Aux>
        <div className="intro teal-bg"><h4 className="underline">Ready to find a hidden gem?</h4><br></br>Sort through our database of over 25,000 US cities with detailed <strong>demographic, housing, lifestyle, employment, and income data</strong> using the filters provided below. If you find a city you love, click the ♥ to save it.</div>
        <h2><img src={require('../../assets/images/filter.png')} className="stat-icon-lg"/>&nbsp;Filters</h2> {props.activeFilters.length > 0 ? <label onClick={() => props.clearAllFilters()}>clear filters</label> : null }
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
    </Aux>

export default CityFilterContainer;