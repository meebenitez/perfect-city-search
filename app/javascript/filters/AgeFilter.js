import React from 'react';
import {filterHolderFinder} from '../components/utils/filterFunctions'

const AgeFilter = (props) => {
    return (
        <div className="filter-div">
            <label htmlFor="AgeFilter">👥 Median Age:</label>
        </div>
    )
}

export default AgeFilter;

         //   <select value={props.value} defaultValue={filterHolderFinder("AgeFilter", props.params, props.activeFilters)} id= "AgeFilter" onChange={(event) => props.onFilterChange(event)}>
         //           <option value="">Deactivate</option>
         //           <option value="[age_from]=20&[age_to]=36">Millenial</option>
         //           <option value="[age_from]=36&[age_to]=52">Gen X</option>
         //           <option value="[age_from]=52&[age_to]=71">Boomer</option>
         //           <option value="[age_from]=71&[age_to]=150">Silent</option>
         //   </select>