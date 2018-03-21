import React from 'react';

const LowCrimeFilter = (props) => {
    return (
        <div className="filter-div">
            <label htmlFor="LowCrimeFilter"><img src={require('../../assets/images/guard.png')} className="stat-icon-sm"/> Low Crime:</label>
            <br></br>
            <select value={props.value} defaultValue={props.filterHolder} id= "LowCrimeFilter">
                <option value="">Deactivate</option>
            </select>
        </div>
    )
}

export default LowCrimeFilter;


