import React from 'react';

const CollegeGradFilter = (props) => {
    return (
        <div className="filter-div">
            <label htmlFor="CollegeGradFilter"><img src={require('../../assets/images/graduate.png')} className="stat-icon-sm"/> College Graduates:</label>
            <br></br>
            <select value={props.value} defaultValue={props.filterHolder} id= "CollegeGradFilter">
                <option value="">Deactivate</option>
            </select>
        </div>
    )
}

export default CollegeGradFilter;


