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


const ActiveFilterList = (props) => {


    const componentListByString = {
        PopulationFilter: PopulationFilter,
        AgeFilter: AgeFilter,
        RegionFilter: RegionFilter,
        HomePriceFilter: HomePriceFilter,
        MedianIncomeFilter: MedianIncomeFilter,
    }

    const componentArray = props.activeFilters.concat().sort().map((Filter) => {return componentListByString[Filter]})

    const renderFilters = componentArray.map( (Filter) =>  
        <Filter onFilterChange={props.onFilterChange} key={Filter} params={props.params} isActive={1}/>
    );

    return (
    <div>
        {(renderFilters.length > 0) ? <div>{renderFilters}</div>  : null }
    </div>
    )
}

export default ActiveFilterList;