import React from 'react';
import PopulationFilter from './PopulationFilter'
import PopularFilter from './PopularFilter'
import HeartedFilter from './HeartedFilter'
import AgeFilter from './AgeFilter'
import RegionFilter from './RegionFilter'
import HomePriceFilter from './HomePriceFilter'
import MedianIncomeFilter from './MedianIncomeFilter'
import NameSearchFilter from './NameSearchFilter'
import FilterPopup from './FilterPopup'
import DemographicsFilter from './DemographicsFilter'
import HousingStatsFilter from './HousingStatsFilter'
import EconomyFilter from './EconomyFilter'
import MoreFilter from './MoreFilter'
import MinimizedFilterList from './MinimizedFilterList'
import MediaQuery from 'react-responsive'
import Aux from '../components/Aux'

const FilterList = (props) => {


// Creating two different lists so I can later offer registered users special filters
    const filterList = props.currentUser ? [
        
        PopularFilter,
        HeartedFilter,
        RegionFilter,
        DemographicsFilter,
        HousingStatsFilter,
        EconomyFilter,
        NameSearchFilter,
        MoreFilter,
        //MedianIncomeFilter,
        //AgeFilter,
        //HomePriceFilter,
    ] : [
        PopularFilter,
        RegionFilter,
        DemographicsFilter,
        HousingStatsFilter,
        EconomyFilter,
        NameSearchFilter,
        MoreFilter,
        //MedianIncomeFilter,
        //AgeFilter,
        //HomePriceFilter,
    ]

    const filterListMinimized = props.currentUser ? [
        PopularFilter,
        HeartedFilter,
        NameSearchFilter,
        MinimizedFilterList,
        //MedianIncomeFilter,
        //AgeFilter,
        //HomePriceFilter,
    ] : [
        PopularFilter,
        NameSearchFilter,
        MinimizedFilterList,
        //MedianIncomeFilter,
        //AgeFilter,
        //HomePriceFilter,
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

    const renderFiltersMin = filterListMinimized.map( (Filter) => {
        return <Filter activeFilters={props.activeFilters} onFilterChange={props.onFilterChange} key={Filter.name} filterHolder={props.filterHolder} params={props.params} isActive={checkActive(Filter.name)} searchTerm={props.searchTerm} currentUser={props.currentUser} toggleAuthPopup={props.toggleAuthPopup}/>
    });


    return (
        <Aux>
            
                <div className="filter-container">
                    {renderFilters} 
                </div>
        </Aux>
            
    )
}


export default FilterList;

// .. <span onClick={props.toggleExtendedFiltersPopup}>toggle filters</span>