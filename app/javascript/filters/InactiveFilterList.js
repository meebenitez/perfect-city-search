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


const InactiveFilterList = (props) => {

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
        LowCrimeFilter: LowCrimeFilter,
        HighEmploymentFilter: HighEmploymentFilter
    }

    const componentArray = props.inactiveFilters.concat().sort().map((Filter) => {return componentListByString[Filter]})

    const renderFilters = componentArray.map( (Filter) =>
        <Filter onFilterChange={props.onFilterChange} key={Filter} filterHolder={props.filterHolder} toggleCheck={props.toggleCheck}/>
    );


    return (
    <div>
        {renderFilters.length > 0 ? <span style={{fontWeight: 'bold'}}>INACTIVE FILTERS</span> : null}
        <br></br>
        {renderFilters}
    </div>
    )
}


export default InactiveFilterList;