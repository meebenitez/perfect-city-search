import React from 'react';
import Aux from '../components/Aux'
import FixedMapContainer from './FixedMapContainer'
import CityListContainer from './CityListContainer'



const SearchContainer = (props) => 

    <Aux>
            <div className="row zero-padding content">
                <div className="max-width-container">
                    <div className="search-container-small zero-padding">
                        <div className="col-xs-12 zero-padding">
                            <div className="small-map-margin affix white-background zero-padding">
                                <FixedMapContainer {...props} size={["100%", "35vh"]} />
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="small-list-margin">
                                <CityListContainer {...props} />
                            </div>
                        </div>
                    </div>
                    
                    <div className="search-container-large">
                        <div className="col-xs-6 zero-padding left-margin-top">
                            <div className="left-width affix">
                                <FixedMapContainer {...props} size={["94%", "84vh"]} />
                            </div>
                        </div>
                        <div className="col-xs-6 right-margin-top">
                            <CityListContainer {...props} />
                        </div>
                    </div>
                    
                
                </div>
            
            </div>
    </Aux>

export default SearchContainer;