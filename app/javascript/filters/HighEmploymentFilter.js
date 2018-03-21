import React from 'react';

const HighEmploymentFilter = (props) => {
    return (
        <div className="filter-div">
            <label htmlFor="HighEmploymentFilter"><img src={require('../../assets/images/briefcase.png')} className="stat-icon-sm"/> High Employment:</label>
            <br></br>
            <select value={props.value} defaultValue={props.filterHolder} id= "HighEmploymentFilter">
                <option value="">Deactivate</option>
            </select>
        </div>
    )
}

export default HighEmploymentFilter;


