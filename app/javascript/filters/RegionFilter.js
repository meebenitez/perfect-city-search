import React from 'react';

const RegionFilter = (props) => {
    return (
        <div className="filter-div">
            <label htmlFor="RegionFilter"><img src={require('../../assets/images/region.png')} className="stat-icon-sm"/> Region:</label>
        </div>
    )
}

export default RegionFilter;



//<select value={props.value} defaultValue={props.filterHolder} id= "RegionFilter" onChange={(event) => props.onFilterChange(event)}>
//<option value="">Deactivate</option>
//<option value="[region]=pacific_coast">Pacific Coast</option>
//<option value="[region]=mountain">Mountain</option>
//<option value="[region]=southwest">Southwest</option>
//<option value="[region]=heartland">Heartland</option>
//<option value="[region]=midwest">Midwest</option>
//<option value="[region]=southeast">Southeast</option>
//<option value="[region]=appalachian_highlands">Appaliachia</option>
//<option value="[region]=mid_atlantic">Mid-Atlantic</option>
//<option value="[region]=new_england">New England</option>
//</select>


