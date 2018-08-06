import React from 'react';
import PopulationFilter from './PopulationFilter'
import AgeFilter from './AgeFilter'
import RegionFilter from './RegionFilter'
import HomePriceFilter from './HomePriceFilter'
import MedianIncomeFilter from './MedianIncomeFilter'
import {checkDivClassGroup, findOne} from '../components/utils/filterFunctions'
import FilterPopup from './FilterPopup'
import DemographicsFilter from './DemographicsFilter'
import HousingStatsFilter from './HousingStatsFilter'
import EconomyFilter from './EconomyFilter'
import Aux from '../components/Aux'


    class MinimizedFilterList extends React.Component {
        constructor(props){
            super(props)
            this.state = {morePopup:false}
    
            this.handleClick = this.handleClick.bind(this)
            this.handleChange = this.handleChange.bind(this)
            this.handleClear = this.handleClear.bind(this)
            this.handleOuterClick = this.handleOuterClick.bind(this)
    
            this.setMorePopupRef = this.setMorePopupRef.bind(this);
            this.setMoreButtonRef = this.setMoreButtonRef.bind(this);
        }
    
        
    
        componentDidMount() {
            document.addEventListener('mousedown', this.handleOuterClick);
            
        }
        
        componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleOuterClick);
        }
    
        setMorePopupRef(node) {
        this.morePopupRef = node;
        }
        
        setMoreButtonRef(node) {
        this.moreButtonRef = node;
        }
    
        setMoreButtonRef(node) {
            this.moreButtonRef = node;
        }
    
    
        handleOuterClick(event) {
        if (this.morePopupRef && !this.morePopupRef.contains(event.target) && !this.moreButtonRef.contains(event.target)) {
            this.setState({
                morePopup: false
            })
        }
        }
    
      
    
        handleClear() {
            this.props.onFilterChange("MoreFilter", "")
        }
    
        handleClick(event){
                this.setState({
                    morePopup: !this.state.morePopup
                })
        }
    
    
        handleChange(event){
            this.props.onFilterChange("MoreFilter", `[more]=${event.target.value}`, `more=${event.target.value}`)
        }
    
        
    
        render(){ 
            const checkActive = (filterName) => {
                if (this.props.activeFilters.includes(filterName)) {
                    return true
                } else {
                    return false
                }
            }
    
            const filterList = [
                AgeFilter
            ]
    
            const filterListStrings = [
                "AgeFilter"
            ]
            const renderFilters = filterList.map( (Filter) => {
                return <Filter activeFilters={this.props.activeFilters} onFilterChange={this.props.onFilterChange} key={Filter.name} filterHolder={this.props.filterHolder} params={this.props.params} isActive={checkActive(Filter.name)} currentUser={this.props.currentUser}/>
            });
        
            return (
                <Aux>
                    <div className="filter-popup-parent">
                        <div className={checkDivClassGroup(this.props.activeFilters, filterListStrings, this.state.morePopup)} data-tooltip="test test yoyo" onClick={this.handleClick} ref={this.setMoreButtonRef}>
                            <span>&nbsp;&nbsp;Filters</span>&nbsp;&nbsp;{this.state.morePopup ? <img src={require('../../assets/images/greyuparrow.png')} className="filter-icon-md"/> : <img src={require('../../assets/images/greydownarrow.png')} className="filter-icon-md"/>}<label htmlFor="More"></label>
                        </div>
                        {this.state.morePopup ?
                        <span> 
                            <div className="filter-popup-div demographics-div" ref={this.setMorePopupRef}>
                                <span style={{fontWeight: "bold"}}>Coming Soon!</span>
                                <br></br>
                                Climate Filter
                                <br></br>
                                Transportation Filter
                                <br></br>
                                Crime and Safety Filter
                                <br></br>
                                Education Filter
    
                            </div>
                        </span> : null }                       
                    </div>
                </Aux>
                )
            }
    }
    
    export default MinimizedFilterList;