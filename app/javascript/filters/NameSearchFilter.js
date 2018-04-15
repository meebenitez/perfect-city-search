import React from 'react';

const NameSearchFilter = (props) => {

    function handleChange(e) {
        props.onFilterChange("NameSearchFilter",`[term]=${e.target.value}`,`[name]=${e.target.value}`)
      }

    function handleClear() {
        debugger;
    }

    return (
        <div>
            <input type="search" id="seachbox" name="focus" required className="search-box" onChange={(e)=>handleChange(e)}placeholder="Search by city name..."/>
            
            <br></br>
        </div>
    )
}

export default NameSearchFilter;

//<button className="close-icon" onClick={() => handleClear()}></button>
