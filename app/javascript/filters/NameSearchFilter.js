import React from 'react';

const NameSearchFilter = (props) => {

    function handleChange(e) {
        props.onFilterChange("NameSearchFilter",`[term]=${e.target.value}`,`[name]=${e.target.value}`)
      }

    return (
        <div>
            <input type="text" id="seachbox" className="search-box" onChange={(e)=>handleChange(e)}placeholder="Search Cities by Name..."/>
            <br></br>
        </div>
    )
}

export default NameSearchFilter;


