import React from 'react';

const PopulationFilter = (props) => {
    return (
        <div className="filter-div">
            <label htmlFor="PopulationFilter"><img src={require('../../assets/images/skyline.png')} className="stat-icon-sm"/> Population:</label>
            <br></br>
            <select value={props.value} defaultValue={props.filterHolder} id= "PopulationFilter" onChange={(event) => props.onFilterChange(event)}>
                    <option value="">Deactivate</option>
                    <option value="[pop_from]=400000&[pop_to]=10000000">Big City (400K+)</option>
                    <option value="[pop_from]=75000&[pop_to]=400000">Medium City (50K - 400K)</option>
                    <option value="[pop_from]=5000&[pop_to]=50000">Small City (5K - 50K)</option>
                    <option value="[pop_from]=50&[pop_to]=5000">Small Town (50 - 5K)</option>
            </select>
        </div>
    )
}

export default PopulationFilter;