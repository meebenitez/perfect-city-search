import React from 'react';

const LowCrimeFilter = (props) => {
    return (
        <div className="filter-div">
            <label htmlFor="LowCrimeFilter"><img src={require('../../assets/images/guard.png')} className="stat-icon-sm"/> Low Crime:</label>
            <br></br>
        </div>
    )
}

export default LowCrimeFilter;


