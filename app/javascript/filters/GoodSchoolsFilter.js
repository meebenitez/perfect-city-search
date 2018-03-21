import React from 'react';

const GoodSchoolsFilter = (props) => {
    return (
        <div className="filter-div">
            <label htmlFor="GoodSchoolsFilter"><img src={require('../../assets/images/apple.png')} className="stat-icon-sm"/> Good Schools:</label>
            <br></br>
            <select value={props.value} defaultValue={props.filterHolder} id= "GoodSchoolsFilter">
                <option value="">Deactivate</option>
            </select>
        </div>
    )
}

export default GoodSchoolsFilter;


