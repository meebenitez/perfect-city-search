import React from 'react';
import PopulationFilter from './PopulationFilter'
import PopularFilter from './PopularFilter'
import HeartedFilter from './HeartedFilter'
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
import { Link } from 'react-router-dom'


const FilterPopup = (props) => {


// Creating two different lists so I can later offer registered users special filters
    const filterList = props.currentUser ? [
        NameSearchFilter,
        PopularFilter,
        HeartedFilter,
        RegionFilter,
        PopulationFilter,
        MedianIncomeFilter,
        AgeFilter,
        HomePriceFilter,
    ] : [
        NameSearchFilter,
        PopularFilter,
        RegionFilter,
        PopulationFilter,
        MedianIncomeFilter,
        AgeFilter,
        HomePriceFilter,
    ]

    const checkActive = (filterName) => {
        if (props.activeFilters.includes(filterName)) {
            return true
        } else {
            return false
        }
    }


    const renderFilters = filterList.map( (Filter) => {
        return <Filter activeFilters={props.activeFilters} onFilterChange={props.onFilterChange} key={Filter.name} filterHolder={props.filterHolder} params={props.params} isActive={checkActive(Filter.name)} searchTerm={props.searchTerm} currentUser={props.currentUser} toggleAuthPopup={props.toggleAuthPopup}/>
    });


    return (
    <div className="extended-filters-popup">
        <div className="extended-filters-popup-inner">
            <div className="top-right3"><Link to={`${props.hashString}`} onClick={props.toggleExtendedFiltersPopup}>x close</Link></div>
            <div>
                <h4>Add Filters</h4>
            </div>
            {renderFilters}
        </div>
    </div>
    )
}


export default FilterPopup;