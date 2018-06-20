import React from 'react';
import PopulationFilter from './PopulationFilter'
import AgeFilter from './AgeFilter'
import RegionFilter from './RegionFilter'
import HomePriceFilter from './HomePriceFilter'
import MedianIncomeFilter from './MedianIncomeFilter'
import VoterDemoFilter from './VoterDemoFilter'
import GoodSchoolsFilter from './GoodSchoolsFilter'
import PotFriendlyFilter from './PotFriendlyFilter'
import CollegeGradFilter from './CollegeGradFilter'
import LowCrimeFilter from './LowCrimeFilter'
import HighEmploymentFilter from './HighEmploymentFilter'
import NameSearchFilter from './NameSearchFilter'


const FilterList = (props) => {

    const componentListByString = [
        NameSearchFilter,
        RegionFilter,
        PopulationFilter,
        MedianIncomeFilter,
        AgeFilter
        //HomePriceFilter,
    ]

    const checkActive = (filterName) => {
        if (props.activeFilters.includes(filterName)) {
            return true
        } else {
            return false
        }
    }




    const renderFilters = componentListByString.map( (Filter) => {
        return <Filter onFilterChange={props.onFilterChange} key={Filter.name} filterHolder={props.filterHolder} params={props.params} isActive={checkActive(Filter.name)} searchTerm={props.searchTerm}/>
    });


    return (
    <div className="filter-container">
        <br></br>
        {renderFilters}
    </div>
    )
}


export default FilterList;