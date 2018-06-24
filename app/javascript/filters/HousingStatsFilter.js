
import React from 'react';
import Aux from '../components/Aux'
import HomePriceFilter from './HomePriceFilter'
import RentOwnFilter from './RentOwnFilter'
import {checkDivClassGroup, findOne} from '../components/utils/filterFunctions'


class HousingStatsFilter extends React.Component {
    constructor(props){
        super(props)
        this.state = {housingStatsPopup:false}

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleOuterClick = this.handleOuterClick.bind(this)

        this.setHousingStatsPopupRef = this.setHousingStatsPopupRef.bind(this);
        this.setHousingStatsButtonRef = this.setHousingStatsButtonRef.bind(this);
    }

    

    componentDidMount() {
        document.addEventListener('mousedown', this.handleOuterClick);
        
    }
    
    componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOuterClick);
    }

    setHousingStatsPopupRef(node) {
    this.housingStatsPopupRef = node;
    }
    
    setHousingStatsButtonRef(node) {
    this.housingStatsButtonRef = node;
    }

    setHousingStatsButtonRef(node) {
        this.housingStatsButtonRef = node;
    }


    handleOuterClick(event) {
    if (this.housingStatsPopupRef && !this.housingStatsPopupRef.contains(event.target) && !this.housingStatsButtonRef.contains(event.target)) {
        this.setState({
            housingStatsPopup: false
        })
    }
    }

  

    handleClear() {
        this.props.onFilterChange("HousingStatsFilter", "")
    }

    handleClick(event){
            this.setState({
                housingStatsPopup: !this.state.housingStatsPopup
            })
    }


    handleChange(event){
        this.props.onFilterChange("HousingStatsFilter", `[housingStats]=${event.target.value}`, `housingStats=${event.target.value}`)
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
            HomePriceFilter,
            RentOwnFilter
        ]

        const filterListStrings = [
            "HomePriceFilter",
            "RentOwnFilter"
        ]
        const renderFilters = filterList.map( (Filter) => {
            return <Filter activeFilters={this.props.activeFilters} onFilterChange={this.props.onFilterChange} key={Filter.name} filterHolder={this.props.filterHolder} params={this.props.params} isActive={checkActive(Filter.name)} currentUser={this.props.currentUser}/>
        });
    
        return (
            <Aux>
                <div className="filter-popup-parent">
                    <div className={checkDivClassGroup(this.props.activeFilters, filterListStrings, this.state.housingStatsPopup)} data-tooltip="test test yoyo" onClick={this.handleClick} ref={this.setHousingStatsButtonRef}>
                        {findOne(filterListStrings, this.props.activeFilters) ? 
                            <img src={require('../../assets/images/bluehouse2.png')} className="filter-icon"/> 
                            : <img src={require('../../assets/images/greyhouse2.png')} className="filter-icon"/>}
                        <span>&nbsp;&nbsp;Housing</span>&nbsp;&nbsp;<img src={require('../../assets/images/greydownarrow.png')} className="filter-icon-md"/><label htmlFor="HousingStats"></label>
                    </div>
                    {this.state.housingStatsPopup ?
                    <span> 
                        <div className="filter-popup-div demographics-div" ref={this.setHousingStatsPopupRef}>
                            {renderFilters}
                        </div>
                    </span> : null }                       
                </div>
            </Aux>
            )
        }
}

export default HousingStatsFilter;
