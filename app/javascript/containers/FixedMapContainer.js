import React from 'react';
import Aux from '../components/Aux'
import MapContainer from './MapContainer'


const FixedMapContainer = (props) => 

    <Aux>
      
            

                <div className="col-xs-6 row">
                    <div className="intro-container zero-padding" style={{border: '5px'}}>
                        <div className="col-xs-9">
                            <span className="bold">Welcome, Happy Burg Hunter!</span>
                            <br></br>Filter through our database of 26,931 US towns and cities to find hidden gems that perfectly match your priorities and lifestyle.  We source the majority of our data from the 2016 US Census ACS. 
                            <br></br>
                            <br></br>
                            Be sure to follow us for news and updates!&nbsp;
                            <img src={require('../../assets/images/facebook.png')} className="img-social"/>&nbsp;<img src={require('../../assets/images/twitter.png')} className="img-social"/>
                        </div>
                        <div className="col-xs-3">
                            <div className="img-gem"> </div>
                        </div>
                    </div>
                    <div className="col-xs-12 zero-padding">
                    <div className="map-container"><MapContainer {...props} /></div>
                    </div>
                </div>
            
    </Aux>

export default FixedMapContainer;

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