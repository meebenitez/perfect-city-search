import React from 'react';
import Aux from '../components/Aux'
import Pagination from '../components/Pagination'
import MapContainer from './MapContainer'


const FixedMapContainer = (props) => 

    <Aux>
      
            

                <div className="col-xs-6 row">
                    
                    <div className="col-xs-12 zero-padding">
                    <div className="map-container">
                        <MapContainer {...props} />
                        <Pagination count={props.cities.length} totalCount={props.totalCount} totalPages={props.totalPages} startPage={props.startPage} pageChange={props.pageChange} page={props.page} currentRoute={props.currentRoute} perPage={props.perPage}/>
                    </div>
                    </div>
                </div>
            
    </Aux>

export default FixedMapContainer;






