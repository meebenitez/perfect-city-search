import React from 'react';
import ActiveFilterList from '../filters/ActiveFilterList'
import InactiveFilterList from '../filters/InactiveFilterList'
import Aux from '../components/Aux'
import NameSearchFilter from '../filters/NameSearchFilter'
import MapContainer from './MapContainer'


const CityFilterContainer = (props) => 

    <Aux>
        <div >
            
            <div>
                <div className="intro-container" >
                    <div className="intro-left">
                        <span className="bold">Welcome, City Sleuths!</span><br></br>Filter through our database of 26,931 towns and cities to find hidden gems that perfectly match your priorities and lifestyle.
                        <div className="intro-follow">Follow us for news and updates!&nbsp;<img src={require('../../assets/images/facebook.png')} className="img-social"/>&nbsp;<img src={require('../../assets/images/twitter.png')} className="img-social"/></div>
                    </div>
                    <div className="intro-right">
                        <div className="img-gem"> </div>
                    </div>
                </div>
                <div className="map-container"><MapContainer {...props} /></div>
            </div>  
        </div>
    </Aux>

export default CityFilterContainer;

/*<h2><img src={require('../../assets/images/filter.png')} className="stat-icon-lg"/>&nbsp;Filters</h2> {props.activeFilters.length > 0 ? <label onClick={() => props.clearAllFilters()}>clear filters</label> : null }
        
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
            <button onClick={() => props.changeZoom()}>ChangeZoomTest</button>
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
            </div>*/