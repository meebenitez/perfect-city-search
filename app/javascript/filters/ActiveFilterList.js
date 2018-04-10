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
        VoterDemoFilter: VoterDemoFilter,
        GoodSchoolsFilter: GoodSchoolsFilter,
        PotFriendlyFilter: PotFriendlyFilter,
        CollegeGradFilter: CollegeGradFilter,
        LowCrimeFilter: LowCrimeFilter

    }

    const componentArray = props.activeFilters.concat().sort().map((Filter) => {return componentListByString[Filter]})
    const emptyMessage = <div>You have no filters set. Select one below to get started.</div>

    const renderFilters = componentArray.map( (Filter) =>  
        <Filter onFilterChange={props.onFilterChange} key={Filter} params={props.params}/>
    );

    return (
    <div>
        <h3>ACTIVE FILTERS</h3>
        {(renderFilters.length > 0) ? <div>{renderFilters} <br></br><br></br><button onClick={() => props.clearAllFilters()}>clear filters</button></div>  : emptyMessage }
    </div>
    )
}

export default ActiveFilterList;