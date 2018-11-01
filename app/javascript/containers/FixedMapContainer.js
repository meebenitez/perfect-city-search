import React from 'react';
import Aux from '../components/Aux'
import Pagination from '../components/Pagination'
import MapContainer from './MapContainer'


const FixedMapContainer = (props) => 
    <Aux>
        <div className={props.size[0] === "100vw" ? "col-xs-12 row affix zero-padding" : "col-xs-12 col-sm-6 row"}>
            <div className={props.size[0] === "100vw" ? "col-xs-12 zero-padding affix white-background" : "col-xs-6 zero-padding affix white-background"}>
            <div className="map-container">
                <MapContainer {...props} />
            </div>
            </div>
        </div>
    </Aux>

export default FixedMapContainer;


//<Pagination count={props.cities.length} totalCount={props.totalCount} totalPages={props.totalPages} startPage={props.startPage} pageChange={props.pageChange} page={props.page} currentRoute={props.currentRoute} perPage={props.perPage}/>




