import React from 'react';

const NameSearchFilter = (props) => {

    function handleChange(e) {
        debugger;
        props.onSearch(`[term]=${e.target.value}`)
      }

    return (
        <div>
            <label htmlFor="NameSearchFilter">Search by Name:</label>
            <input type="text" id="seachbox" className="search-box" onChange={(e)=>handleChange(e)}placeholder="Search Cities by Name..."/>
            <br></br>
        </div>
    )
}

export default NameSearchFilter;


