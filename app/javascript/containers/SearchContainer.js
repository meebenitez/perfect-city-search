import React from 'react';
import Aux from '../components/Aux'
import FixedMapContainer from './FixedMapContainer'
import CityListContainer from './CityListContainer'
import MediaQuery from 'react-responsive';



const SearchContainer = (props) => 

    <Aux>
            <div className="row zero-padding content">
                <div className="max-width-container">
                    
                <MediaQuery minWidth={768}>
                    <div className="col-xs-6 zero-padding left-margin-top">
                        <div className="left-width affix">
                            <FixedMapContainer {...props} />
                        </div>
                    </div>
                    <div className="col-xs-6 right-margin-top">
                        <CityListContainer {...props} />
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={768}>
                <div className="col-xs-12 zero-padding left-margin-top">
                        <FixedMapContainer {...props} />
                    </div>
                    <div className="col-xs-12 zero-padding">
                        <CityListContainer {...props} />
                    </div>
                </MediaQuery>

                </div>
            
            </div>
    </Aux>

export default SearchContainer;