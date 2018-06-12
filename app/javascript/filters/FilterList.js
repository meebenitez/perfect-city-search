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
        PopulationFilter,
        AgeFilter,
        RegionFilter,
        HomePriceFilter,
        MedianIncomeFilter,
        NameSearchFilter
    ]

    const componentArray = props.inactiveFilters.concat().sort().map((Filter) => {
        return componentListByString[Filter]
    })


    const renderFilters = componentListByString.map( (Filter) =>
        <Filter onFilterChange={props.onFilterChange} key={Filter} filterHolder={props.filterHolder}/>
    );


    return (
    <div>
        <br></br>
        {renderFilters}
    </div>
    )
}


export default FilterList;