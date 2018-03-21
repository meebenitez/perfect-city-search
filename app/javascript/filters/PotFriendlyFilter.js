import React from 'react';

const PotFriendlyFilter = (props) => {
    return (
        <div className="filter-div">
            <label htmlFor="PotFriendlyFilter"><img src={require('../../assets/images/marijuana.png')} className="stat-icon-sm"/> Pot Friendly:</label>
            <br></br>
            <select value={props.value} defaultValue={props.filterHolder} id= "PotFriendlyFilter">
                <option value="">Deactivate</option>
            </select>
        </div>
    )
}

export default PotFriendlyFilter;


