import React from 'react';

const VoterDemoFilter = (props) => {
    return (
        <div className="filter-div">
            <label htmlFor="VoterDemoFilter"><img src={require('../../assets/images/vote.png')} className="stat-icon-sm"/> Voter Demographics:</label>
            <br></br>
            <select value={props.value} defaultValue={props.filterHolder} id= "VoterDemoFilter">
                <option value="">Deactivate</option>
            </select>
        </div>
    )
}

export default VoterDemoFilter;


